<template>
    <div class="div">
        <nav class="div__nav">
            abc
        </nav>
        <div class="div__div--letters">
            <div v-for="word in word">
                <div class="draggable" @mousedown="startDrag($event, word)">{{ word }}</div>
            </div>
        </div>
        <main class="div__main">
            <div class="div__main__div div__main__div--text">
                &nbsp;
                {{word_place}}
            </div>
            <div class="div__main__div">
                <img v-bind:src="image" class="div__main__div__img img-fluid" alt="">
            </div>
            <div class="div__main__div">
                <div class="div__main__div row">
                    <span data-letter="" class="droppable div__main__div__span col" v-for="word in word"></span>
                </div>
            </div>
        </main>
        <!--<div>{{ word_place }}</div>


        <div class="div__div">
            <span data-letter="" class="droppable" v-for="word in word"></span>
        </div>-->

    </div>
</template>
<script>
    /* eslint-disable camelcase,no-undefined,lines-around-comment */

    export default {
      name: "Search",
      data(){return {
        word: this.$route.params.word.split(''),
        word_place: '',
        image: decodeURI(this.$route.params.url),
        dropped: [],
        position: {
          x: 0,
          y: 0
        }
      };},
      methods: {
        startDrag (el, letter) {
          console.log(el);
          let mouseMove = element => {
            let pos_x = element.pageX - (el.offsetX - el.target.offsetWidth + el.layerX);
            let pos_y = element.pageY - (el.offsetY - el.target.offsetHeight + el.layerY);
            //     console.log(el.clientX);
            el.target.setAttribute('style', 'top:' + pos_y + 'px;left:' + pos_x + 'px;');
          };

          document.addEventListener('mousemove', mouseMove);

          let mouseUp = () => {
            let droppable = document.querySelectorAll('.droppable');
            for (let x = 0; x < droppable.length; x++) {
              let element = droppable[x];
              let find = this.dropped.find(find_element => {
                return find_element.draggable === el.target && find_element.droppable === element;
              });
              if (this.DraggableIsDroppableArea(el.target, element) === true && find === undefined) {
                element.setAttribute('data-letter', letter);
                this.dropped.push({
                  'droppable': element,
                  'draggable': el.target,
                });
              }
              else if (find !== undefined && this.DraggableIsDroppableArea(find.draggable, find.droppable) === false) {
                element.setAttribute('data-letter', '');
                let index = this.dropped.indexOf(find);
                this.dropped.splice(index, 1);
              }
            }
            this.checkWord();
            document.removeEventListener('mousemove', mouseMove);
            el.target.removeEventListener('mouseup', mouseUp, true);
          };

          document.addEventListener('mouseup', mouseUp, true);

        },
        checkWord()
        {
          let droppable = document.querySelectorAll('.droppable');
          this.word_place = '';
          for (let x = 0; x < droppable.length; x++) {
            this.word_place += droppable[x].getAttribute('data-letter');
          }
        },
        DraggableIsDroppableArea(draggable, droppable){
          if (
            ((this.getPosition(draggable).x + draggable.offsetWidth) > this.getPosition(droppable).x) &&
            ((this.getPosition(draggable).x) < (this.getPosition(droppable).x + droppable.offsetWidth)) &&
            ((this.getPosition(draggable).y + draggable.offsetHeight) > this.getPosition(droppable).y) &&
            ((this.getPosition(draggable).y) < (this.getPosition(droppable).y + droppable.offsetHeight))
          )
          {
            return true;
          }
          return false;
        },
        getPosition(el) {
          let xPos = 0;
          let yPos = 0;
          xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
          yPos += (el.offsetTop - el.scrollTop + el.clientTop);
          return {
            x: xPos,
            y: yPos
          };
        }
      }
    };
</script>

<style scoped lang="scss">
    .div__main
    {
        display: flex;
        justify-items: center;
        align-items: center;
        flex-direction: column;
    }
    .div__main__div
    {
        margin-top: 30px;
    }
    .div__div--letters
    {
        position: absolute;
    }
    .div__main__div--text
    {
        font-size: 40px;
    }
    .droppable
    {
        height: 100px;
        width: 100px;
        margin-left: 50px;
        margin-right: 50px;
        border:1px solid black;
        position: relative;
        z-index: -1;
    }
    .draggable
    {
        border: 1px solid black;
        width: 100px;
        height: 100px;
        font-size: 90px;
        position: absolute;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        &:hover{
            cursor: pointer;
         }
    }
</style>
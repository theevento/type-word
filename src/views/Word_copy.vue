<template>
    <div>
        <div v-for="word in word">
            <div class="draggable" @mousedown="startDrag" @mouseup="stopDrag">{{ word }}</div>
        </div>

        <div class="droppable"></div>
    </div>
</template>
<script>
    /* eslint-disable no-unused-vars,camelcase,lines-around-comment,indent,operator-assignment */

    import drop from "../mixins/drop";

    export default {
      name: "Search",
      data(){return {
        word: this.$route.params.word.split(''),
        word_place: '',
        image: decodeURI(this.$route.params.url),
        draggable: {
          clientX: null,
          clientY: null,
          offsetX: null,
          offsetY: null,
        },
      };},
      methods: {
        startDrag (el) {
         /* this.draggable.offsetX = el.offsetX;
          this.draggable.offsetY = el.offsetY;
          document.addEventListener('mousemove', this.mouseMove);*/
         document.addEventListener('mousemove', this.mouseMove);
        },
        stopDrag (el) {
          document.removeEventListener('mousemove', this.mouseMove);
          let draggable = el.target;
          let droppable = document.querySelector('.droppable');
          if (this.DraggableIsDroppableArea(draggable, droppable))
          {
            console.log('abc');
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
        mouseMove (el){
          el.pageX = this.draggable.offsetX + el.getBoundingClientRect().left - el.pageX;
          el.pageY = el.pageY - this.draggable.offsetY;

          //  el.target.setAttribute('style', 'left:'+ this.draggable.clientX + 'px;top:' + this.draggable.clientY + 'px;');
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
    .droppable
    {
        height: 500px;
        width: 500px;
        border:1px solid black;
        position: relative;
        top: 50px;
        left: 400px;
        z-index: -1;
    }
    .draggable
    {
        font-size: 30px;
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
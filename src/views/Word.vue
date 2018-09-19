<template>
    <div class="div">
        <div class="div__div div__div--letterContainer">
            <div class="div__div__div div__div__div--title">Available letters</div>
            <div class="div__div__div div__div__div--letter" v-for="word in word">
                {{word}}
            </div>
        </div>
        <div class="div__div div__div--main">
            <main class="div__div__main">
                <img class="div__div__main__img" v-bind:alt=word v-bind:src=image>
                <div class="div__div__main__div div__div__main__div--word">
                    {{wordPlace}}
                </div>
                <div class="div__div__main__div">
                    <div class="div__div__main__div__div" v-for="(word, index) in word" v-bind:data-position="index">
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>
<script>
    /* eslint-disable camelcase,no-undefined,lines-around-comment,no-empty-function,no-undef,no-alert,indent,no-unused-vars */

    export default {
      name: "Search",
      data(){return {
        word: this.$route.params.word.split(''),
        wordPlace: '',
        image: decodeURI(this.$route.params.url)
      };},
      mounted () {
          let self = this;
          $('.div__div__div--letter').draggable();
          $('.div__div__main__div__div').droppable({
              accept: '.div__div__div--letter',
              greedy: true,
              drop (event, ui) {
                 let letter = $(ui.draggable).html();
                 letter = letter.trim();
                 self.wordPlace += letter;
              },
              over(event, ui) {
                  let index = parseInt($(this).attr('data-position'));
                  console.log(index);
              }
          });
      }
    };
</script>

<style scoped lang="scss">
    .div
    {
        display: flex;
        width: 100%;
    }
    .div__div--letterContainer {
        background: rgb(7, 71, 166);
        height: 100vh;
        width: 20%;
        border-right: 2px solid #FFFFFF;
    }
    .div__div__div--letter{
        font-size: 60px;
        position: absolute;
        color: #FFFFFF;
        font-weight: bolder;
        &:hover{
            cursor: pointer;
        }
    }
    .div__div__div--title {
        color: #FFFFFF;
        text-align: center;
        font-size: 3rem;
        font-weight: bold;
        border-bottom: 1px solid #FFFFFF;
    }
    .div__div--main
    {
        background: rgb(7, 71, 166);
        height: 100vh;
        width: 80%;
    }
    .div__div__main
    {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        flex-direction: column;
    }
    .div__div__main__img
    {
        width: 70%;
        height: 50%;
        border: 3px solid #FFFFFF;
    }
    .div__div__main__div
    {
        display: flex;
        width: 70%;
        justify-content: center;
        margin-top: 50px;
    }
    .div__div__main__div__div
    {
        width: 100px;
        height: 100px;
        margin-left: 2%;
        margin-right: 2%;
        border: 2px solid #FFFFFF;
    }
    .div__div__main__div--word
    {
        color: #FFFFFF;
    }
</style>
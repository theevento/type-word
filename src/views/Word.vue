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
                
            </main>
        </div>
    </div>
</template>
<script>
    /* eslint-disable camelcase,no-undefined,lines-around-comment,no-empty-function,no-undef,no-alert,indent */

    export default {
      name: "Search",
      data(){return {
        word: this.$route.params.word.split(''),
        word_place: '',
        image: decodeURI(this.$route.params.url)
      };},
      mounted () {
          $('.div__div__div--letter').draggable();

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
</style>
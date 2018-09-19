<template>
    <main class="__homepage__main main" :class="{__homepage__resize: resize}">
        <div class="__homepage__main__div main__div">
            <MdInput @input="search" v-model="word" class="__homepage__main__div__input" label="Type your word.." />
        </div>
    </main>
</template>

<script>
    import MdInput from '../components/MdInput';
    import debounce  from 'lodash.debounce';

    export default {
      name: "HomePage",
      components: {
        MdInput,
        debounce
      },
      data(){return {
        word: '',
        resize: false
      };},
      methods: {
        search: debounce(function(){
          if (this.word.length > 0){
            this.resize = true;
            setTimeout(() => {
              this.$router.push('/search/' + this.word);
            }, 1200);
          }
        }, 1000)
      }
    };
</script>

<style lang="scss" scoped>
    .main
    {
        display: flex;
        justify-content: center;
        height: 100%;
    }
    .main__div
    {
        position: relative;
        height: 0;
        margin-top: 15%;
        width: 80%;
    }
</style>
<style>

    /* CSS ANIMATIONS */

    .__homepage__resize > .__homepage__main__div{
        transition: width 1s, margin-top 1s;
        margin-top: 2%;
        width: 30%;
    }
    .__homepage__resize > .__homepage__main__div > .__homepage__main__div__input input[type=text]{
        transition: font-size 1s;
        font-size: 25px;
    }
    .__homepage__resize > .__homepage__main__div > .__homepage__main__div__input label{
        transition: font-size 1s;
        font-size: 30px;
    }

    /* END OF CSS ANIMATIONS */

    .__homepage__main__div__input input[type=text] {
        font-size: 100px;
        text-align: center;
    }
    .__homepage__main__div__input label
    {
        font-size: 100px;
        width: 100%;
        text-align: center;
    }
    .__homepage__main__div__input label.active
    {
        font-size: 70px;
    }
</style>

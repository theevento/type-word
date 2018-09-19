<template>
    <main class="main __search__main">
        <div class="main__div__div">
            <div class="__search__main__div__div">
                <MdInput @input="search" class="__search__main__div__div__input" v-model="word" label="Type your word.." />
            </div>
        </div>
        <div class="main__div">
            <div class="main__div__div--images">
                <div class="row">
                    <span v-if="loading" class="main__div__div--images__div__span">
                        <span class="main__div__div--images__div__span__span" aria-hidden="true"></span>
                        <span class="main__div__div--images__div__span__span--text">Loading..</span>
                    </span>
                    <div v-if="loading === false" class="col-md-3 main__div__div--images__div__div" v-for="images in images">
                        <router-link :to="{path: '/image/'+word+'/'+encodeURIComponent(images.url)}">
                            <img v-bind:src="images.url" class="main__div__div--images__div__div__img img-fluid" alt="Image to choose">
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import MdInput from '../components/MdInput';
    import axios from 'axios';
    import debounce  from 'lodash.debounce';
    const GoogleImages = require('google-images');

    export default {
      components: {
        MdInput,
        axios
      },
      name: "Search",
      data(){return {
        word: this.$route.params.word,
        images: [],
        loading: true,
      };},
      methods: {
        getImages(){
          this.images = [];
          this.loading = true;
          let client = new GoogleImages('016029899262289980460:jk4gfzophd4', 'AIzaSyDW-IJT6Djp2rUxA5XnYwhk0sKSGjFJFkk');
          client.search(this.word, {page: 1})
            .then(images => {
              this.images = images;
              this.loading = false;
            });
        },
        search: debounce(function(){
          if (this.word.length > 0){
            this.getImages();
            this.$router.push('/search/' + this.word);
          }
        }, 1000)
      },
      mounted(){
        this.getImages();
      }
    };
</script>

<style scoped>
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    .main__div__div--images__div__span__span{
        text-align: center;
        border: 16px solid #f3f3f3;
        border-radius: 50%;
        border-top: 16px solid #3498db;
        border-bottom: 16px solid #3498db;
        width: 120px;
        height: 120px;
        padding: 15px;
        -webkit-animation: spin 2s linear infinite; /* Safari */
        animation: spin 2s linear infinite;
    }
    .main__div__div--images__div__span__span--text{
        position: absolute;
    }
    .main__div__div--images__div__span{
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
    }
    .main__div__div
    {
        display: flex;
        justify-content: center;
        position: relative;
    }
    .__search__main__div__div{
        margin-top: 2%;
        width: 30%;
    }
    .main__div{
        display: flex;
        justify-content: center;
    }
    .main__div__div--images{
        width: 70%;
    }
    .main__div__div--images__div__div__img{
        width: 300px;
        height: 300px;
    }
    .main__div__div--images__div__div{
        margin-bottom: 40px;
    }
</style>

<style>
    .__search__main__div__div > .__search__main__div__div__input input[type=text]{
        font-size: 25px;
        text-align: center;
    }
    .__search__main__div__div > .__search__main__div__div__input label{
        font-size: 30px;
        text-align: center;
        width: 100%;
    }
</style>
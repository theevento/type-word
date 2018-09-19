<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
};

</script>

<style>
  body, html
  {
    margin: 0 !important;
    padding: 0 !important;
    width: 100%;
    height: 100vh;
  }
  #app
  {
    width: 100%;
    height: 100%;
  }
</style>

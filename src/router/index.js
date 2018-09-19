import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../views/HomePage';
import Search from '../views/Search';
import Word from '../views/Word';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/search/:word',
      name: 'Search',
      component: Search
    },
    {
      path: '/image/:word/:url',
      name: 'Word',
      component: Word
    }
  ]
});

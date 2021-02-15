import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import NotFound from './views/NotFound.vue';
import Landing from './views/Landing.vue';
import Components from './views/Components.vue';
import Blog from './views/Blog.vue';
import Profile from './views/Profile.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',

  routes: [
    { path: '/', redirect: 'login' },

    { path: '/components', component: Components },
    { path: '/landing', component: Landing },
    { path: '/profile', component: Profile },

    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { needsAuth: true },
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },

    {
      path: '/blog',
      name: 'blog',
      component: Blog,
    },

    { path: '/:notFound(.*)', component: NotFound },
  ],

  linkExactActiveClass: 'active',

  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});

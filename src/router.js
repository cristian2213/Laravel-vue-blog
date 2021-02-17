import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import NotFound from './views/NotFound.vue';
import Landing from './views/Landing.vue';
import Components from './views/Components.vue';
import Blog from './views/Blog.vue';
import Profile from './views/Profile.vue';
import tokenAuth from './config/tokenAuth.js';

Vue.use(Router);

const router = new Router({
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
      meta: { needsAuth: true },
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

router.beforeEach((to, from, next) => {
  // validation to let access to the blog route
  if (to.meta.needsAuth && to.name === 'blog') {
    const jwt = JSON.parse(localStorage.getItem('JeXAitsi')); // token name

    /**
     ** validate that the token and role exist
     * jwt.XRoXC9.C8xMjcuMC: rol
     * jwt.wNzkxLCJu: toke type
     * jwt.TYxMzU0: toke
     */
    if (jwt && jwt.XRoXC9.C8xMjcuMC === 'User') {
      // add token to headers
      tokenAuth(jwt.wNzkxLCJu, jwt.TYxMzU0);
      next();
    } else {
      // delete token from headers
      tokenAuth(false, false);
      next({ name: 'login' });
    }
  } else next();
});

export default router;

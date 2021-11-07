import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import { routes } from './router';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history', // default hash
  scrollBehavior(to,from,savedPosition) {
    if(to.hash) {
      return {
        selector: to.hash
      }
    }
  }
});
// Guard Hook functions dummy
router.beforeEach((to, from, next) => {
  console.log("Global control");
  next();
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

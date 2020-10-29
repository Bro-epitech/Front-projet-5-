import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Auth from '../components/Authentification.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sign_up',
    component: () => import('../components/Registration.vue')
  },
  {
    path: '/sign_in',
    component: () => import('../components/Authentification.vue')
  },
  {
    path: '/skills',
    component: () => import('../components/SkillsManager.vue'),
    meta: {requiresAuth: true}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(Auth.password == 'yo'){
      next()
    }
    else{
      next('/sign_in')
    }
  }
   
  else{
    next();
  }

});
export default router

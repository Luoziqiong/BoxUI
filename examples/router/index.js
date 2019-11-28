import VueRouter from 'vue-router'


const router = new VueRouter({
  routes: [
    { 
      path: '/', 
      component: ()=> import('../views/index/index.vue')
    }
  ]
})

export default router
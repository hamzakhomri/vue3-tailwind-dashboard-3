import { createWebHistory, createRouter } from 'vue-router';

import Dashboard from '@/views/master/Dashboard.vue';
import Login from '@/views/master/Login.vue';

import Categories from '@/views/Categories.vue';
import Products from '@/views/Products.vue';
import Tester from '@/views/Tester.vue';

//===========================Open on Default=========================
const dashboard = {
                    path:'/dashboard', name:'Dashboard', component:Dashboard, 
                    children:[
                          { path: '/Products', name: 'Products', component: Products},        
                          { path: '/Categories', name: 'Home', component: Categories},
                          { path:'/Tester',name:'Tester',component:Tester }
                          ]
                  }

const login={ path:'/', name:'Login', component:Login}  

const routes = [ dashboard,login ];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

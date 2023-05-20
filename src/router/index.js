import { createWebHistory, createRouter } from 'vue-router';
import Categories from '@/views/Categories.vue';
import Products from '@/views/Products.vue';
import Dashboard from '@/views/master/Dashboard.vue';
import Login from '@/views/master/Login.vue';

//=============================Open on Click===========================
const profil    = { path: '/Products', name: 'Products', component: Products}
//===========================Open on Default=========================
const dashboard = {
                    path:'/dashboard', name:'Dashboard', component:Dashboard, 
                    children:[profil, { path: '/Categories', name: 'Home', component: Categories}]
                  }

const login={ path:'/', name:'Login', component:Login}  

const routes = [ dashboard,login ];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

import { createWebHistory, createRouter } from 'vue-router';
import Categories from '@/views/Categories.vue';
import Profil from '@/views/Profil.vue';
import Dashboard from '@/views/master/Dashboard.vue';
import Login from '@/views/master/Login.vue';

//=============================Open on Click===========================
const profil    = { path: '/profil', name: 'Profil', component: Profil}
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

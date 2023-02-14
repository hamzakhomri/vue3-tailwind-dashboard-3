import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/Home.vue';
import Profil from '@/views/Profil.vue';
import Dashboard from '@/views/master/Dashboard.vue';

//===========================Open on Default=========================
const dashboard = { path:'/', name:'Dashboard', component:Dashboard }
//=============================Open on Click===========================
const profil    = { path: '/profil', name: 'Profil', component: Profil}
const home      = { path: '/home', name: 'Home', component: Home};

const routes = [
                home ,
                profil,
                dashboard
                ];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

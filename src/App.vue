

<template>
  
  <div >
    <!-- <router-link to="/home">Home</router-link>/
    <router-link to="/profil">Profil</router-link>/
    <router-link to="/dashboard">dashboard</router-link> -->
  </div>
  <router-view />
</template>

<script>
export default {
  props: {
  },
  name: 'App',
}
</script>


<style>
#app{
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing:grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

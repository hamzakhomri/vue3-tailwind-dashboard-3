<template>
  <div >
    <router-link to="/">noth</router-link>/
    <router-link to="/home">Home</router-link>/
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
*{
  background-color: beigef;
}
</style>

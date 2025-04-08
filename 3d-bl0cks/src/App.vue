<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">-->
  <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <MainPage/>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import MainPage from './components/main.vue'

export default {
  name: 'App',
  components: {
    MainPage
    //HelloWorld
  }
}
</script>

<style>
  main {
    padding: 0px;
  }
</style>

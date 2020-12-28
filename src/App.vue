<template>
  <div id="app">
    <Navbar></Navbar> <!--navbar模塊-->
    <router-view></router-view> <!--vue-router內所有模塊會被引用在此-->
    <Footer></Footer> <!--footer模塊-->


  </div>
</template>

<script>
import Navbar from './components/navbar'
import Footer from './components/footer';
// import home from './components/index'

export default {
  name: 'App',
  components: {
    Footer,
    Navbar,
    // home
  },
};
</script>

<style lang="scss">
@import "./sass/index.scss";
</style>

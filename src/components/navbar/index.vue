<template>
  <!-- .navbar-expand-{sm|md|lg|xl}決定在哪個斷點以上就出現漢堡式選單 -->
    <!-- navbar-dark 文字顏色 .bg-dark 背景顏色 -->
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          <!-- <img src="img/logo.png" width="30" height="30" class="d-inline-block align-top" alt=""> -->
          <span class="h3 mx-1">WebDesign</span>
        </router-link>

        <!-- .collapse.navbar-collapse 用於外層中斷點群組和隱藏導覽列內容 -->
        <!-- 選單項目&漢堡式折疊選單 -->
        <div class="collapse navbar-collapse" v-if="desktop">
          <ul class="navbar-nav mr-auto">
            <!-- active表示當前頁面 -->
            <li class="nav-item">
              <router-link to="/Fare" class="nav-link" >計費方式<span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item">
              <router-link to="/ReserveStep" class="nav-link" >預約流程</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Company" class="nav-link" >合作廠商</router-link>
            </li>
            <!-- .dropdown Navbar選項使用下拉式選單 -->
            <!-- <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">作品集</a> -->
              <!-- .dropdown-menu 下拉選單內容 -->
              <!-- <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">網頁設計</a>
                <a class="dropdown-item" href="#">平面設計</a>
              </div>
            </li> -->
          </ul>
          <!-- <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search
            </button>
          </form> -->
        </div>

        <div class="nav-right">
          <ul>
            <li>語言</li>
            <li>購物車</li>
            <li><router-link to="/Login">登入</router-link></li>
          </ul>
          <!-- .navbar-toggler 漢堡式選單按鈕 -->
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" v-if="!desktop">
            <!-- .navbar-toggler-icon 漢堡式選單Icon -->
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>

                <!-- .collapse.navbar-collapse 用於外層中斷點群組和隱藏導覽列內容 -->
        <!-- 選單項目&漢堡式折疊選單 -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent" v-if="!desktop">
          <ul class="navbar-nav mr-auto">
            <!-- active表示當前頁面 -->
            <li class="nav-item">
              <a class="nav-link" href="#">計費方式<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">預約流程</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">合作廠商</a>
            </li>
            <!-- .dropdown Navbar選項使用下拉式選單 -->
            <!-- <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">作品集</a> -->
              <!-- .dropdown-menu 下拉選單內容 -->
              <!-- <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">網頁設計</a>
                <a class="dropdown-item" href="#">平面設計</a>
              </div>
            </li> -->
          </ul>
          <!-- <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search
            </button>
          </form> -->
        </div>

      </div>

      <!-- .navbar-brand 左上LOGO位置 -->


    </nav>
</template>

<script>
import 'bootstrap';

export default {
  name: 'App',
  data() {
    return {
      desktop: true, //偵測螢幕尺寸
    };
  },
  methods: {
    //偵測螢幕尺寸
    watchWindowSize() {
      let windowSize = $(window).width();
      if (windowSize > 992) {
        this.desktop = true;
      } else {
        this.desktop = false;
      }
    },
  },
  created() {
    window.addEventListener('resize', this.watchWindowSize);
  },
  mounted(){
    // this.watchWindowSize();
  },
  destroyed() {
    window.removeEventListener('resize', this.watchWindowSize);
  },
};
</script>

<style scoped lang="scss">
  .nav-right  {
    box-sizing: border-box;
    *{
      display: inline-block;
      padding: 0 5px;
      color: white;
    }

  }
</style>

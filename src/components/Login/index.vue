<template>
  <div class="mt-60">
    <div class="container-sm">
      <div class="login-wrap">
        <div class="tabbar">
          <div class="row">
            <div class="col-12 tabbar-item" :class="currentTab == 'login' ? 'active' : ''" @click="switchCurrentTab('login')">會員登入/註冊</div>
            <div class="col-12 tabbar-item" :class="currentTab == 'forgetPwd' ? 'active' : ''" @click="switchCurrentTab('forgetPwd')">忘記密碼</div>
          </div>
        </div>
        <login-module v-if="currentTab === 'login'"></login-module>
        <forget-pwd-module v-if="currentTab === 'forgetPwd'"></forget-pwd-module>
      </div>
    </div>
  </div>
</template>

<script>

import LoginModule from "./Login/index.vue";
import ForgetPwdModule from "./ForgetPwd/index.vue";


export default {
  name: 'Login',
  data() {
    return {
      currentTab: "login", //偵測螢幕尺寸
    };
  },
  components: {
    LoginModule,
    ForgetPwdModule
  },
  methods:{
    switchCurrentTab(currentTab){
      this.currentTab = currentTab
    }
  },
  mounted(){

  }
};
</script>

<style lang="scss" scoped>
* {
  // outline: 1px solid red;
}

.container-sm {
  width: 100%;
  max-width: 960px;
}

.login-wrap {
  padding: 60px 0 40px 0;
}

.tabbar {
  width: 100%;
  border-radius: 5px 5px 0 0;
  overflow: hidden;

  .tabbar-item {
    background-color: rgba(#d32a32,0.8);
    text-align: center;
    color: white;
    line-height: 36px;
    cursor: pointer;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;

    &:hover, &.active {
      background-color: #d32a32;
    }

  }

  .tabbar-item + .tabbar-item {
    border-left: 1px solid white;
  }
}

@media screen and (min-width: 768px) {

}

@media screen and (min-width: 992px) {

}
</style>

<template>
  <div class="mt-60">
    <div class="container-sm">
      <div class="login-wrap">
        <div class="tabbar">
          <div
            class="tabbar-item tab1"
            :class="currentTab == 'tab1' ? 'active' : ''"
            @click="switchCurrentTab('tab1')"
          >
            <p>預約接機</p>
            <p>離開機場</p>
          </div>
          <div
            class="tabbar-item tab2"
            :class="currentTab == 'tab2' ? 'active' : ''"
            @click="switchCurrentTab('tab2')"
          >
            <p>預約送機</p>
            <p>前往機場</p>
          </div>
          <div
            class="tabbar-item tab3"
            :class="currentTab == 'tab3' ? 'active' : ''"
            @click="switchCurrentTab('tab3')"
          >
            <p>短中長途</p>
            <p>接送服務</p>
          </div>
          <div
            class="tabbar-item tab4"
            :class="currentTab == 'tab4' ? 'active' : ''"
            @click="switchCurrentTab('tab4')"
          >
            <p>預約全日</p>
            <p>觀光包車</p>
          </div>
        </div>
        <tab1 v-if="currentTab === 'tab1'"></tab1>
        <tab2 v-if="currentTab === 'tab2'"></tab2>
        <tab3 v-if="currentTab === 'tab3'"></tab3>
        <tab4 v-if="currentTab === 'tab4'"></tab4>
      </div>
    </div>
  </div>
</template>

<script>
import Tab1 from "./Tab1/index.vue";
import Tab2 from "./Tab2/index.vue";
import Tab3 from "./Tab3/index.vue";
import Tab4 from "./Tab4/index.vue";

export default {
  name: "PickUp",
  data() {
    return {
      currentTab: "tab1"
    };
  },
  components: {
    Tab1,
    Tab2,
    Tab3,
    Tab4
  },
  methods: {
    switchCurrentTab(currentTab) {
      this.currentTab = currentTab;
    }
  },
  mounted() {}
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
  overflow: hidden;
  display: flex;

  .tabbar-item {
    width: 100px;
    padding: 10px 0;
    border-radius: 5px 5px 0 0;
    background-color: #000000;
    text-align: center;
    color: #d32a32;
    // line-height: 36px;
    cursor: pointer;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;

    *{
      color: #d32a32;
    }
    &:hover,&.active{
      background: #d32a32;
      *{
        color:#ffffff;
      }
    }
    // &.tab1:hover,
    // &.tab1.active {
    //   background-color: #039ba1;
    //   * {
    //     color: white;
    //   }
    // }

    // &.tab2:hover,
    // &.tab2.active {
    //   background: #457fce;
    //   * {
    //     color: white;
    //   }
    // }

    // &.tab3:hover,
    // &.tab3.active {
    //   background: #d96608;
    //   * {
    //     color: white;
    //   }
    // }

    // &.tab4:hover,
    // &.tab4.active {
    //   background: #309e2b;
    //   * {
    //     color: white;
    //   }
    // }
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

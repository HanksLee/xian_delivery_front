<template>
  <div class="mt-60">
    <div class="container-sm">
      <div class="member-wrap">
        <el-select v-model="currentTab" class="tabbar" :popper-append-to-body="false">
          <el-option
            v-for="item in tabOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <history-module v-if="currentTab === 'historyModule'"></history-module>
        <new-order-module v-if="currentTab === 'newOrderModule'"></new-order-module>
        <address-edit-module v-if="currentTab === 'addressEditModule'"></address-edit-module>
        <info-module v-if="currentTab === 'infoModule'"></info-module>
        <invoice-module v-if="currentTab === 'invoiceModule'"></invoice-module>
        <mobile-module v-if="currentTab === 'mobileModule'"></mobile-module>
        <reset-pwd-module v-if="currentTab === 'resetPwdModule'"></reset-pwd-module>
        <coupon-module v-if="currentTab === 'couponModule'"></coupon-module>
      </div>
    </div>
  </div>
</template>

<script>
import HistoryModule from "./history/index.vue";
import NewOrderModule from "./NewOrder/index.vue";
import AddressEditModule from "./AddressEdit/index.vue";
import InfoModule from "./Info/index.vue";
import InvoiceModule from "./Invoice/index.vue";
import MobileModule from "./Mobile/index.vue";
import ResetPwdModule from "./ResetPwd/index.vue";
import CouponModule from "./Coupon/index.vue";

export default {
  name: "member",
  data() {
    return {
      currentTab: "newOrderModule",
      tabOptions: [
        {
          value: "newOrderModule",
          label: "新預約"
        },
        {
          value: "historyModule",
          label: "歷史訂單"
        },
        {
          value: "addressEditModule",
          label: "常用地址管理"
        },
        {
          value: "infoModule",
          label: "編輯個人資料"
        },
        {
          value: "invoiceModule",
          label: "預設發票資訊"
        },
        {
          value: "mobileModule",
          label: "行動電話變更驗證"
        },
        {
          value: "resetPwdModule",
          label: "重設密碼"
        },
        {
          value: "couponModule",
          label: "我的折扣券"
        },
        {
          value: "logout",
          label: "登出"
        }
      ]
    };
  },
  components: {
    HistoryModule,
    NewOrderModule,
    AddressEditModule,
    InfoModule,
    InvoiceModule,
    MobileModule,
    ResetPwdModule,
    CouponModule
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

.member-wrap {
  padding: 60px 0 40px 0;

  .tabbar {
    display: block;
    margin-bottom: 30px;

    >>> .el-input__inner {
      background: #457fce;
      color: white;
      border: none;
      border-radius: 5px 5px 0 0;
    }
  }
}

>>> .el-select-dropdown__wrap{
  max-height: none ;
}

>>> .el-select-dropdown {
  margin: 0;
  border: none;
  border-radius: 0 0 5px 5px;

  .el-select-dropdown__list {
    padding: 0;
  }

  .el-select-dropdown__item {
    background-color: #245598;

    span {
      color: white;
      font-size: 14px;
      font-weight: normal;
    }
  }

  .el-select-dropdown__item.hover {
    background: #457fce;
  }

  .popper__arrow {
    display: none;
  }
}

@media screen and (min-width: 768px) {
}

@media screen and (min-width: 992px) {
}
</style>

<template>
  <div class="member-container">
    <p class="member-title">會員中心/我的折扣券</p>
    <el-form>
      <div class="question-container">
        <div class="input-container coupon-container">
          <p>我的折扣券</p>
          <el-form-item>
            <el-input v-model="formData.coupon" placeholder="請輸入折扣券" class="input-item captcha"></el-input>
            <span class="add-coupon">新增折扣券</span>
          </el-form-item>
        </div>
      </div>
      <div class="coupon-info">
        <p>現有折扣券一覽</p>
        <el-table :data="tableData" style="width: 100%" border>
          <el-table-column prop="date" label="折扣券代碼"></el-table-column>
          <el-table-column prop="name" label="折扣金額"></el-table-column>
          <el-table-column prop="address" label="有效期限"></el-table-column>
        </el-table>
      </div>
      <div class="submit-container">
        <span class="back-btn">回首頁</span>
        <span class="member-btn">送出</span>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "member",
  data() {
    return {
      formData: {
        location: ""
      },
      tableData:{

      }
    };
  },
  components: {},
  methods: {},
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

  .member-container {
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);
  }

  .member-title {
    background-color: #457fce;
    color: white;
    line-height: 50px;
    text-align: center;
    border-radius: 5px 5px 0 0;
  }

  .question-text {
    background: #eaeaea;
    color: #0a499d;
    text-align: center;
    font-weight: bold;
    padding: 0 8px;
    line-height: 36px;
  }

  .input-container {
    padding: 20px 40px;
    max-width: 300px;
    margin: auto;

    .el-form-item {
      margin-bottom: 5px;
    }

    .el-input__inner {
    }

    > p {
      margin-bottom: 10px;
    }

    &.coupon-container {
      max-width: 500px;
      margin: 50px auto;
      // background: #eaeaea;
      border-radius: 5px;
      text-align: center;
      >>> .captcha {
        width: calc(100% - 20px - 117px);
        display: inline-block;
      }

      .add-coupon {
        display: inline-block;
        border-radius: 3px;
        line-height: 36px;
        background-color: #d72828;
        color: #fff;
        padding: 0 10px;
      }
    }

    .input-item {
      width: calc(100% - 20px);
      line-height: 35px;
      // border: 1px solid gray;
      border-radius: 3px;
      margin-bottom: 20px;
    }
  }

  .coupon-info {
    text-align: center;
    padding: 0 20px;
    margin-bottom: 50px;
  }

  .submit-container {
    background-color: #fff;
    padding: 20px 10px;
    text-align: right;
    border-top: 1px solid #ccc;

    .member-btn,
    .back-btn {
      display: inline-block;
      vertical-align: top;
      font-size: 18px;
      color: #fff;
      position: relative;
      top: 0;
      opacity: 0.8;
      line-height: 46px;
      padding: 0 35px;
      -webkit-border-radius: 5px;
      border-radius: 5px;
      -webkit-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
      &:hover {
        cursor: pointer;
        opacity: 1;
      }
    }

    .member-btn {
      background: #457fce;
    }

    .back-btn {
      background: #7f7f7f;
    }
  }

  .highlight {
    color: #d72828;
  }
}

@media screen and (min-width: 768px) {
}

@media screen and (min-width: 992px) {
}
</style>

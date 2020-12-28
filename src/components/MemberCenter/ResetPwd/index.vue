<template>
  <div class="member-container">
    <p class="member-title">會員中心/重設密碼</p>
    <el-form>
      <div class="question-container">
        <div class="input-container">
          <el-form-item>
            <el-input v-model="formData.oldPassword" placeholder="請輸入舊密碼" class="input-item"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="formData.newPassword" placeholder="請輸入新密碼" class="input-item"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="formData.checkNewPassword" placeholder="請再次輸入新密碼" class="input-item"></el-input>
          </el-form-item>
        </div>
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

    .mobile-text,
    .mobile-content {
      text-align: center;
    }

    .mobile-text {
      font-size: 20px;
    }

    .mobile-content {
      font-size: 30px;
      color: #457fce;
    }

    .input-item {
      width: calc(100% - 20px);
      line-height: 35px;
      // border: 1px solid gray;
      border-radius: 3px;
      margin-bottom: 20px;
    }
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

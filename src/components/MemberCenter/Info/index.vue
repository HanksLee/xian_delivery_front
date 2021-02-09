<template>
  <div class="member-container">
    <p class="member-title">會員中心/常用地址管理</p>
    <el-form>
      <div class="question-container">
        <div class="input-container">
          <div class="row">
            <div class="col-24 col-lg-12">
              <el-form-item>
                <el-input v-model="formData.name" placeholder="請輸入姓名" class="input-item" />
              </el-form-item>
            </div>
            <div class="col-24 col-lg-12">
              <p class="mobile">電話：09123456789</p>
            </div>
            <div class="col-24">
              <el-form-item>
                <el-input
                  v-model="formData.email"
                  placeholder="請輸入電子信箱"
                  class="input-item"
                  disabled
                />
              </el-form-item>
            </div>
            <div class="col-24 col-lg-12">
              <el-form-item>
                <el-input
                  v-model="formData.otherPeopleName"
                  placeholder="請輸入第二聯絡人"
                  class="input-item"
                />
              </el-form-item>
            </div>
            <div class="col-24 col-lg-12">
              <el-form-item>
                <el-input
                  v-model="formData.whatsApp"
                  placeholder="請輸入Whats' app"
                  class="input-item"
                />
              </el-form-item>
            </div>
            <div class="col-24 col-lg-12">
              <el-form-item>
                <el-input
                  v-model="formData.otherPeopleMobile"
                  placeholder="請輸入其他搭車人電話"
                  class="input-item"
                />
              </el-form-item>
            </div>
            <div class="col-24 col-lg-12">
              <el-form-item>
                <el-input v-model="formData.departant" placeholder="請輸入社區或大樓名稱" class="input-item" />
              </el-form-item>
            </div>
            <div class="col-24 col-lg-12">
              <el-form-item>
                <el-input v-model="formData.line" placeholder="請輸入Line" class="input-item" />
              </el-form-item>
            </div>
            <div class="col-24 col-lg-12">
              <el-form-item>
                <el-input v-model="formData.facebook" placeholder="請輸入Facebook" class="input-item" />
              </el-form-item>
            </div>
            <div class="col-24 col-lg-12">
              <el-form-item>
                <el-input v-model="formData.weChat" placeholder="請輸入WeChat" class="input-item" />
              </el-form-item>
            </div>
            <div class="col-24 col-lg-12">
              <el-form-item>
                <el-input v-model="formData.twitter" placeholder="請輸入twitter" class="input-item" />
              </el-form-item>
            </div>
            <div class="col-24">
              <el-form-item>
                <el-input
                  v-model="formData.remark"
                  placeholder="請輸入常用備註，僅供提醒不在訂車合約規範內"
                  class="input-item"
                  type="textarea"
                />
              </el-form-item>
            </div>
            <!-- <div class="other-login-btn-container">
              <span class="login-btn fb-login">
                <img src="../../../assets/img/facebook.png" alt="facebook.png" />使用Facrbook帳號登入
              </span>
              <span class="login-btn google-login">
                <img src="../../../assets/img/google.png" alt="google.png" />使用Google帳號登入
              </span>
            </div> -->
          </div>
        </div>
      </div>
      <div class="submit-container">
        <!-- <span class="back-btn">回首頁</span> -->
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
    background-color: #d32a32;
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

    .el-form-item {
      margin-bottom: 5px;
    }

    .el-input__inner {
    }

    > p {
      margin-bottom: 10px;
    }

    .input-item {
      width: calc(100% - 20px);
      line-height: 35px;
      // border: 1px solid gray;
      border-radius: 3px;
      margin-bottom: 20px;
    }

    .mobile {
      line-height: 35px;
    }

    .location-text {
      padding: 20px 50px;
      border-bottom: 1px dashed #ccc;
      text-align: center;
      margin-bottom: 20px;
    }

    .location-input {
      width: calc(100% - 20px - 10px - 100px);
      margin-right: 10px;
    }

    .location-btn {
      color: white;
      width: 100px;
      display: inline-block;
      background: #b65b65 !important;
      // padding: 6px 0;
      font-weight: bold;
      font-size: 14px;
      -webkit-border-radius: 5px;
      border-radius: 5px;
      text-align: center;
    }
  }

  .login-btn-container,
  .other-login-btn-container,
  .register-btn-container {
    width: 100%;
    // margin: auto;
    padding: 20px 0;
    text-align: center;
  }

  .other-login-btn-container {
    border-top: 1px solid #ccc;
    background: #FFF;
    -webkit-border-radius: 0 0 5px 5px;
    border-radius: 0 0 5px 5px;
    padding-left: 20px;
    padding-right: 20px;
    position: relative;
  }

  .other-login-btn-container {
    &::before {
      content: "或";
      font-size: 18px;
      font-weight: bold;
      color: #333;
      background-color: inherit;
      padding: 0 10px;
      display: block;
      position: absolute;
      top: -13px;
      left: 50%;
      transform: translate(-50%);
    }
  }



  .login-btn {
    display: inline-block;
    vertical-align: top;
    font-size: 18px;
    color: #fff;
    background: #d32a32;
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

    &.fb-login,
    &.google-login {
      width: 320px;

      img {
        width: 30px;
        position: relative;
        top: 8px;
        margin-right: 5px;
      }
    }

    &.fb-login {
      margin-bottom: 10px;
      background-color: #4267b2;
    }

    &.google-login {
      // margin-top: 10px;
      background-color: #dd4e40;
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
      background: #d32a32;
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
  .member-wrap .login-btn.fb-login {
    margin-bottom: 0;
}
}

@media screen and (min-width: 992px) {
}
</style>

<template>
  <div class="login-container">
    <p class="login-title">會員登入/註冊</p>
    <div class="login-content">
      <div class="row">
        <div class="col-24 col-lg-12">
          <p>使用祥順國際帳號登入</p>
          <div class="login-box">
            <div class="input-container">
              <img src="../../../assets/img/email.png" alt="email.png" />
              <input type="text" placeholder="請填寫帳號(電子郵件)" />
            </div>
            <div class="input-container">
              <img src="../../../assets/img/password.png" alt="password.png" />
              <input type="text" placeholder="請填寫密碼" />
            </div>
            <div class="login-btn-container">
              <span class="login-btn">登入</span>
              <span class="forget-pwd-text">忘記密碼？</span>
            </div>
          </div>
          <div class="other-login-btn-container">
            <span class="login-btn fb-login">
              <img src="../../../assets/img/facebook.png" alt="facebook.png" />使用Facrbook帳號登入
            </span>
            <span class="login-btn google-login">
              <img src="../../../assets/img/google.png" alt="google.png" />使用Google帳號登入
            </span>
          </div>
        </div>
        <div class="col-24 col-lg-12">
          <p>初次加入註冊會員</p>
          <div class="register-box">
            <div class="input-container">
              <img src="../../../assets/img/member.png" alt="member.png" />
              <input type="text" placeholder="請填寫姓名" />
            </div>
            <div class="input-container">
              <img src="../../../assets/img/email.png" alt="email.png" />
              <input type="text" placeholder="請填寫帳號(電子郵件)" />
            </div>
            <div class="input-container">
              <img src="../../../assets/img/password.png" alt="password.png" />
              <input type="text" placeholder="請填寫密碼" />
            </div>
            <div class="input-container">
              <img src="../../../assets/img/tel.png" alt="tel.png" />
              <input type="text" placeholder="請填寫電話" />
            </div>
            <div class="input-container captcha-container">
              <img src alt />
              <input type="text" placeholder="請填寫驗證碼" />
              <span class="get-captcha">獲取驗證碼</span>
            </div>
          </div>
          <div class="register-btn-container">
            <span class="register-btn">確認</span>
            <p>若按下「註冊會員」，即表示您同意 使用條款 並確認您已詳閱隱私政策、「租賃定型化契約」。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginModule",
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

.login-wrap {
  padding: 60px 0 40px 0;

  .login-container {
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);
    border-radius: 0 0 10px 10px;
    overflow: hidden;
  }

  .login-title {
    background-color: #d32a32;
    color: white;
    line-height: 50px;
    text-align: center;
  }

  .login-content {
    padding: 40px 25px;

    p {
      text-align: center;
      padding: 20px 0;
      font-weight: bold;
    }

    .login-box,
    .register-box {
      background: #eaeaea;
      padding: 30px 30px;
      -webkit-border-radius: 5px 5px 0 0;
      border-radius: 5px 5px 0 0;

      .input-container {
        margin-bottom: 10px;
        img {
          display: inline-block;
          width: 20px;
          margin-right: 10px;
          position: relative;
          top: 8px;
        }

        input {
          width: calc(100% - 40px);
          border: 1px solid #ccc;
          border-radius: 3px;
          line-height: 36px;
        }

        &.captcha-container {
          input {
            width: calc(100% - 40px - 117px);
          }

          .get-captcha {
            display: inline-block;
            border-radius: 3px;
            line-height: 36px;
            background-color: #d72828;
            color: #fff;
            padding: 0 10px;
            cursor: pointer;
          }
        }
      }
    }

    .login-btn-container,
    .other-login-btn-container,
    .register-btn-container {
      margin: auto;
      padding: 20px 0;
      text-align: center;
    }

    .other-login-btn-container,
    .register-btn-container {
      border-top: 1px solid #ccc;
      background: #eaeaea;
      -webkit-border-radius: 0 0 5px 5px;
      border-radius: 0 0 5px 5px;
      padding-left: 20px;
      padding-right: 20px;
      position: relative;
    }

    .other-login-btn-container {
      &::before {
        content: "或使用";
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

    .register-btn-container {
      p {
        text-align: left;
        letter-spacing: 0;
        font-size: 14px;
        font-weight: normal;
      }
    }

    .login-btn,
    .register-btn {
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
        width: 100%;

        img {
          width: 30px;
          position: relative;
          top: 8px;
          margin-right: 5px;
        }
      }

      &.fb-login {
        background-color: #4267b2;
      }

      &.google-login {
        margin-top: 10px;
        background-color: #dd4e40;
      }
    }

    .register-btn {
      width: 100%;
    }

    .forget-pwd-text {
      display: inline-block;
      line-height: 20px;
      position: relative;
      top: 13px;
      -webkit-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
      &:hover {
        cursor: pointer;
        color: #d72828;
      }
    }
  }
}

@media screen and (min-width: 768px) {
}

@media screen and (min-width: 992px) {
}
</style>

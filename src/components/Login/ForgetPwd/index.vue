<template>
  <div class="forget-pwd-container">
    <p class="forget-pwd-title">忘記密碼</p>
    <div class="forget-pwd-content">
      <div class="row">
        <div class="col-24">
          <p>忘記密碼</p>
          <div class="forget-pwd-box">
            <div class="input-container">
              <img src="../../../assets/img/email.png" alt="email.png" />
              <input type="text" placeholder="請填寫帳號(電子郵件)" />
            </div>
            <div class="input-container">
              <img src="../../../assets/img/tel.png" alt="tel.png" />
              <input type="text" placeholder="請填寫電話" />
            </div>
          </div>
          <div class="submit-btn-container">
            <span class="submit-btn">確認變更</span>
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
.forget-pwd-container {
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);
  border-radius: 0 0 10px 10px;
  overflow: hidden;
}

.forget-pwd-title {
  background-color: #d32a32;
  color: white;
  line-height: 50px;
  text-align: center;
}

.forget-pwd-content {
  padding: 40px 25px;

  p {
    text-align: center;
    padding: 10px 0;
    font-weight: bold;
  }

  .forget-pwd-box {
    padding: 30px 20px;
    -webkit-border-radius: 5px 5px 0 0;
    border-radius: 5px 5px 0 0;

    .input-container {
      margin: auto;
      margin-bottom: 10px;
      width: 300px;
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
    }
  }

  .submit-btn-container {
    margin: auto;
    padding: 20px 0;
    text-align: right;
    border-top: 1px solid #ccc;
    -webkit-border-radius: 0 0 5px 5px;
    border-radius: 0 0 5px 5px;
    padding-left: 20px;
    padding-right: 20px;
    position: relative;
  }

  .submit-btn {
    display: inline-block;
    width: 150px;
    vertical-align: top;
    font-size: 18px;
    color: #fff;
    background: #d32a32;
    position: relative;
    top: 0;
    opacity: 0.8;
    line-height: 46px;
    text-align: center;
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
}

@media screen and (min-width: 768px) {
}

@media screen and (min-width: 992px) {
}
</style>

<template>
  <div class="member-container">
    <p class="member-title">會員中心/歷史訂單</p>
    <!-- <div class="question-container">
              <div class="input-container">
                <div class="row">
                  <div class="col-24 col-lg-12">
                    <el-form-item>
                      <el-input
                        v-model="formData.contactInfo.departant"
                        placeholder="請輸入社區或大樓名稱"
                        class="input-item"
                      />
                    </el-form-item>
                  </div>
                  <div class="col-24 col-lg-12">
                    <el-form-item>
                      <el-input
                        v-model="formData.contactInfo.hotel"
                        placeholder="請輸入飯店及房號"
                        class="input-item"
                      />
                    </el-form-item>
                  </div>
                  <div class="col-24 col-lg-12">
                    <el-form-item>
                      <el-input
                        v-model="formData.contactInfo.line"
                        placeholder="請輸入Line"
                        class="input-item"
                      />
                    </el-form-item>
                  </div>
                  <div class="col-24 col-lg-12">
                    <el-form-item>
                      <el-input
                        v-model="formData.contactInfo.otherPersonMobile"
                        placeholder="請輸入其他搭車人電話"
                        class="input-item"
                      />
                    </el-form-item>
                  </div>
                  <div class="col-24 col-lg-12">
                    <el-form-item>
                      <el-input
                        v-model="formData.contactInfo.weChat"
                        placeholder="請輸入WeChat"
                        class="input-item"
                      />
                    </el-form-item>
                  </div>
                  <div class="col-24 col-lg-12">
                    <el-form-item>
                      <el-input
                        v-model="formData.contactInfo.twitter"
                        placeholder="請輸入Twitter"
                        class="input-item"
                      />
                    </el-form-item>
                  </div>
                  <div class="col-24 col-lg-12">
                    <el-form-item>
                      <el-input
                        v-model="formData.contactInfo.whatsApp"
                        placeholder="請輸入What's app"
                        class="input-item"
                      />
                    </el-form-item>
                  </div>
                  <div class="col-24 col-lg-12">
                    <el-form-item>
                      <el-input
                        v-model="formData.contactInfo.facebook"
                        placeholder="請輸入Facebook"
                        class="input-item"
                      />
                    </el-form-item>
                  </div>
                </div>
              </div>
    </div>-->
    <div class="history-container">
      <div class="remarks">
        您評分過「非常不滿意」及「有待加強」的司機，未來將不再由他們服務您，確保您的乘車品質。
        <br />司機們不會知道評分對象，請放心
      </div>
      <div class="history-info">
        <p>您目前沒有訂單紀錄</p>
      </div>
    </div>
    <div class="submit-container">
      <span class="back-btn">回首頁</span>
      <!-- <span class="member-btn">送出</span> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "member",
  data() {
    return {};
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
  }

  .history-container {
    padding: 20px;

    .remarks {
      border: 1px dashed #d72828;
      padding: 5px 50px;
      text-align: center;
      color: #d72828;
      font-size: 14px;
      letter-spacing: 1;
    }

    .history-info {
      padding: 50px 0;
      text-align: center;
      font-weight: bold;
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
}

@media screen and (min-width: 992px) {
}
</style>

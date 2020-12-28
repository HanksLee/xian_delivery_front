<template>
  <div class="pick-up-wrap">
    <div class="tab-line"></div>
    <div class="pick-up-container">
      <el-form v-model="formData">
        <div class="question-container">
          <div>
            <p class="question-text">目的地</p>
          </div>
          <div class="input-container">
            <div class="row">
              <div class="col-24 location-text">上下車地點順序如下(若有多項地址，請拖曳地址進行排序)</div>
              <div class="col-24">
                <el-form-item>
                  <el-input
                    v-model="formData.location"
                    placeholder="請填寫目的地"
                    class="input-item location-input"
                  ></el-input>
                  <div class="location-btn">確認填寫</div>
                </el-form-item>
              </div>
            </div>
          </div>
        </div>
        <div class="question-container">
          <div>
            <p class="question-text">預約乘車日期 / 其他項目</p>
          </div>
          <div class="input-container">
            <div class="row">
              <div class="col-24">
                <el-form-item label="預約方式">
                  <el-radio-group v-model="formData.type" style="vertical-align:initial">
                    <el-radio label="航班抵達時間"></el-radio>
                    <el-radio label="指定時間"></el-radio>
                  </el-radio-group>
                </el-form-item>
              </div>
              <div class="col-24">
                <el-form-item>
                  <el-date-picker
                    v-model="formData.year"
                    type="date"
                    placeholder
                    format="yyyy/MM/dd"
                  ></el-date-picker>
                </el-form-item>
              </div>
              <div class="col-14">
                <el-form-item>
                  <el-input
                    v-model="formData.airplaneNum"
                    placeholder="請填寫航班編號"
                    class="input-item"
                    style="margin-bottom:0"
                  ></el-input>
                </el-form-item>
              </div>
              <div class="col-24">
                <div class="col-10" style="padding:0">
                  <el-form-item>
                    <el-select
                      v-model="formData.carType"
                      style="width:100%;margin-bottom:0"
                      class="input-item"
                    >
                      <el-option
                        v-for="item in carOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </div>
              </div>
              <div class="col-24">
                <div class="col-10" style="padding:0">
                  <el-form-item>
                    <el-select
                      v-model="formData.people"
                      style="width:100%;margin-bottom:0"
                      class="input-item"
                    >
                      <el-option
                        v-for="item in peopleOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </div>
              </div>
              <div class="col-24">
                <div class="col-10" style="padding:0">
                  <el-form-item>
                    <el-select
                      v-model="formData.package"
                      style="width:100%;margin-bottom:0"
                      class="input-item"
                    >
                      <el-option
                        v-for="item in packageOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </div>
              </div>
              <div class="col-24">
                <div class="col-24 col-lg-10" style="padding:0">
                  <el-form-item>
                    <el-checkbox v-model="formData.raiseCard"><span>加購舉牌服務費用?(+$100)</span></el-checkbox>
                  </el-form-item>
                </div>
                <div v-if="formData.raiseCard" class="col-18" style="padding:0">
                  <el-form-item>
                    <el-input
                      type="textarea"
                      v-model="formData.raiseCardRemarks"
                      placeholder="請輸入內容"
                    ></el-input>
                  </el-form-item>
                </div>
              </div>
              <div class="col-24">
                <div class="col-24 col-lg-10" style="padding:0">
                  <el-form-item>
                    <el-checkbox v-model="formData.seats">
                      <span>加購安全座椅及其他服務?</span>
                      <p class="highlight">(兒童座椅、增高墊等等......)</p>
                    </el-checkbox>
                  </el-form-item>
                </div>
                <!-- <div v-if="formData.seats" class="col-18" style="padding:0">
                      <el-input
                        type="textarea"
                        v-model="formData.raiseCardRemarks"
                        placeholder="請輸入內容"
                      ></el-input>
                </div>-->
              </div>
              <div class="col-18">
                <el-form-item>
                  <el-input v-model="formData.coupon" placeholder="請輸入折扣碼" class="input-item"></el-input>
                </el-form-item>
              </div>
            </div>
          </div>
        </div>
        <div class="question-container">
          <div>
            <p class="question-text">填寫基本資料</p>
          </div>
          <div class="input-container">
            <p class="highlight">*為必填項目</p>
            <div class="row">
              <div class="col-24 col-lg-12">
                <el-form-item>
                  <el-input v-model="formData.name" placeholder="請填寫姓名" class="input-item" />
                  <span class="highlight">*</span>
                </el-form-item>
              </div>
              <div class="col-24 col-lg-12">
                <el-form-item>
                  <el-input v-model="formData.mobile" placeholder="請填寫行動電話" class="input-item" />
                  <span class="highlight">*</span>
                </el-form-item>
              </div>
              <div class="col-24">
                <el-form-item>
                  <el-input v-model="formData.email" placeholder="請填寫電子信箱" class="input-item" />
                  <span class="highlight">*</span>
                </el-form-item>
              </div>
              <div class="col-24">
                <el-form-item>
                  <el-input
                    v-model="formData.question"
                    type="textarea"
                    placeholder="請填寫問題說明"
                    class="input-item"
                  />
                </el-form-item>
              </div>
            </div>
          </div>
        </div>
        <div class="question-container">
          <div>
            <p class="question-text">其他聯絡方式</p>
          </div>
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
        </div>
        <div class="cost-container">
          <div class="row">
            <div class="col-8">
              <p class="cost-title">車種</p>
              <p class="cost-info">{{formData.carType}}</p>
            </div>
            <div class="col-8">
              <p class="cost-title">預估行車時間</p>
              <p class="cost-info">{{"70分鐘"}}</p>
            </div>
            <div class="col-8">
              <p class="cost-title">費用試算</p>
              <p class="cost-info">{{"$999"}}</p>
            </div>
          </div>
        </div>
        <div class="submit-container">
          <span class="company-btn">送出</span>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "pick-up-tab1",
  data() {
    return {
      formData: {
        airport: 1,
        location: "",
        type: "指定時間",
        year: new Date(),
        airplaneNum: "",
        carType: "舒適四人座",
        people: 1,
        package: 1,
        raiseCard: false,
        raiseCardRemarks: "",
        seats: false,
        coupon: "",
        name: "",
        mobile: "",
        email: "",
        question: "",
        contactInfo: {
          departant: "",
          hotel: "",
          line: "",
          otherPersonMobile: "",
          weChat: "",
          twitter: "",
          whatsApp: "",
          facebook: ""
        }
      },
      airportOptions: [
        {
          value: 1,
          label: "台灣桃園國際機場"
        },
        {
          value: 2,
          label: "台北松山機場"
        },
        {
          value: 3,
          label: "台中國際機場"
        },
        {
          value: 4,
          label: "高雄小港機場"
        },
        {
          value: 5,
          label: "台南航空站"
        },
        {
          value: 6,
          label: "花蓮國際機場"
        }
      ],
      carOptions: [
        {
          value: "舒適四人座",
          label: "舒適四人座"
        },
        {
          value: "舒適六人座",
          label: "舒適六人座"
        },
        {
          value: "舒適八人座",
          label: "舒適八人座"
        },
        {
          value: "雙B進口轎車",
          label: "雙B進口轎車"
        }
      ],
      peopleOptions: [
        {
          value: 1,
          label: "乘車人數1人"
        },
        {
          value: 2,
          label: "乘車人數2人"
        },
        {
          value: 3,
          label: "乘車人數3人"
        },
        {
          value: 4,
          label: "乘車人數4人"
        }
      ],
      packageOptions: [
        {
          value: 1,
          label: "無行李"
        },
        {
          value: 2,
          label: "1件行李"
        },
        {
          value: 3,
          label: "2件行李"
        },
        {
          value: 4,
          label: "3件行李"
        }
      ]
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

.pick-up-wrap {
  // padding: 60px 0 40px 0;

  .tab-line {
    border: 2px solid #d96608;
  }

  .pick-up-container {
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);
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

  .cost-container {
    background-color: #457fce;

    div + div {
      border-left: 1px solid #fff;
    }

    div.col-8 {
      padding: 20px 0;
    }

    .cost-title,
    .cost-info {
      text-align: center;
    }

    .cost-title {
      color: #fff;
    }

    .cost-info {
      color: #ff0;
    }
  }

  .submit-container {
    background-color: #fff;
    padding: 20px 10px;
    text-align: right;
    border-top: 1px solid #ccc;

    .company-btn {
      display: inline-block;
      vertical-align: top;
      font-size: 18px;
      color: #fff;
      background: #457fce;
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

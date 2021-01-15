<template>
  <div class="mt-60">
    <div class="container-sm">
      <div class="company-wrap">
        <div class="company-container">
          <p class="company-title">合作廠商專區</p>
          <div class="row company-content">
            <div class="col-6">
              <div class="logo-container">
                <img src="../../assets/img/company-logo1.png" alt="英國保誠人壽">
              </div>
              <p class="company-name">保誠人壽</p>
              <p class="company-info"><img src="../../assets/img/tel.png" alt="tel.png">0809-0809-68</p>
              <p class="company-info"><img src="../../assets/img/location.png" alt="location.png">臺北市信義區松智路1號8樓</p>
            </div>
            <div class="col-6">
              <div class="logo-container">
                <img src="../../assets/img/company-logo2.png" alt="今網智慧科技股份有限公司">
              </div>
              <p class="company-name">今網智慧科技股份有限公司</p>
              <p class="company-info"><img src="../../assets/img/tel.png" alt="tel.png">(02)412-8166</p>
              <p class="company-info"><img src="../../assets/img/location.png" alt="location.png">新北市永和區保生路1號18樓</p>
            </div>
            <div class="col-6">
              <div class="logo-container">
                <img src="../../assets/img/company-logo3.png" alt="White Bear Family">
              </div>
              <p class="company-name">White Bear Family</p>
              <p class="company-info"><img src="../../assets/img/tel.png" alt="tel.png">06-6376-0845</p>
              <p class="company-info"><img src="../../assets/img/location.png" alt="location.png">大阪府大阪市北区豊崎3-14-9</p>
            </div>
            <div class="col-6">
              <div class="logo-container">
                <img src="../../assets/img/company-logo4.png" alt="朋達旅遊">
              </div>
              <p class="company-name">朋達旅遊</p>
              <p class="company-info"><img src="../../assets/img/tel.png" alt="tel.png">(02)2358-7289</p>
              <p class="company-info"><img src="../../assets/img/location.png" alt="location.png">台北市中正區新生南路一段148號7樓之1</p>
            </div>
            <!-- <div class="col-6">
              <div class="logo-container">
                <img src="../../assets/img/company-logo5.png" alt="松珍生物科技股份有限公司">
              </div>
              <p class="company-name">松珍生物科技股份有限公司</p>
              <p class="company-info"><img src="../../assets/img/tel.png" alt="tel.png">(03)397-1818</p>
              <p class="company-info"><img src="../../assets/img/location.png" alt="location.png">桃園市龜山區復興三路452號</p>
            </div>
            <div class="col-6">
              <div class="logo-container">
                <img src="../../assets/img/company-logo6.png" alt="健策精密工業股份有限公司">
              </div>
              <p class="company-name">健策精密工業股份有限公司</p>
              <p class="company-info"><img src="../../assets/img/tel.png" alt="tel.png">(03) 385-7576</p>
              <p class="company-info"><img src="../../assets/img/location.png" alt="location.png">桃園市大園區中山北路268巷19號</p>
            </div> -->
          </div>
          <div>
            <p class="question-text">填寫問題</p>
          </div>
          <div class="input-container">
            <p class="highlight">*為必填項目</p>
            <div class="row">
              <div class="col-24 col-lg-12">
                <input type="text" placeholder="請填寫姓名">
                <span class="highlight">*</span>
              </div>
              <div class="col-24 col-lg-12">
                <input type="text" placeholder="請填寫行動電話">
                <span class="highlight">*</span>
              </div>
              <div class="col-12">
                <input type="text" placeholder="電子信箱">
                <span class="highlight">*</span>
              </div>
              <div class="col-16">
                <input type="text" placeholder="請輸入合作類型">
                <span class="highlight">*</span>
              </div>
              <div class="col-24">
                <input type="text" placeholder="請填寫問題說明">
              </div>
            </div>
          </div>
          <div class="submit-container">
            <span class="company-btn">送出</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Company',
  components: {

  },
  methods:{

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

.company-wrap {
  padding: 60px 0 40px 0;

  .company-container{
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);
  }

  .company-title {
    background-color: #d32a32;
    color: white;
    line-height: 50px;
    text-align: center;
    border-radius: 5px 5px 0 0;
  }

  .company-content {
    padding: 20px;

    .logo-container {
      overflow: hidden;
      -webkit-border-radius: 5px;
      border-radius: 5px;
      border: 1px solid #ccc;
      margin-bottom: 10px;
      line-height: 120px;


      &:hover {
        border: 1px solid #666;
      }

      img {
        width: 100%;
        vertical-align: middle;
      }
    }

    .company-name {
      font-weight: bold;
      text-align: center;
      letter-spacing: 0;

      &:hover {
        color: #457fce;
        cursor: pointer;
      }
    }

    .company-info {
      font-size: 14px;
      letter-spacing: 0;
      margin: 5px 0;

      img {
        width: 15px;
        margin-right: 10px;
      }
    }
  }

  .question-text {
    background: #eaeaea;
    color: #000000;
    text-align: center;
    font-weight: bold;
    padding: 0 8px;
    line-height: 36px
  }

  .input-container {
    padding: 20px 40px;

    > p {
      margin-bottom: 10px;
    }

    input {
      width: calc(100% - 20px);
      line-height: 35px;
      border: 1px solid gray;
      border-radius: 3px;
      margin-bottom: 20px;
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

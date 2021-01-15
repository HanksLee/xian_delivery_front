<template>
  <div class="mt-100">
    <div class="top-banner">
      <video autoplay loop muted>
        <source src="../../assets/video/car.mp4" type="video/mp4" />
      </video>
      <div class="container">
        <div class="button-group">
          <div class="search-order-group">
            <router-link to="/OrderSearch" class="search-order">訂單查詢</router-link>
            <router-link to="/AddDriver" class="search-order">加入駕駛</router-link>
          </div>

          <div class="button-sub-group">
            <router-link to="/PickUp">
              <!-- <div class="icon">
                <img src="../../assets/img/step1.jpg" alt="step1.jpg" />
              </div> -->
              <p>預約接機</p>
              <p>離開機場</p>
            </router-link>
            <router-link to="/PickUp">
              <!-- <div class="icon">
                <img src="../../assets/img/step1.jpg" alt="step1.jpg" />
              </div> -->
              <p>預約送機</p>
              <p>前往機場</p>
            </router-link>
            <router-link to="/PickUp">
              <!-- <div class="icon">
                <img src="../../assets/img/step1.jpg" alt="step1.jpg" />
              </div> -->
              <p>短中長途</p>
              <p>接送服務</p>
            </router-link>
            <router-link to="/PickUp">
              <!-- <div class="icon">
                <img src="../../assets/img/step1.jpg" alt="step1.jpg" />
              </div> -->
              <p>預約全日</p>
              <p>觀光包車</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row pay-flow">
        <div class="col-12 col-lg-6">
          <div class="icon-pay-display">
            <img src="../../assets/img/icon_deal.png" alt />
          </div>
          <p>加入我們穩定市場</p>
        </div>
        <div class="col-12 col-lg-6">
          <div class="icon-pay-display">
            <img src="../../assets/img/icon_locale.png" alt />
          </div>
          <p>車資計算</p>
        </div>
        <div class="col-12 col-lg-6">
          <div class="icon-pay-display">
            <img src="../../assets/img/icon_payment.png" alt />
          </div>
          <p>付款方式</p>
        </div>
        <div class="col-12 col-lg-6">
          <div class="icon-pay-display">
            <img src="../../assets/img/icon_phone.png" alt />
          </div>
          <p>預約搭乘</p>
        </div>
      </div>
    </div>
    <div class="middle-banner">
      <div>
        <img src="../../assets/img/banner2.jpg" alt="banner1.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>

<style lang="scss">
* {
  // outline: 1px solid red;
}

.top-banner {
  min-height: 500px;
  // background-color: #ccc;
  // background-image: url("../../assets/video/car.mp4");
  // background-size: cover;
  // box-sizing: border-box;
  padding-top: 20px;
  position: relative;
  overflow: hidden;
  video{
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
}
.button-group {
  width: 100%;
  padding: 5px;
  background: rgba(255,255,255,0.3);
  .search-order-group{
    display: flex;
    justify-content: space-between;
    > .search-order {
      flex-basis: 50%;
      padding: 5px;
      line-height: 36px;
      // background-color: rgba(255, 255, 255, 0.8);
      text-align: center;
      border-radius: 5px;
      margin-bottom: 20px;
    }
  }


  .button-sub-group {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    // background-color: rgba(255, 255, 255, 0.8);
    padding: 25px 5px 5px;
    border-radius: 5px;
    > * {
      // flex-basis: 40%;
      // padding: 10px;
      // margin-bottom: 20px;
      // border-radius: 15px;
      -webkit-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;

      &:hover {
        cursor: pointer;
        // background-color: #333 !important;
      }
    }

    // > a:nth-child(1) {
    //   background-color: #039ba1;
    // }

    // > a:nth-child(2) {
    //   background-color: #457fce;
    // }

    // > a:nth-child(3) {
    //   background-color: #d96608;
    // }

    // > a:nth-child(4) {
    //   background-color: #309e2b;
    // }

    > * {
      text-align: center;
      // margin-bottom: 20px;
    }
    .icon {
      width: 50px;
      background-color: #666;
      margin: auto;
      margin-bottom: 10px;
    }

    p {
      // color: #d32a32;
      color: black;
      letter-spacing: 0;
      line-height: 1.3;
      font-weight: bold;
    }
  }
}
.middle-banner {
  background-color: black;
  >div{
    width: 100%;
    max-width: 600px;
    margin: auto;
    // min-height: 200px;
    // background-color: #ffaacc;
  }
}
.pay-flow {
  padding: 80px 0;
  .icon-pay-display {
    height: 100px;
    text-align: center;

    img {
      height: 100%;
      width: initial;
    }
  }
  p {
    text-align: center;
    margin: 20px 0;
    font-weight: bold;
    font-size: 20px;
  }
}

@media screen and (min-width: 768px) {
  .top-banner {
    padding: 10px 20px;
    padding-top: 50px;
    .button-group {
      padding: 20px;
      .button-sub-group {
        padding: 40px 40px 20px;
        > * {
          // padding: 30px 10px;
          padding-bottom: 10px;
        }
      }
    }
  }
}

@media screen and (min-width: 992px) {
  .button-group {
    width: 50%;
  }
  .search-order,.button-sub-group a{
    position: relative;
    &::before,&::after{
      content: '';
      display: block;
      width: 0%;
      height: 3px;
      background:#d32a32;
      bottom: 0;
      left: 50%;
      position: absolute;
    }
    &::before{
      transition: width 0.4s, left 0.4s;
    }
    &::after{
      transition: width 0.4s;
    }
  }
  .search-order:hover,.button-sub-group a:hover{
    color:black;
    &::before{
      width: 50%;
      left: 0%;
    }
    &::after{
      width: 50%;
    }
  }

  .button-sub-group a:hover p{
    color:#d32a32 !important;
  }
}
</style>

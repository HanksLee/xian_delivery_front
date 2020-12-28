<template>
  <div class="mt-60">
    <div class="top-banner">
      <div class="container">
        <div class="button-group">
          <router-link to="/OrderSearch" class="search-order">訂單查詢</router-link>
          <router-link to="/AddDriver" class="search-order">加入駕駛</router-link>
          <div class="button-sub-group">
            <router-link to="/PickUp">
              <div class="icon">
                <img src="../../assets/img/step1.jpg" alt="step1.jpg" />
              </div>
              <p>預約接機</p>
              <p>離開機場</p>
            </router-link>
            <router-link to="/PickUp">
              <div class="icon">
                <img src="../../assets/img/step1.jpg" alt="step1.jpg" />
              </div>
              <p>預約送機</p>
              <p>前往機場</p>
            </router-link>
            <router-link to="/PickUp">
              <div class="icon">
                <img src="../../assets/img/step1.jpg" alt="step1.jpg" />
              </div>
              <p>短中長途</p>
              <P>接送服務</P>
            </router-link>
            <router-link to="/PickUp">
              <div class="icon">
                <img src="../../assets/img/step1.jpg" alt="step1.jpg" />
              </div>
              <p>預約全日</p>
              <P>觀光包車</P>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row pay-flow">
        <div class="col-24 col-lg-8">
          <div class="icon-pay-display">
            <img src="../../assets/img/step1.jpg" alt />
          </div>
          <h4>STEP1</h4>
          <h3>試算車資</h3>
          <p>輸入地址後下一頁會立即出現車資，您覺得合理再於線上完成訂車程序</p>
        </div>
        <div class="col-24 col-lg-8">
          <div class="icon-pay-display">
            <img src="../../assets/img/step2.jpg" alt />
          </div>
          <h4>STEP2</h4>
          <h3>付款方式</h3>
          <p>線上刷卡或現金於下車付費，如有特殊需求可於備註中說明</p>
        </div>
        <div class="col-24 col-lg-8">
          <div class="icon-pay-display">
            <img src="../../assets/img/step3.jpg" alt />
          </div>
          <h4>STEP3</h4>
          <h3>完成預約</h3>
          <p>將發送訂單編號簡訊給您，訂單查詢可確認詳細資料，有問題聯繫客服修改即可</p>
        </div>
      </div>
    </div>
    <div class="middle-banner">
      <img src="../../assets/img/banner1.jpg" alt="banner1.jpg" />
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
  min-height: 575px;
  // background-color: #ccc;
  background-image: url("../../assets/img/banner2.jpg");
  background-size: cover;
  box-sizing: border-box;
  padding-top: 20px;
}
.button-group {
  width: 100%;
  padding: 5px;
  > .search-order {
    display: block;
    width: 100%;
    padding: 5px;
    line-height: 36px;
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    border-radius: 5px;
    margin-bottom: 20px;
  }

  .button-sub-group {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 25px 5px 5px;
    border-radius: 5px;
    > * {
      flex-basis: 40%;
      padding: 10px;
      margin-bottom: 20px;
      border-radius: 15px;
      -webkit-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;

      &:hover {
        cursor: pointer;
        background-color: #333 !important;
      }
    }

    > a:nth-child(1) {
      background-color: #039ba1;
    }

    > a:nth-child(2) {
      background-color: #457fce;
    }

    > a:nth-child(3) {
      background-color: #d96608;
    }

    > a:nth-child(4) {
      background-color: #309e2b;
    }

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
      color: white;
    }
  }
}
.middle-banner {
  width: 100%;
  // min-height: 200px;
  // background-color: #ffaacc;
}
.pay-flow {
  padding: 20px 0;
  .icon-pay-display {
    height: 100px;
    text-align: center;

    img {
      height: 100%;
      width: initial;
    }
  }
  h3,
  h4,
  p {
    text-align: center;
  }
}

@media screen and (min-width: 768px) {
  .top-banner {
    padding: 10px 20px;
    .button-group {
      padding: 20px;
      .button-sub-group {
        padding: 40px 40px 20px;
        > * {
          padding: 30px 10px;
        }
      }
    }
  }
}

@media screen and (min-width: 992px) {
  .button-group {
    width: 50%;
  }
}
</style>

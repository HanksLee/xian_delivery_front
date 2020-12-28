<template>
  <div class="mt-60">
    <div class="container-sm">
      <div class="reservestep-wrap">
        <div class="reservestep-container">
          <p class="reservestep-title">預約流程</p>
          <div class="reservestep-content">
            <div class="item">
              <div><img src="../../assets/img/step1.jpg" alt=""></div>
              <div>
                <p>STEP1</p>
                <p>填寫預約&完成付款</p>
                <p>填寫您的班機時間，讓我們準確地為您提供服務安全合法的線上支付，讓您安心方便</p>
              </div>
            </div>
            <div class="triangle-down"></div>
            <div class="item">
              <div><img src="../../assets/img/step2.jpg" alt=""></div>
              <div>
                <p>STEP2</p>
                <p>付款成功</p>
                <p>將收到付款成功通知信</p>
              </div>
            </div>
            <div class="triangle-down"></div>
            <div class="item">
              <div><img src="../../assets/img/step3.jpg" alt=""></div>
              <div>
                <p>STEP3</p>
                <p>預約時間到達前</p>
                <p>將收到司機派遣通知簡訊</p>
              </div>
            </div>
            <div class="triangle-down"></div>
            <div class="go-reserve">乘車GO!</div>
          </div>
          <div class="input-container">
            <span class="search-btn">立即費用試算</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'ReserveStep',
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

.reservestep-wrap {
  padding: 60px 0 40px 0;

  .reservestep-container{
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    overflow: hidden;
  }

  .reservestep-title {
    background-color: #457fce;
    color: white;
    line-height: 50px;
    text-align: center;

  }

  .reservestep-content {
    padding: 40px 25px;

    > div + div {
      margin-top: 20px;
    }

    .item{
      width: 70%;
      margin: auto;
      display: flex;
      align-items: flex-end;

      div:nth-child(1) {
        flex: 0 0 160px;
        // width: 160px;
        margin-right: 20px;
      }

      div:nth-child(2) {
        flex: 0 0 1;
        p:nth-child(1) {
          font-size: 18px;
          color: #2aa7ee;
          font-weight: bold;
        }

        p:nth-child(2) {
          font-weight: bold;
          font-size: 20px;
          margin: 8px 0;
        }
      }
    }

    .triangle-down {
      border-color: #2aa7ee transparent transparent transparent;
      border-style: solid solid solid solid;
      border-width: 10px;
      height: 0px;
      width: 0px;
      margin: auto;
      margin-top: 20px;
    }

    .go-reserve {
      font-size: 30px;
      color: #0a499d;
      font-weight: bold;
      text-align: center;
    }
  }

  .input-container {
    margin: auto;
    background-color: #fff;
    padding: 20px 0;
    text-align: center;
    border-top: 1px solid #ccc;

    .search-btn {
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
}


@media screen and (min-width: 768px) {

}

@media screen and (min-width: 992px) {

}
</style>

<template>
  <div class="mt-60">
    <div class="container-sm">
      <div class="fare-wrap">
        <div class="fare-container">
          <p class="fare-title">計費方式</p>
          <div class="fare-content">
            <div>
              <h4>台北優惠地區</h4>
              <p>以下地區前往機場均為固定金額</p>
              <div class="charge-container">
                <h5>台北市</h5>
                <p>
                  <span>中正區</span>
                  <span>大同區</span>
                  <span>中山區</span>
                  <span>松山區</span>
                  <span>大安區</span>
                  <span>萬華區</span>
                  <span>信義區</span>
                  <span>士林區</span>
                  <span>北投區</span>
                  <span>內湖區</span>
                  <span>南港區</span>
                </p>
                <h5>新北市</h5>
                <p>
                  <span>板橋區</span>
                  <span>永和區</span>
                  <span>中和區</span>
                  <span>土城區</span>
                  <span>樹林區</span>
                  <span>三重區</span>
                  <span>新莊區</span>
                  <span>蘆洲區</span>
                </p>
                <h5>延伸加價項目</h5>
                <p>
                  <span>8人座車 +300(每加一點150元)</span>
                  <span>雙B進口車 +500(每加一點150元)</span>
                  <span>加點費用 +$100元起</span>
                </p>
              </div>
              <p class="highlight">*若選擇地區不在上述範圍內,將由系統計算乘車費用。</p>
              <p class="highlight">*台灣全省均有-接/送機服務。</p>
            </div>
            <div>
              <h4>其他加價服務</h4>
              <div class="other-serve-container">
                <p>
                  <span>嬰兒座椅0-1歲 +$200</span>
                  <span>兒童座椅1-4歲 +$200</span>
                  <span>增高座墊4-8歲 +$150</span>
                  <span>不要撥放音樂 +$0</span>
                  <span>想休息不聊天 +$0</span>
                  <span>搬行李上樓 +$80</span>
                  <span>中途等待時間 +$300</span>
                  <span>夜間加價 +$100</span>
                  <span>舉牌服務 +$100</span>
                  <span>接機加價+100</span>
                </p>
              </div>
            </div>
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
  name: "Fare",
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

.fare-wrap {
  padding: 60px 0 40px 0;

  .fare-container {
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    overflow: hidden;
  }

  .fare-title {
    background-color: #457fce;
    color: white;
    line-height: 50px;
    text-align: center;
  }

  .fare-content {
    padding: 40px 25px;
    text-align: center;

    > div > h4 {
      margin-bottom: 10px;
    }

    > div + div {
      margin-top: 50px;
    }
  }

  .charge-container {
    &::before {
      content: "$799";
      font-size: 40px;
      font-weight: bold;
      color: #2aa7ee;
      background-color: #fff;
      padding: 0 10px;
      display: block;
      position: absolute;
      top: -30px;
      left: 50%;
      transform: translate(-50%);
    }

    p + h5 {
      margin-top: 40px;
    }
  }

  .charge-container,
  .other-serve-container {
    margin-top: 30px;
    padding: 30px;
    border: 1px solid #ccc;
    border-radius: 15px;
    position: relative;
    margin-bottom: 10px;

    > p {
      padding: 10px 0;
      span {
        display: inline-block;
        padding: 5px 10px;
        background-color: #eaeaea;
        border-radius: 5px;
        margin-right: 15px;
        margin-top: 15px;
      }
    }
  }

  .highlight {
    text-align: left;
    color: #d72828;
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

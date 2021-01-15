<template>
  <div class="mt-60">
    <div class="container-sm">
      <div class="search-wrap">
        <div class="search-container">
          <p class="search-title">司機及訂單查詢</p>
          <div>
            <p class="order-number-text">訂單編號</p>
            <div class="input-container">
              <input type="text" placeholder="請填寫訂單編號">
              <span class="search-btn">立即查詢</span>
            </div>
          </div>
          <div>
            <p class="order-info-text">訂單資訊</p>
            <div class="info-container">
              <ul>
                <li>．若資料有誤，請撥打客服，將立即為您更新，請安心</li>
                <li>．親愛的用戶您好，司機如果有遲到、車輛異味、穿著不潔、態度不佳或其他問題</li>
                <li>．公司很重視乘車品質，歡迎聯繫客服人員，進行司機客訴。</li>
                <li class="highlight">※若不明車輛前往接送，請立即跟客服聯繫，如搭乘非平台上資料的不明之車輛，本公司均不負責任</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'OrderSearch',
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

.search-wrap {
  padding: 60px 0 40px 0;

  .search-container{
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);
  }

  .search-title {
    background-color: #d32a32;
    color: #ffffff;
    line-height: 50px;
    text-align: center;
    border-radius: 5px 5px 0 0;
  }

  .input-container {
    padding: 40px 0;
  }

  .order-number-text,
  .order-info-text {
    background: #eaeaea;
    color: #000000;
    text-align: center;
    font-weight: bold;
    padding: 0 8px;
    line-height: 36px
  }

  .input-container {
    margin: auto;
    background-color: #fff;
    padding: 40px 0;
    text-align: center;

    input {
      width: 100%;
      max-width: 500px;
      line-height: 35px;
      border: 1px solid gray;
      border-radius: 3px;
      margin-right: 20px;
    }

    .search-btn {
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
      margin-top: 20px;
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

  .info-container {
      padding: 20px;
      background-color: #fff;
      font-size: 14px;
      color: black;
      border-radius: 0 0 5px 5px;

      .highlight {
        color: #d32a32;
      }
    }
}


@media screen and (min-width: 768px) {
  .search-wrap{
    .input-container{
      .search-btn {
        top: -5px;
        margin-top: 0;
      }
    }
  }
}

@media screen and (min-width: 992px) {

}
</style>

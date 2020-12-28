<template>
  <div class="pick-up-wrap">
    <div class="tab-line"></div>
    <div class="pick-up-container">
      <div class="row">
        <div class="col-24 scene-item">
          <div class="col-24 col-lg-8">
            <img src="../../../assets/img/scene1.png" alt />
          </div>
          <div class="col-24 col-lg-16">
            <h5>水金九一日遊</h5>
            <p class="actions">【四人座10小時行程】陰陽海+十三層遺址+黃金博物館+黃金瀑布+福山宮+九分+十分</p>
            <p class="days">1天</p>
            <p class="city">新北市</p>
            <p class="price">
              費用
              <span>$4,000</span>
            </p>
          </div>
        </div>
        <div class="col-24 scene-item">
          <div class="col-24 col-lg-8">
            <img src="../../../assets/img/scene1.png" alt />
          </div>
          <div class="col-24 col-lg-16">
            <h5>水金九一日遊</h5>
            <p class="actions">【四人座10小時行程】陰陽海+十三層遺址+黃金博物館+黃金瀑布+福山宮+九分+十分</p>
            <p class="days">1天</p>
            <p class="city">新北市</p>
            <p class="price">
              費用
              <span>$4,000</span>
            </p>
          </div>
        </div>
        <div class="col-24 scene-item">
          <div class="col-24 col-lg-8">
            <img src="../../../assets/img/scene1.png" alt />
          </div>
          <div class="col-24 col-lg-16">
            <h5>水金九一日遊</h5>
            <p class="actions">【四人座10小時行程】陰陽海+十三層遺址+黃金博物館+黃金瀑布+福山宮+九分+十分</p>
            <p class="days">1天</p>
            <p class="city">新北市</p>
            <p class="price">
              費用
              <span>$4,000</span>
            </p>
          </div>
        </div>
        <div class="col-24 scene-item">
          <div class="col-24 col-lg-8">
            <img src="../../../assets/img/scene1.png" alt />
          </div>
          <div class="col-24 col-lg-16">
            <h5>水金九一日遊</h5>
            <p class="actions">【四人座10小時行程】陰陽海+十三層遺址+黃金博物館+黃金瀑布+福山宮+九分+十分</p>
            <p class="days">1天</p>
            <p class="city">新北市</p>
            <p class="price">
              費用
              <span>$4,000</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pick-up-tab1",
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

.pick-up-wrap {
  // padding: 60px 0 40px 0;

  .tab-line {
    border: 2px solid #309e2b;
  }

  .pick-up-container {
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);
    padding: 20px 30px;
  }

  .scene-item {
    border-radius: 5px;
    overflow: hidden;
    padding: 0;
    background-color: #eaeaea;
    box-shadow: 0;
    margin-bottom: 20px;

    &:hover {
      background-color: #fff;
      box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);
    }

    div:nth-child(1) {
      padding: 0;
    }

    div:nth-child(2) {
      h5 {
        line-height: 50px;
      }

      .actions {
        margin-bottom: 10px;
      }

      .days,
      .city {
        font-size: 14px;
      }

      .price {
        text-align: right;
        span {
          color: #2aa7ee;
          font-size: 26px;
          padding-left: 5px;
        }
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

<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-24 col-lg-12">
          <div class="col-8">
            <h4>會員中心</h4>
            <ul>
              <li><span>會員登入</span></li>
              <li><span>會員註冊</span></li>
              <li><span>忘記密碼</span></li>
            </ul>
          </div>
          <div class="col-8">
            <h4>關於我們</h4>
            <ul>
              <li><span>乘客須知</span></li>
              <li><span>服務條款</span></li>
              <li><span>隱私權</span></li>
              <li><span>定型化租賃契約</span></li>
              <li><span>問與答</span></li>
              <li><span>服務據點</span></li>
            </ul>
          </div>
          <div class="col-8">
            <h4>預約訂車</h4>
            <ul>
              <li><span>預約流程</span></li>
              <li><span>訂單查詢</span></li>
              <li><span>車輛定位</span></li>
              <li><span>計費方式</span></li>
              <li><span>發票查詢</span></li>
            </ul>
          </div>
        </div>
        <div class="col-24 col-lg-12">
          <div class="col-12">
            <h4>與我們聯絡</h4>
            <ul>
              <li><span class="footer-icon"></span><span>Line ID：@airportcar</span></li>
              <li><span class="footer-icon"></span><span>Wechat ID：twairportcar</span></li>
              <li><span class="footer-icon"></span><span>airportcar@citymovetech.com</span></li>
              <li><span class="footer-icon"></span><span>24小時客服專線：0906-146-632</span></li>
              <li><span class="footer-icon"></span><span>24小時客服專線2：03-385 7180</span></li>
            </ul>
          </div>
          <div class="col-12">
            <h4>加入好友</h4>
            <div class="add-friend-container">
              <div><span>FB</span></div>
              <div><span>LINE</span></div>
              <div><span>YT</span></div>
              <div><span>TEL</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    //回到頂端
    scrollToTop(){
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../sass/page/_color.scss";

* {
  // outline: 1px solid red;
}

.footer {
  background-color:#eaeaea;
  padding: 40px 0;

  h4 {
    line-height: 2;
  }

  ul {
    li {
      span {
        letter-spacing: 0;
      }
    }
  }

  .add-friend-container {
    div {
      display: inline-block;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #457fce;
      position: relative;

      span {
        color: white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
}

</style>

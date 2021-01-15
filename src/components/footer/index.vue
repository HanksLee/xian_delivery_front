<template>
  <div>
      <div class="footer">
      <div class="container">
        <div class="row">
          <div class="col-24 col-lg-12 footer-top">
            <h1>祥順國際租賃</h1>
            <p class="link">
              <span>首頁</span><span>．</span>
              <span>計價方式</span><span>．</span>
              <span>最新消息</span><span>．</span>
              <span>合作廠商</span><span>．</span>
              <span>ＦＡＱ？</span>
            </p>
            <p>祥順 © 2020</p>
          </div>
          <div class="col-24 col-lg-12">
            <div class="col-12">
              <div class="info">
                <div class="icon-container">
                  <div class="icon">
                    <img src="../../assets/img/location-white.png" alt="locate.png">
                  </div>
                </div>
                <div class="info-text">
                  <p class="sub-text">蘆洲區</p>
                  <p class="main-text">新北市，台灣</p>
                </div>
              </div>
              <div class="info">
                <div class="icon-container">
                  <div class="icon">
                    <img src="../../assets/img/phone-white.png" alt="locate.png">
                  </div>
                </div>
                <div class="info-text">
                  <p class="main-text">(02)-23345678</p>
                </div>
              </div>
              <div class="info">
                <div class="icon-container">
                  <div class="icon">
                    <img src="../../assets/img/mail-white.png" alt="locate.png">
                  </div>
                </div>
                <div class="info-text">
                  <p class="main-text">
                    <a href="mailto:support@company.com">@xianCompany.com</a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12">
              <p class="about-title">關於祥順</p>
              <div class="add-friend-container">
                <div><font-awesome-icon :icon="['fab', 'facebook-f']" /></div>
                <div><font-awesome-icon :icon="['fab', 'twitter']" /></div>
                <div><font-awesome-icon :icon="['fab', 'linkedin-in']" /></div>
                <div><font-awesome-icon :icon="['fab', 'github']" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <p>© 祥順 2020 ALL RIGHT RESERVED.</p>
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
  background-color:black;
  padding: 40px 0;
  .footer-top{
    margin-bottom: 20px;
  }
  *{
    color:#d32a32;
    letter-spacing: 0;
  }
  h1 {
    font-size: 36px;
    font-family: "標楷體";
    letter-spacing: 4px;
  }

  p{
    margin: 0;
  }
  .link{
    margin: 20px 0;
  }

  .info + .info{
    margin: 10px 0;
  }

  .info{
    display: flex;
    align-items: stretch;
    .icon-container{
      display: flex;
      align-items: center;
    }
    .icon{
        width: 38px;
        height: 38px;
        border-radius: 50%;
        background-color: #33383b;
        position: relative;
        margin-right: 15px;
        vertical-align: middle;
      img{
        width: 60%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .info-text{
      display: flex;
      flex-wrap: wrap;
      align-content: center;
      .sub-text {
        font-size: 14px;
        flex-basis: 100%;
      }
      .main-text{
        font-weight: bold;
        flex-basis: 100%;
      }
    }
  }
  .about-title{
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .add-friend-container {
    div {
      display: inline-block;
      >svg:hover{
        cursor: pointer;
      }
      >svg:hover path{
        fill:#62b69e;
      }
    }
    >div+div{
      margin-left: 10px;
    }
  }
}
.copyright{
    background: #222222;
    p{
      text-align: center;
      line-height: 5;
      color: #d32a32;
      font-size: 13px;
      letter-spacing: 0;
    }
  }
@media screen and (min-width: 768px) {
    .footer-top{
    margin-bottom: 0;
  }
}
</style>

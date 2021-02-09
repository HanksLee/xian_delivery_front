<template>
  <div class="mt-60">
    <div class="container-sm">
      <div class="add-driver-wrap">
        <div class="add-driver-container">
          <el-form v-model="redisterDriverParams">
            <p class="add-driver-title">加入駕駛</p>
            <div>
              <div class="input-container">
                <div class="row">
                  <div class="col-24">
                    <el-form-item>
                      <el-input
                        v-model="redisterDriverParams.email"
                        placeholder="請輸入e-mail"
                      ></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-input
                        v-model="redisterDriverParams.name"
                        placeholder="請輸入姓名"
                      ></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-input
                        type="password"
                        v-model="redisterDriverParams.phone"
                        placeholder="請輸入密碼"
                      ></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-input
                        type="password"
                        v-model="redisterDriverParams.c_password"
                        placeholder="請再次輸入密碼"
                      ></el-input>
                    </el-form-item>
                    <!-- <el-form-item>
                      <el-input
                        v-model="redisterDriverParams.city"
                        placeholder="請輸入城市"
                      ></el-input>
                    </el-form-item> -->
                  </div>
                </div>
              </div>
              <div class="submit-container">
                <span class="add-driver-btn" @click="registerDriver">送出</span>
              </div>
            </div>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'OrderSearch',
  data(){
    return{
      redisterDriverParams: {
        email: undefined,
        name: undefined,
        password: undefined,
        c_password: undefined,
        type: "driver"
      }
    }
  },
  components: {

  },
  methods:{
    async registerDriver(){
      const { name, email, password, c_password } = this.registerDriverParams;
      if(!name || !email || !password || !c_password ) {
        alert("欄位有空，請再次檢查");
        return;
        }
      if(password !== c_password){
        alert("密碼跟確認密碼不一致");
        return;
      }
      const res = await axios.post(`${window.location.origin}/api/register`,{
        ...this.registerDirverParams
      })
      if(res.status === "success"){
        alert("註冊成功");
      }else{
        alert("註冊失敗");
      }
    },
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

.add-driver-wrap {
  padding: 60px 0 40px 0;

  .add-driver-container{
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);
  }

  .add-driver-title {
    background-color: #d32a32;
    color: white;
    line-height: 50px;
    text-align: center;
    border-radius: 5px 5px 0 0;
  }

  .input-container {
    padding: 40px 0;
  }

  .input-container {
    margin: auto;
    background-color: #fff;
    padding: 40px 0;
    text-align: center;
    width: 100%;
    max-width: 500px;

    input {
      line-height: 35px;
      border: 1px solid gray;
      border-radius: 3px;
      margin-right: 20px;
    }
  }

  .submit-container {
    background-color: #fff;
    padding: 20px 10px;
    text-align: right;
    border-top: 1px solid #ccc;

    .add-driver-btn {
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
}


// @media screen and (min-width: 768px) {
//   .add-driver-wrap{
//     .input-container{
//       .add-driver-btn {
//         top: -5px;
//         margin-top: 0;
//       }
//     }
//   }
// }

// @media screen and (min-width: 992px) {

// }
</style>

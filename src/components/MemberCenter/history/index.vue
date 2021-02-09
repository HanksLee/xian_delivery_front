<template>
  <div class="member-container">
    <p class="member-title">會員中心/歷史訂單</p>
    <div class="history-container">
      <!-- <div class="remarks">
        您評分過「非常不滿意」及「有待加強」的司機，未來將不再由他們服務您，確保您的乘車品質。
        <br />司機們不會知道評分對象，請放心
      </div> -->
      <div class="history-info">
        <p v-if="orderList.length === 0">您目前沒有訂單紀錄</p>
        <el-table
          v-else
          :data="orderList"
          border
          style="width: 100%">
          <el-table-column
            fixed
            prop="id"
            label="訂單編號"
            width="120">
          </el-table-column>
          <el-table-column
            fixed
            prop="total_amount"
            label="金額"
            width="100">
          </el-table-column>
          <el-table-column
            prop="passenger_name"
            label="姓名"
            width="120">
          </el-table-column>
          <el-table-column
            prop="passenger_mobile"
            label="手機"
            width="150">
          </el-table-column>
          <el-table-column
            prop="passenger_email"
            label="信箱"
            width="300">
          </el-table-column>
          <el-table-column
            prop="passenger_memo"
            label="備註"
            width="300">
          </el-table-column>
          <el-table-column
            prop="reserve_at"
            label="抵達時間"
            width="300">
          </el-table-column>
          <el-table-column
            prop="flight_num"
            label="航班編號"
            width="150">
          </el-table-column>
          <el-table-column
            prop="passenger_num"
            label="乘客人數"
            width="150">
          </el-table-column>
          <el-table-column
            prop="luggage_num"
            label="行李數量"
            width="150">
          </el-table-column>
          <el-table-column
            label="機場"
            width="150">
            {{airplaneType.name}}
          </el-table-column>
          <el-table-column
            label="座車"
            width="150">
            {{carType.name}}
          </el-table-column>
        </el-table>
        <div class="block" v-if="orderList.length !== 0">
          <el-pagination
            layout="prev, pager, next"
            :total="totalCount"
            @current-change="pageChange">
          </el-pagination>
        </div>
      </div>
    </div>
    <!-- <div class="submit-container">
      <span class="back-btn" @click="goToHome">回首頁</span>
      <span class="member-btn">送出</span>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "member",
  data() {
    return {
      airplaneType: {
        id: 0,
        name: "-"
      },
      carType: {
        id: 0,
        name: "-"
      },
      totalCount: 0,
      page: 1,
      pageNum: 10,
      orderList: [
      //   {
      //           "id": 1,
      //           "user_id": "1",
      //           "airport_id": "0",
      //           "car_type_id": "0",
      //           "pro_status": "0",
      //           "pickup_type": "0",
      //           "reserve_type": "0",
      //           "reserve_at": "2020-11-09 09:00:00.000",
      //           "flight_num": "A1234",
      //           "passenger_num": "1",
      //           "luggage_num": "1",
      //           "need_welcome_fee": "0",
      //           "need_extra_item": "0",
      //           "coupon_code": null,
      //           "passenger_name": "test name",
      //           "passenger_mobile": "0900000001",
      //           "passenger_email": "user@example.com",
      //           "passenger_memo": "test memo",
      //           "total_distance": "167820.00",
      //           "total_duration": "8293.00",
      //           "total_amount": "1000.00",
      //           "created_at": "2021-02-04T14:58:09.780000Z",
      //           "updated_at": "2021-02-04T14:58:09.780000Z",
      //           "order_locations": []
      // }
      ],
    };
  },
  components: {},
  methods: {
    goToHome(){
      this.$router.push({ path: '/' });
    },
    async pageChange(page){
      this.page = page;
      await this.getOrders();
    },
    async getOrders(){
      const page = `page=${this.page}`;
      const per_page = `per_page=${this.per_page}`;
      const res = await axios.get(`${window.location.origin}/api/v1/order?${page}&${per_page}`,{
        header: {
          Authentication: sessionStorage.getItem('token')
        }
      })
      if(res.status === "success"){
        const { total, data } = res.data;
        this.totalCount = total;
        this.orderList = data;
        await this.getAirplaneType();
        await this.getCarType();
      }
    },
    async getAirplaneType(){
      const res = await axios.get(`${window.location.origin}/api/v1/airport`,{
      },{
        header: {
          Authentication: sessionStorage.getItem('token')
        }
      })
      if(res.status === "success"){
        this.airplaneType = res.data.find(item=>{
          return item.id === Number(this.orderList.airport_id);
        })
      }
    },
    async getCarType(){
      const res = await axios.get(`${window.location.origin}/api/v1/car-type`,{
      },{
        header: {
          Authentication: sessionStorage.getItem('token')
        }
      })
      if(res.status === "success"){
        this.carType = res.data.find(item=>{
          return item.id === Number(this.orderList.car_type_id);
        })
      }
    }
  },
  async mounted() {
    await this.getOrders();
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

.member-wrap {
  padding: 60px 0 40px 0;

  .member-container {
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);
  }

  .member-title {
    background-color: #d32a32;
    color: white;
    line-height: 50px;
    text-align: center;
    border-radius: 5px 5px 0 0;
  }

  .question-text {
    background: #eaeaea;
    color: #0a499d;
    text-align: center;
    font-weight: bold;
    padding: 0 8px;
    line-height: 36px;
  }

  .input-container {
    padding: 20px 40px;

    .el-form-item {
      margin-bottom: 5px;
    }

    .el-input__inner {
    }

    > p {
      margin-bottom: 10px;
    }

    .input-item {
      width: calc(100% - 20px);
      line-height: 35px;
      // border: 1px solid gray;
      border-radius: 3px;
      margin-bottom: 20px;
    }
  }

  .history-container {
    padding: 20px;

    .remarks {
      border: 1px dashed #d72828;
      padding: 5px 50px;
      text-align: center;
      color: #d72828;
      font-size: 14px;
      letter-spacing: 1;
    }

    .history-info {
      padding: 50px 0;
      text-align: center;
      font-weight: bold;
    }
  }

  .submit-container {
    background-color: #fff;
    padding: 20px 10px;
    text-align: right;
    border-top: 1px solid #ccc;

    .member-btn,
    .back-btn {
      display: inline-block;
      vertical-align: top;
      font-size: 18px;
      color: #fff;
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

    .member-btn {
      background: #d32a32;
    }

    .back-btn {
      background: #7f7f7f;
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

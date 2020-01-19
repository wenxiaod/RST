<template>
  <div class="product">
    <title>化工管廊_公共管廊_智慧化工管廊数字管理系统</title>
    <onlineQQ />
    <Chat />
    <div class="productHead ">
      <img src="../../public/images/productHead.jpg" alt="">
    </div>
    <!-- 当前位置 -->
    <div class="productSite">
      <div class="productSiteText">
        <span>当前位置：</span><a href="javascript:;">首页 ></a><a class="sel" href="javascript:;">硬件产品</a>
      </div>
    </div>
    <!-- 内容区 -->
    <section class="productContent ">
      <!-- @click="goDetails(index) -->
      <div class="productItem" v-for="(item,index) in product" :key="index" @click="selectItem(item)">
        <img :src="item.imagePath" alt="">
        <div class="productItemText">
          <strong>{{item.imageTitle}}</strong>
          <p>{{item.imageDescription}}</p>
          <b>{{item.imageMore}}</b>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
  import onlineQQ from "../components/onlineQQ"
  import Chat from "../components/Chat"
  export default {
    name: "product",
    data() {
      return {
        // 接收product
        product: []

      }
    },
    components: {
      onlineQQ,
      Chat
    },
    created() {
      // => 请求数据
      this.request_product();
    },
    methods: {
      // **************************请求product--硬件产品******************************
      request_product() {
        this.$axios
          .get("/index/getTypeAll", {
            params: {
              type: "智能硬件"
            }
          })
          .then(product => {
            console.log(product.data.data);
            this.product = product.data.data;
          })
          .catch(err => {
            window.console.log(err);
          });
      },
      selectItem(item) {
        let id = item.imageId;
        this.$router.push({
          path: "/productbyid",
          query: {
            id: id
          }
        })

      }
    }

  }
</script>


<style lang="less" scope>
  .product {
    a {
      color: black;
    }

    // 背景图
    .productHead {
      padding-top: 71px;

      img {
        width: 100%;
        height: 400px;
      }
    }

    //当前位置
    .productSite {
      padding: 40px 0 40px;
      border-bottom: 1px solid #efefef;

      .productSiteText {
        width: 68%;
        margin: 0 auto;

        span {
          margin-left: -80%;
        }

        a {
          color: black;
        }

        .sel {
          color: #f08605;
        }

        &:first-child a:hover {
          color: #f08605;
          transition: 1.5s;
        }
      }
    }

    //productSite
    // 内容区样式
    .productContent {
      width: 68%;
      margin: 50px auto;

      .productItem {
        display: flex;
        justify-content: center;
        position: relative;
        height: 420px;

        img {
          box-sizing: border-box;
          width: 520px;
          height: 348px;
          position: relative;
          border-right: 1px solid #e4e3e1;
          border-bottom: 1px solid #e4e3e1;

          &:hover {
            transition: 1.5s;
            transform: scale(1.05);
            border-right: 2px solid #6388cf;
            border-bottom: 2px solid #6388cf;

          }
        }

        .productItemText {
          width: 600px;
          height: 348px;
          display: block;
          text-align: left;
          position: relative;
          left: 2%;


          strong {
            display: block;
            color: #444444;
            font-size: 30px;
            line-height: 1;
            padding-top: 58px;
            font-weight: normal;
            position: relative;
            margin-bottom: 40px;

            &:before {
              content: "";
              width: 48px;
              height: 8px;
              background: #f08605;
              position: absolute;
              left: 0;
              top: 0;
            }
          }

          p {
            color: #696868;
            font-size: 18px;
            line-height: 2;
            margin-bottom: 45px;
            height: 72px;
            overflow: hidden;
          }

          b {
            display: block;
            width: 118px;
            height: 30px;
            line-height: 30px;
            color: #f08605;
            font-size: 14px;
            text-align: center;
            border: 1px solid #f08605;
            text-transform: uppercase;
            transition: 0.38s;

            &:hover {
              color: #ffffff;
              background: #f08605;
            }
          }

        }
      }
    }
  }
</style>
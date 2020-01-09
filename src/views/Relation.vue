<template>
  <div class="solution">
    <div class="solutionList">
      <div class="solutionHead"><img src="http://192.168.1.115:8080/picture/homePic/banner2.jpg"></div>
      <!-- 联系方式 -->
      <section class="contactfix">
        <div class="solutionMap">
          <!-- 地图组件 -->
          <Map />
        </div>
        <div class="contactwr clearfix">
          <div class="contactus">
            <div class="contacttt">
              <strong>{{relation[0].contactTitle}}</strong>
              <small>{{relation[0].contactTitleEnglish}}</small>
            </div>
            <div class="contactli">
              <strong>{{relation[0].contactTag}}</strong>
              <p>{{relation[0].contactAddress}}</p>
              <p>{{relation[0].contactFax}}</p>
              <p>{{relation[0].contactPhone}}</p>
              <p>{{relation[0].contactMail}}</p>
            </div>
            <div class="contactli">
              <strong>{{relation[1].contactTag}}</strong>
              <span class="tels">{{relation[1].contactPhone}}</span>
              <span class="emaibox">{{relation[1].contactMail}}</span>
              <a href="http://wpa.qq.com/msgrd?v=3&uin=3465582132&site=qq&menu=yes" target="_black"
                class="qq">QQ在线咨询</a>
            </div>

            <div class="contacteq clearfix">
              <div class="eqinfo">
                <span>微信公众平台：</span>
                <img src="../../public/images/footer_wx.png" alt="" />
              </div>
              <div class="eqinfo">
                <span>微博：</span>
                <img src="../../public/images/footer_wx.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  </div>
</template>
<script>
  import Map from '../components/Map'

  export default {
    data() {
      return {
        // 接收relation
        relation: []
      }
    },
    components: {
      Map
    },
    created() {
      this.request_relation();
    },
    methods: {
      // **************************请求relation--联系我们******************************
      request_relation() {
        this.$axios
          .get("/contact/page", {
            // params 参数传递
            params: {
              //每页显示条数 
              limit: 2,
              // 显示页数
              page: 1
            }
          })
          .then(relation => {
            this.relation = relation.data.data;
          })
        // .catch(error => {
        // });
      },
    }
  }
</script>

<style lang="less" scope>
  .solution {
    .solutionList {
      position: relative;
      margin-bottom: 50px;
    }

    .solutionHead {
      img {
        width: 100%;
        height: 400px;
        margin-top: 71px;
      }
    }

    // 联系信息样式
    .contactfix {
      background: #ffffff;

      // map
      .solutionMap {
        background: #f08605;
        width: 800px;
        height: 780px;
        position: relative;
        top: -171px;
        left: 42%;
        z-index: 2;
      }

      .contactwr {
        width: 1295px;
        position: relative;
        margin: auto;
        margin-top: -50%;
        background: #e7eefb;

        .contactus {
          padding-left: 50px;
          text-align: left;
          width: 444px;
          height: 780px;
          float: left;
          background: #e7eefb;
          border-radius: 9px;


          .contacttt {
            padding: 50px 0 40px;

            strong {
              display: block;
              color: #3a3a39;
              font-size: 30px;
              letter-spacing: 6px;
              line-height: 1;
              margin-bottom: 20px;
            }

            small {
              display: block;
              color: #3a3a39;
              font-size: 30px;
              line-height: 1;
              position: relative;
              text-transform: uppercase;
              padding-bottom: 24px;
              font-weight: bold;

              &:before {
                content: "";
                width: 56px;
                height: 2px;
                background: #f08605;
                position: absolute;
                left: 0;
                bottom: 0;
              }
            }
          }

          .contactli {
            margin-bottom: 24px;

            strong {
              display: block;
              margin-bottom: 18px;
              line-height: 1;
              color: #f57016;
              font-size: 24px;
              font-family: "宋体";
            }

            p {
              color: #333333;
              font-size: 14px;
              margin-bottom: 12px;
              line-height: 1.2;
            }

            span {
              display: block;
              color: #333333;
              font-size: 14px;
              line-height: 1.8;
              padding-left: 32px;
              margin-bottom: 6px;
            }

            .tels {
              background: url(../../public/images/tel.png) left center no-repeat;
            }

            .emaibox {
              background: url(../../public/images/mainbox.png) left center no-repeat;
            }

            .qq {
              box-sizing: border-box;
              display: block;
              padding-left: 50px;
              width: 170px;
              height: 38px;
              line-height: 38px;
              border: 1px solid #f57016;
              border-radius: 4px;
              color: #f57016;
              font-size: 18px;
              background: url(../../public/images/qq1.png) 20px center no-repeat;
              margin-top: 18px;

              &:hover {
                transition: .25s;
                border: 2px solid #f57016;
                border-radius: 6px;
              }
            }

          }

          .contacteq {
            padding-top: 17px;

            .eqinfo {
              float: left;
              margin-right: 30px;

              span {
                display: block;
                color: #333333;
                font-size: 14px;
                line-height: 1;
                margin-bottom: 10px;
              }

              img {
                display: block;
                width: 170px;
                height: auto;
              }

            }

          }


        }
      }

    }
  }
</style>
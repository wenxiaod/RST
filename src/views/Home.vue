<template>
  <div id="home">
    <!-- <transform style="z-index:3;position:relative;top:436px;"/> -->
    <swiper class="swiper" :options="swiperOption" ref="mySwiper" v-if="banner.length>0">
      <!--**********轮播图********** -->
      <swiper-slide v-for="(item,index) in banner" :key="index" class="lastChild">
        <img :src="item.imagePath" />
        <div class="textList">
          <h3>{{item.imageTitle}}</h3>
          <small>{{item.imageTitleEnglish}}</small>
          <p>{{item.imageContent}}</p>
          <router-link to="/solution"><b>{{item.imageMore}}</b></router-link>
        </div>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-pagination" slot="pagination" style="bottom:100px;"></div>
    </swiper>

    <!-- ********************解决方案****************** -->
    <section class="hardwaare inner">
      <div class="home-title clearfix">
        <div class="commonleft">
          <strong class="solutionStrong">解决方案</strong>
          <small class="solutionSmall">SOLUTIONS</small>
        </div>
      </div>

      <div class="solutionList" style="display:flex;margin-left: -60px;">
        <ul class="solutionli clearfix" v-for="(item,index) in solution" :key="index">
          <li>
            <a href="javascript:;">
              <figure>
                <img :src="item.imagePath" />
                <div class="solutebox">
                  <div class="solutewr">
                    <b>
                      <img :src="item.imagePath" />
                    </b>
                    <strong>{{item.imageContent}}</strong>
                  </div>
                </div>
              </figure>
              <span>{{item.imageContent}}</span>
            </a>
          </li>
        </ul>
      </div>

      <div style="width: 68%;margin: 0 auto;">
        <a href="./#/solution" class="homeReadmore" style="margin-top: 5%;">READ MORE</a>
      </div>
    </section>

    <!-- ******************智能硬件************ -->
    <section class="hardwaare inner">

      <!--  -->
      <div class="home-title clearfix">
        <div class="commonleft">
          <strong>智能硬件</strong>
          <small>INTELLIGENT HARDWARE</small>
        </div>
      </div>
      <div class="homeList">
        <div class="productList" v-if="product.length>0">
          <swiper class="swiperOptionpProduct" :options="swiperOptionpProduct" ref="mySwiper" id="swiper_container">
            <!-- slides -->
            <swiper-slide v-for="(item,index) in product" :key="index">
              <ul class="productItem" @mouseenter="enter(index)">
                <li>
                  <img :src="item.imagePath" />
                </li>
              </ul>

            </swiper-slide>
            <!-- <div class="swiper-pagination" slot="pagination"></div> -->
          </swiper>

          <div class="productFooter">
            <ul class="presentIndex" v-for="(item,index) in product" :key="index">
              <li>
                <strong v-show="presentIndex==index">{{item.imageTitle}}</strong>
                <p v-show="presentIndex==index">{{item.imageDescription}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <a href="./#/product" class="homeReadmore" style="margin-top: -5%;">READ MORE</a>
      </div>
    </section>

    
    <!-- *********************关于我们********************* -->
    <div class="aboutUs">
      <!-- 背景图 -->
      <img src="http://192.168.1.115:8081/picture/homePic/banner2.jpg" class="aboutUsBg" />
      <!-- 内容盒子 -->
      <div class="aboutUsContent" v-for="(item,index) in about" :key="index">
        <div class="aboutUsPic">
          <img :src="item.imagePath" alt />
        </div>
        <div class="aboutUsText">
          <strong>{{item.imageTitle}}</strong>
          <small>{{item.imageTitleEnglish}}</small>
          <p>{{item.imageContent}}</p>
          <a href="./#/about">
            <b>{{item.imageMore}}</b>
          </a>
        </div>
      </div>
    </div>

    <!-- 新闻 -->
    <div class="homeNews hardwaare inner">
      <div class="home-title clearfix">
        <div class="commonleft">
          <strong class="homeNewsStrong">新闻中心</strong>
          <small class="homeNewsSmall">News Center</small>
        </div>
        <!-- <div class="titlemore">
          <a href="./news">more</a>
        </div> -->
      </div>
      <div class="newshome clearfix">
        <div class="newsinfo" v-for="(item,index) in news" :key="index">
          <a href="javascript:;">
            <div class="newstop">
              <figure>
                <img :src="item.imagePath" alt />
              </figure>
            </div>
            <div class="newsdown">
              <strong>{{item.imageContent}}</strong>
              <p>{{item.imageDescription}}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div>
      <a href="./#/news" class="homeReadmore" style="margin-top: 1%;">READ MORE</a>
    </div>

    <!-- 合作企业 -->
    <swiper class="partnerSwiper" :options="swiperOptionPartner" ref="mySwiper" v-if="partner.length>0">
      <!-- slides -->
      <swiper-slide v-for="(item,index) in partner" :key="index">
        <img :src="item.imagePath" />
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
  // 导入轮播图样式与插件
  import "swiper/dist/css/swiper.css";
  import {
    swiper,
    swiperSlide
  } from "vue-awesome-swiper";
  // import transform from "../components/Transform"

  export default {
    name: "home",
    components: {
      // 注册轮播图插件
      swiper,
      swiperSlide,
      // transform
    },
    data() {
      return {
        // 配置轮播图参数
        swiperOption: {
          dynamicBullets: true,
          grabCursor: true,
          loop: true,
          effect: "fade",
          fadeEffect: {
            crossFade: true
          },
          autoplay: {
            delay: 2000
          },
          height: 880,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          },
          pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true
          }
        },
        // 配置合作单位轮播图参数
        swiperOptionPartner: {
          // effect: "coverflow",

          grabCursor: true,
          autoplay: {
            delay: 2000
          },
          centeredSlides: true,
          slidesPerView: "auto",
          loop: true,
          coverflowEffect: {
            depth: 1,
            modifier: 1,
            slideShadows: false
          },
          pagination: {
            el: ".swiper-pagination"
          }
        },
        // 配置硬件产品轮播图参数
        swiperOptionpProduct: {
          autoplayDisableOnInteraction: true,
          effect: "coverflow",
          grabCursor: true,
          autoplay: {
            delay: 2000
          },
          centeredSlides: true,
          slidesPerView: "auto",
          loop: true,
          coverflowEffect: {
            rotate: 10,
            stretch: 0,
            depth: 1,
            modifier: 1,
            slideShadows: false
          },

          pagination: {
            el: ".swiper-pagination"
          }
        },
        // 接收banner
        banner: [],
        // 接收product
        product: [],
        // 接收solution
        solution: [],
        // 接收about
        about: [],
        // 接收news
        news: [],
        // 接收partner
        partner: [],
        //硬件产品当前悬浮下标
        presentIndex: 0
      };
    },
    created() {
      // => 请求数据
      this.request_banner();
      this.request_product();
      this.request_solution();
      this.request_about();
      this.request_news();
      this.request_partner();
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      },
    },
    methods: {
      // **************************请求banner--轮播图*******************************
      request_banner() {
        this.$axios
          .get("/index/getBanner", {
            params: {
              type: "轮播图"
            }
          })
          .then(banner => {
            this.banner = banner.data.data;
          })
        // .catch(error => {
        // });
      },
      // **************************请求product--硬件产品******************************
      request_product() {
        this.$axios
          .get("/index/getTypeAll", {
            params: {
              type: "智能硬件"
            }
          })
          .then(product => {
            this.product = product.data.data;

          })
        // .catch(error => {
        // });
      },
      // **************************product--硬件产品--获取当前标签下标******************************
      enter(index) {
        this.presentIndex = index;
        /*鼠标移入停止轮播，鼠标离开 继续轮播*/
        var comtainer = document.getElementById('swiper_container');
        comtainer.onmouseenter = function () {
          swiper.stopAutoplay();
        };
        comtainer.onmouseleave = function () {
          swiper.startAutoplay();
        }
      },
      // **************************请求solution--解决方案******************************
      request_solution() {
        this.$axios
          .get("/index/getTypeAll", {
            params: {
              type: "解决方案"
            }
          })
          .then(solution => {
            this.solution = solution.data.data;
          })
        // .catch(error => {
        // });
      },
      // **************************请求about--关于我们******************************
      request_about() {
        this.$axios
          .get("/index/getTypeAll", {
            params: {
              type: "关于我们"
            }
          })
          .then(about => {
            this.about = about.data.data;
          })
        // .catch(error => {         
        // });
      },
      // **************************请求news--新闻******************************
      request_news() {
        this.$axios
          .get("/index/getTypeAll", {
            params: {
              type: "新闻中心"
            }
          })
          .then(news => {
            this.news = news.data.data;
          })
        // .catch(error => {
        //   console.log(error);
        // });
      },
      // **************************请求partner--合作企业******************************
      request_partner() {
        this.$axios
          .get("/index/getTypeAll", {
            params: {
              type: "合作伙伴"
            }
          })
          .then(partner => {
            this.partner = partner.data.data;
          })
        // .catch(error => {
        // });
      }
    }
  };
</script>
<style lang="less" scope>
  // 单页显示样式
  #home {
    .swiper-inner {
      width: 100%;
      height: 400px;
      padding-top: 50px;
      padding-bottom: 50px;
    }

    .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 300px;
      height: 300px;
    }

    // 轮播图样式--
    .swiper {
      height: 880px;
      position: relative;
      top: -29px;

      img {
        width: 100%;
        height: auto;
        position: relative;
        top: 100px;
      }

      .textList {
        position: absolute;
        width: 76%;
        top: 100%;
        margin: 0 12%;
        text-align: center;


        h3 {
          color: #fff;
          display: block;
          font-size: 63px;
          line-height: 1;
          text-align: center;
          margin-bottom: 25px;
        }

        small {
          display: block;
          text-align: center;
          color: #fff;
          font-size: 91px;
          font-family: "ProximaSansBlack";
          text-transform: uppercase;
          line-height: 1;
        }

        p {
          color: #fcfcfc;
          font-size: 17px;
          text-align: center;
          margin: auto;
          margin-top: 20px;
          line-height: 1.8;
        }

        b {
          display: block;
          width: 188px;
          height: 52px;
          text-align: center;
          line-height: 52px;
          color: #fff;
          font-size: 25px;
          text-transform: uppercase;
          background: #f08605;
          margin: auto;
          font-weight: normal;
          margin-top: 46px;
          transition: 0.56s;
        }
      }

  
    }

    // --轮播图样式结束

    // 智能硬件样式---
    .hardwaare {
      width: 68%;
      padding: 60px 0 0px;
      margin: 0 auto;

      .home-title {
        margin-bottom: 30px;
      }

      .commonleft {
        float: left;
        padding-bottom: 28px;
        position: relative;
        margin-top: 20px;

        &:before {
          content: "";
          width: 56px;
          height: 2px;
          background: #f08605;
          position: absolute;
          left: 0;
          bottom: 0;
        }

        strong {
          display: block;
          color: #3a3a39;
          font-size: 30px;
          line-height: 1;
          letter-spacing: 40px;
          margin-bottom: 24px;
          font-weight: normal;
          text-align: left;
        }

        small {
          display: block;
          color: #3a3a39;
          font-size: 30px;
          font-weight: bold;
          line-height: 1;
          text-transform: uppercase;
          text-align: left;
        }
      }

    }

    //hardwaare
    .homeList {
      width: 100%;
      height: 620px;
      margin-left: 16px;

      .swiperOptionpProduct {
        width: 100%;
        position: relative;
        top: -5%;

      }

      .productList {
        height: 630px;

        .productListSel {
          width: 300px;
          border-left: 10px solid #dcdcdc;
          margin-left: 4.2%;
          position: relative;
          top: -80%;
          border-top: 1px solid #dcdcdc;
          border-right: 1px solid #dcdcdc;
          background: #ffffff;

          img {
            margin: auto;
            width: 300px;
            height: 320px;
            overflow: hidden;
          }

          strong {
            display: block;
            text-align: center;
          }
        }

        .productItem {
          position: relative;
          top: 26%;
          left: 38%;

          li {
            box-sizing: border-box;
            float: left;
            width: 180px;
            height: 260px;
            background: #ffffff;
            border: 1px solid #dcdcdc;
            margin: 0 8px;
            z-index: 2;

            &:hover {
              transition: 0.75s;
              transform: scale(1.3);
            }

            img {
              width: 170px;
              margin-top: 33%;
            }

            &:hover {
              cursor: pointer;
              border: 3px solid #6388cf;
              transition: 0.75s;

              img {
                transition: 0.75s;
                transform: translateY(-10px);
              }
            }
          }
        }

        .presentIndex {
          overflow: hidden;
          position: relative;
          text-align: left;
          top: 40%;
          width: 86%;
          left: 13%;

          strong {
            display: block;
            color: #fff;
            font-size: 18px;
            font-weight: normal;
            line-height: 1;
            margin-bottom: 8px;
            margin-left: 28%;
          }

          p {
            color: #fcfcf8;
            font-size: 14px;
            line-height: 2;
            width: 80%;
            height: 90px;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          b {

            display: block;
            width: 86px;
            height: 22px;
            text-align: center;
            line-height: 22px;
            color: #fff;
            font-size: 12px;
            transition: 0.45s;
            // text-transform: uppercase;
            border: 1px solid #fff;
            position: absolute;
            right: 0;
            bottom: 0;

            &:before {
              content: "";
              width: 100px;
              height: 5px;
              background: #f08605;
              position: absolute;
              left: -800%;
              bottom: 0px;
            }

          }
        }

        .productFooter {
          position: relative;
          width: 100%;
          background: #6388cf;
          height: 270px;
          top: -10%;
          z-index: -1;
        }
      }

      //productList
      .solutionStrong {
        margin-left: 0 !important;
      }

      .solutionList {
        width: 100%;


        .solutionli {
          display: flex;
          float: left;
          margin-right: 2.3%;
          box-sizing: border-box;

          p {
            margin-top: 35px;
            text-align: center;
          }
        }
      }

      //solutionList
    }

    //.home-list
    .homeReadmore {
      display: block;
      width: 144px;
      height: 38px;
      text-align: center;
      line-height: 38px;
      border: 1px solid #f08605;
      color: #f08605;
      font-size: 18px;
      transition: 0.48s;
      margin: auto;
      text-transform: uppercase;
      margin-top: 3%;

      &:hover {
        background: #f08605;
        color: #ffffff;
      }
    }

    .aboutUs {
      position: relative;
      height: 700px;

      .aboutUsBg {
        width: 100%;
        height: 600px;
        margin-top: 60px;
      }

      .aboutUsContent {
        z-index: 1;
        width: 1080px;
        height: 350px;
        margin: 0 auto;
        position: relative;
        top: -354px;

        .aboutUsPic {
          width: 420px;
          height: 350px;
          overflow: hidden;

          img {
            width: 420px;
            height: 350px;
            vertical-align: middle;

            &:hover {
              transition: 1.5s;
              transform: scale(1.02);
            }
          }
        }

        .aboutUsText {
          position: relative;
          left: 38.8%;
          top: -100%;
          padding-left: 36px;
          width: 615px;
          padding-top: 28px;
          padding-bottom: 50px;
          background: #fff;
          filter: alpha(opacity=70);
          background: rgba(255, 255, 255, 0.7);

          strong {
            display: block;
            color: #3a3a39;
            font-size: 30px;
            font-weight: normal;
            margin-bottom: 24px;
          }

          small {
            display: block;
            color: #3a3a39;
            font-size: 30px;
            font-weight: bold;
            line-height: 1;
            text-transform: uppercase;
            letter-spacing: 8px;
            padding-bottom: 28px;
            position: relative;
            margin-bottom: 24px;

            &:before {
              content: "";
              width: 56px;
              height: 2px;
              background: #f08605;
              position: absolute;

              bottom: 0;
            }
          }

          p {
            color: #3a3a39;
            text-align: left;
            font-size: 20px;
            margin-right: 58px;
            line-height: 1.8;
            height: 64px;
            margin-bottom: 26px;
            overflow: hidden;
          }

          b {
            display: block;
            width: 130px;
            height: 34px;
            text-align: center;
            line-height: 34px;
            border: 1px solid #f08605;
            color: #f08605;
            font-size: 18px;
            transition: 0.48s;
            text-transform: uppercase;

            &:hover {
              background: #f08605;
              color: #ffffff;
            }
          }
        }
      }
    }

    .homeNews {
      width: 68%;
      height: 500px;
      margin: 0 auto;

      .homeNewsStrong {
        margin-left: 0 !important;
      }


      .commonleft {
        float: left;
        padding-bottom: 28px;
        position: relative;

        &:before {
          content: "";
          width: 56px;
          height: 2px;
          background: #f08605;
          position: absolute;
          left: 0;
          bottom: 0;
        }

        strong {
          display: block;
          color: #3a3a39;
          font-size: 30px;
          line-height: 1;
          letter-spacing: 40px;
          margin-bottom: 24px;
          font-weight: normal;
          margin-left: -25%;
        }

        small {
          display: block;
          color: #3a3a39;
          font-size: 30px;
          font-weight: bold;
          line-height: 1;
          text-transform: uppercase;
        }
      }

      .newsinfo {
        width: 566px;
        float: left;

        .newstop {
          position: relative;
          border: 1px solid #6388cf;
          border-radius: 5px;

          figure {
            transition: 0.5s;
            display: block;
            border-radius: 5px;
            overflow: hidden;
            line-height: 1;

            &:before {
              content: "";
              width: 100%;
              height: 100%;
              border: 9px solid #fff;
              border-radius: 5px;
              box-sizing: border-box;
              position: absolute;
              left: 0;
              top: 0;
              transition: 0.4s;
              opacity: 0;
              visibility: hidden;
              z-index: 3;
            }

            img {
              display: block;
              width: 100%;
              height: auto;
              line-height: 0;
              border-radius: 5px;
              transition: 0.55s;
            }
          }

          // figure
        }

        //newstop
        .newsdown {
          margin-top: 27px;

          strong {
            display: block;
            line-height: 1;
            color: #3a3a39;
            font-size: 14px;
            position: relative;
            padding-left: 0;
            font-weight: normal;
            margin-bottom: 20px;
            transition: 0.5s;

            &:before {
              content: "";
              width: 0;
              height: 1px;
              background: #f08605;
              position: absolute;
              left: 0;
              top: 50%;
              transition: 0.5s;
              z-index: 3;
            }
          }

          p {
            color: #3a3a39;
            font-size: 14px;
            line-height: 2;
          }
        }

        &:nth-child(2n + 2) {
          float: right;
        }

        &:hover .newstop figure:before {
          opacity: 1;
          visibility: visible;
        }

        &:hover figure img {
          transform: scale(1.05);
          -webkit-transform: scale(1.05);
          -moz-transform: scale(1.05);
        }

        &:hover .newsdown strong {
          padding-left: 52px;
        }

        &:hover .newsdown strong:before {
          width: 42px;
        }
      }

      //newsinfo
    }

    //homenews

    .partnerSwiper {
      width: 1300px;
      height: 186px;
      margin-top: 3%;

      img {
        margin: 8% -36%;
        width: 188px;
        height: 120px;
      }
    }

    // *******************解决方案样式***************************
    // *******************解决方案样式***************************
    // *******************解决方案样式***************************
    .solutionli {
      li {
        width: 400px;
        float: left;
        margin-left: 50px;
        // &:first-child {
        // margin-left: 0;
        //   }
      }
    }

    .solutionli li figure img {
      display: block;
      width: 100%;
      height: auto;
      line-height: 0;
      transition: 0.58s;
    }

    .solutebox {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 10px;
      background: #6388cf;
      filter: alpha(opacity=90);
      background: rgba(99, 136, 207, 0.9);
      opacity: 0;
      visibility: hidden;
      transition: 0.58s;
    }

    .solutionli li figure {
      display: block;
      border-radius: 10px;
      line-height: 1;
      border-radius: 10px;
      position: relative;
      overflow: hidden;
    }

    .solutionli li span {
      display: block;
      text-align: center;
      color: #313131;
      font-size: 18px;
      line-height: 1.2;
      margin-top: 35px;
    }

    .solutewr {
      padding-left: 93px;
      width: 220px;
      text-align: left;
      position: absolute;
      left: 0;
      top: 50%;
      margin-top: -78px;
      opacity: 0;
      visibility: hidden;
      transition: 0.58s;
      transform: translateX(30px);
      -webkit-transform: translateX(30px);
      -moz-transform: translateX(30px);
    }

    .solutewr:before {
      content: "";
      width: 84px;
      height: 1px;
      background: #fff;
      position: absolute;
      left: 0;
      top: 22px;
    }

    .solutewr b {
      display: block;
      width: 54px;
      height: 54px;
      margin-bottom: 15px;
    }

    .solutewr b img {
      display: block;
      width: 100%;
      height: auto;
    }

    .solutewr strong {
      display: block;
      color: #fff;
      font-size: 18px;
      line-height: 2;
      padding-bottom: 15px;
      position: relative;
      font-weight: normal;
    }

    .solutewr strong:before {
      content: "";
      width: 20px;
      height: 4px;
      background: #fff;
      position: absolute;
      left: 0;
      bottom: 0;
    }

    .solutionli li:hover figure img {
      transform: scale(1.05);
      -webkit-transform: scale(1.05);
      -moz-transform: scale(1.05);
    }

    // .solutionli li:hover .solutebox {
    //   opacity: 1;
    //   visibility: visible;
    // }

    .solutionli li:hover .solutewr {
      opacity: 1;
      visibility: visible;
      transform: translateX(0px);
      -webkit-transform: translateX(0px);
      -moz-transform: translateX(0px);
    }

  }

  //home
</style>
<template>
  <div id="about">
    <onlineQQ />
    <Chat />
    <img class="aboutUsHead" src="../../public/images/aboutUsHead.jpg" alt="">
    <!-- Tab选项卡效果 -->
    <!-- 吸顶效果 -->
    <div class="newsTab" id="boxFixed" :class="{'is_fixed' : isFixed}">
      <a href="javascript:;" @click="addItem(i,item)" v-for="(item,i) in text" :key="i"
        :class="{active:i!=nowIndex}">{{item}}</a>
    </div>

    <!-- 公司简介 -->
    <div v-show="nowIndex === 0" class="content" id="aboutIntro">
      <!-- 当前位置 -->
      <div class="productSite">
        <div class="productSiteText">
          <span>当前位置：</span><a href="/">首页 ></a><a href="/about">关于我们 ></a><a class="sel" href="javascript:;">公司简介</a>
        </div>
      </div>

      <!-- 公司简介内容区 -->

      <div class="abouted">
        <div class="aboutts">
          <small>{{about[1].aboutUsTitleEn}}</small>
          <h3>{{about[1].aboutUsTitle}}</h3>
        </div>
        <!-- tab -->
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="公司简介" name="first">
            <!-- 公司简介区域 -->
            <div class="aboutin">
              <p>{{about[1].aboutUsContent}}</p>
            </div>
          </el-tab-pane>
          <el-tab-pane label="企业文化" name="second">
            <!-- 企业文化区域 -->
            <div class="aboutin">
              <p> {{about[0].aboutUsContent}}</p>
            </div>
          </el-tab-pane>
        </el-tabs>

      </div>
      <!-- 手风琴 -->
      <section class="ourvalue">
        <div class="ourimg"><img src="../../public/images/aboutUsFooter.jpg" alt="" /></div>
        <div class="ourbox clearfix">
          <div class="ourinfo ">
            <span class="ourfont">我们的价值观</span>
            <div class="ourtext">
              <div class="ourwrs">
                <small>OUR VALUES</small>
                <span>我们的价值观</span>
                <p>忠于需求、忠于托付、忠于承诺</p>
                <p>以人为本、以实为事</p>
              </div>
            </div>
          </div>
          <div class="ourinfo ourinfo1 ">
            <span class="ourfont">我们的理念</span>
            <div class="ourtext">
              <div class="ourwrs">
                <small>OUR PHILOSOPHY</small>
                <span>我们的理念</span>
                <p>以需求为导向、以技术为根本</p>
                <p>专业、专注</p>
              </div>
            </div>
          </div>
          <div class="ourinfo ourinfo2">
            <span class="ourfont">我们的愿景</span>
            <div class="ourtext">
              <div class="ourwrs">
                <small>OUR VISION</small>
                <span>我们的愿景</span>
                <p>提升化工行业的智能化和信息化水平</p>
                <p>让用户满意、让员工幸福</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 手风琴 -->
    </div>

    <!-- 公司视频 -->
    <div id="productId">
      <div v-show="nowIndex === 1" class="content" id="aboutVideo">
        <!-- 当前位置 -->
        <div class="productSite">
          <div class="productSiteText">
            <span>当前位置：</span><a href="/">首页 ></a><a href="/about">关于我们 ></a><a class="sel" href="javascript:;">公司视频</a>
          </div>
        </div>
        <!-- 公司视频内容区 -->
        <!-- 大视频 -->
        <div class="videoBig">
          <h3>公司视频</h3>
          <!-- 禁用下载：controlslist="nodownload" -->
          <video id="my-video" class="video-js" controls  preload="auto" width="640" height="264" @click="handleVideo()"
            poster="MY_VIDEO_POSTER.jpg" data-setup="{}" style="cursor: pointer;">
            <source :src="video[1].aboutUsFileLink" /></video>
        </div>
        <!-- 大视频遮罩 -->
        <el-dialog :visible.sync="dialogVisible" width="1200px" height="600px" :before-close="handleClose">
          <!-- <h3 style="margin-top: -15px;text-align: center;font-size:24px;">数字管廊解决方案</h3> -->
          <el-divider />
          <video id="video" controls width="1200" height="600px" poster="" autoplay="autoplay">
            <source :src="video[1].aboutUsFileLink" type="video/mp4">
          </video>
          <!-- <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">
              <router-link to="./relation">联系我们</router-link>
            </el-button>
          </span> -->
        </el-dialog>
<!-- 小视频遮罩 -->
<div class="videoSmall">
      <!-- CPE -->
        <div class="videoCPE">
          <video id="my-video" class="video-js videobox" controls preload="auto" width="640" height="264" @click="handleVideoCPE()"
            poster="MY_VIDEO_POSTER.jpg" data-setup="{}" style="cursor: pointer;">
            <source :src="video[0].aboutUsFileLink" type="video/mp4" /></video>
        </div>
        <!-- cpe遮罩 -->
        <el-dialog :visible.sync="dialogVisibleCPE" width="1200px" height="600px" :before-close="handleCloseCPE">
          <!-- <h3 style="margin-top: -15px;text-align: center;font-size:24px;">便捷式应急灯</h3> -->
          <el-divider />
          <video id="videoCPE" controls width="1200px" height="600px" poster="MY_VIDEO_POSTER.jpg" autoplay="autoplay">
            <source :src="video[0].aboutUsFileLink" type="video/mp4">
          </video>
          <!-- <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">
             <router-link to="./relation">联系我们</router-link>
            </el-button>
          </span> -->
        </el-dialog>

   <!-- 数字管廊解决方案 -->
          <div class="videoGL">
          <video id="my-video" class="video-js videobox" controls preload="auto" width="640" height="264" @click="handleVideoGL()"
            poster="MY_VIDEO_POSTER.jpg" data-setup="{}" style="cursor: pointer;">
            <source :src="video[1].aboutUsFileLink" /></video>
        </div>
        <!-- 数字管廊解决方案遮罩 -->
         <el-dialog :visible.sync="dialogVisibleGL" width="1200pxpx" height="600px" :before-close="handleCloseGL">
          <!-- <h3 style="margin-top: -15px;text-align: center;font-size:24px;">数字管廊解决方案</h3> -->
          <el-divider />
          <video id="videoGL" controls width="1200px" height="600px" poster="MY_VIDEO_POSTER.jpg" autoplay="autoplay">
            <source :src="video[1].aboutUsFileLink" type="video/mp4">
          </video>
          <!-- <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">
              <router-link to="./relation">联系我们</router-link>
            </el-button>
          </span> -->
        </el-dialog>

           <!-- 智慧燃气解决方案 -->
        <div class="videoGAS">
          <video id="my-video" class="video-js videobox" controls preload="auto" width="640" height="264" @click="handleVideoGAS()"
            poster="MY_VIDEO_POSTER.jpg" data-setup="{}" style="cursor: pointer;">
            <source :src="video[2].aboutUsFileLink" type="video/mp4" /></video>
        </div>
        <!-- 智慧燃气解决方案遮罩 -->
        <el-dialog :visible.sync="dialogVisibleGAS" width="1200px" height="600px" :before-close="handleCloseGAS">
          <!-- <h3 style="margin-top: -15px;text-align: center;font-size:24px;">智慧燃气解决方案</h3> -->
          <el-divider />
          <video id="videoGAS" controls width="1200px" height="600px" poster="MY_VIDEO_POSTER.jpg" autoplay="autoplay">
            <source :src="video[2].aboutUsFileLink" type="video/mp4">
          </video>
          <!-- <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">
              <router-link to="./relation">联系我们</router-link>
            </el-button>
          </span> -->
        </el-dialog>
</div>

        <!-- 轮播
        <div class="videoSwiper">
          <swiper class="partnerSwiper" :options="swiperOptionVideo" ref="mySwiper">
           
            <swiper-slide v-for="(item,index) in video" :key="index">
              <video id="my-video" class="video-js videobox" controls preload="auto" width="640" height="264"
                @click="handleVideo()" poster="MY_VIDEO_POSTER.jpg" data-setup="{}">
                <source :src="item.aboutUsFileLink" /></video>
            </swiper-slide>
            <div class="swiper-button-prev site" style="left:15%;" slot="button-prev"></div>
            <div class="swiper-button-next site" style="right:16%;" slot="button-next"></div>
          </swiper>
        </div> -->

       



      </div>
    </div>

    <!-- 荣誉资质 -->
    <div v-show="nowIndex === 2" class="content">
      <!-- 当前位置 -->
      <div class="productSite">
        <div class="productSiteText">
          <span>当前位置：</span><a href="/">首页 ></a><a href="/about">关于我们 ></a><a class="sel" href="javascript:;">荣誉资质</a>
        </div>
      </div>
      <!-- 荣誉资质内容区 -->
      <div class="honorbox">
        <div class="support wrapper">
          <div class="honor">
            <div class="advantitle">
              <h3>荣誉资质</h3>
            </div>
          </div>

          <div class="pages">
            <!-- 分页器 -->
            <!-- <el-pagination  background  layout="prev, pager, next"  @current-change="handleClick"  :total="100">
  
           </el-pagination> -->

            <!-- tab -->
            <!-- 第一页 -->
            <el-tabs v-model="activeName" @tab-click="handleClick" class="first-con">
              <el-tab-pane label="1" name="first">
                <ul class="honor-list clearfix ">
                  <li v-for="(item,index) in first" :key="index"><img :src="item.aboutUsFileLink" /></li>
                </ul>
              </el-tab-pane>
              <!-- 第二页 -->
              <el-tab-pane label="2" name="second">
                <ul class="honor-list clearfix">
                  <li v-for="(item,index) in second" :key="index"><img :src="item.aboutUsFileLink" /></li>
                </ul>
              </el-tab-pane>
              <!-- 第三页 -->
              <el-tab-pane label="3" name="three">
                <ul class="honor-list clearfix">
                  <li v-for="(item,index) in three" :key="index"><img :src="item.aboutUsFileLink" /></li>
                  <h3 style="margin-top:50px;">暂无数据，敬请期待...</h3>
                </ul>
              </el-tab-pane>
              <!-- 第四页 -->
              <el-tab-pane label="4" name="four">
                <ul class="honor-list clearfix">
                  <li v-for="(item,index) in four" :key="index"><img :src="item.aboutUsFileLink" /></li>
                  <h3 style="margin-top:50px;">暂无数据，敬请期待...</h3>
                </ul>
              </el-tab-pane>
              <!-- 第五页 -->
              <el-tab-pane label="5" name="five">
                <ul class="honor-list clearfix">
                  <li v-for="(item,index) in five" :key="index"><img :src="item.aboutUsFileLink" /></li>
                  <h3 style="margin-top:50px;">暂无数据，敬请期待...</h3>
                </ul>
              </el-tab-pane>

            </el-tabs>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import onlineQQ from "../components/onlineQQ"
  import Chat from "../components/Chat"
  export default {
    name: "about",
    data() {
      return {
        dialogVisible: false,
        dialogVisibleCPE: false,
        dialogVisibleGAS: false,
        dialogVisibleGL: false,
        nowIndex: 0,
        active_text: '关于我们',
        text: ['公司简介', '公司视频', '荣誉资质'],
        activeName: 'first',
        // 吸顶
        isFixed: false,
        offsetTop: 350,
        about: "",
        first: "",
        second: "",
        three: "",
        four: "",
        five: "",
        join: "",
        video: "",
        swiperOptionVideo: {
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

      }
    },
    components: {
      onlineQQ,
      Chat
    },
    created() {
      // => 请求数据挂载
      this.request_about();
      this.request_honor_first();
      this.request_honor_second();
      this.request_honor_three();
      this.request_honor_four();
      this.request_honor_five();
      this.request_video();
    },
    mounted() {
      // 监听屏幕滚动
      window.addEventListener('scroll', this.initHeight);
      this.$nextTick(() => {
        this.offsetTop = document.querySelector('#boxFixed').offsetTop;
      })
    },
    methods: {
      // 大视频遮罩效果
      handleClose() {
        this.dialogVisible = false
        // 关闭弹出框时 视频关闭播放
        const video = document.getElementById('video')
        video.pause()
      },
      handleVideo() {
        this.dialogVisible = true
      },
      // *********CPE*************
       handleCloseCPE() {
        this.dialogVisibleCPE = false
        // 关闭弹出框时 视频关闭播放
        const video = document.getElementById('videoCPE')
        video.pause()
      },
      handleVideoCPE() {
        this.dialogVisibleCPE = true
      },
      // *********管廊*************
       handleCloseGL() {
        this.dialogVisibleGL = false
        // 关闭弹出框时 视频关闭播放
        const video = document.getElementById('videoGL')
        video.pause()
      },
      handleVideoGL() {
        this.dialogVisibleGL = true
      },
       // *********智慧燃气解决方案***********
       handleCloseGAS() {
        this.dialogVisibleGAS = false
        // 关闭弹出框时 视频关闭播放
        const video = document.getElementById('videoGAS')
        video.pause()
      },
      handleVideoGAS() {
        this.dialogVisibleGAS = true
      },

      addItem: function (index, active_text) {
        this.nowIndex = index;
        this.active_text = active_text;
      },
      // 吸顶效果
      initHeight() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        this.isFixed = scrollTop > this.offsetTop ? true : false;
      },
      // 数据请求
      // **************************请求about--关于我们******************************
      request_about() {
        this.$axios
          .get("/about/getPageByType", {
            params: {
              //每页显示条数 
              limit: 2,
              // 显示页数
              page: 1,
              type: "公司简介"
            }
          })
          .then(about => {
            this.about = about.data.data;
          })
        // .catch(error => {
        // });
      },
      // **************************请求about--公司视频******************************
      request_video() {
        this.$axios
          .get("/about/getPageByType", {
            params: {
              //每页显示条数 
              limit: 12,
              // 显示页数
              page: 1,
              type: "公司视频"
            }
          })
          .then(video => {
            this.video = video.data.data;
          })
        // .catch(error => {
        // });
      },
      handleClick() {

      },
      // **************************请求about--荣誉资质（第一页）******************************
      request_honor_first() {
        this.$axios
          .get("/about/getPageByType", {
            params: {
              //每页显示条数 
              limit: 12,
              // 显示页数
              page: 1,
              type: "荣誉资质"
            }
          })
          .then(first => {
            this.first = first.data.data;
          })
        // .catch(error => {
        // });
      },
      // **************************请求about--荣誉资质（第二页）******************************
      request_honor_second() {
        this.$axios
          .get("/about/getPageByType", {
            params: {
              //每页显示条数 
              limit: 12,
              // 显示页数
              page: 2,
              type: "荣誉资质"
            }
          })
          .then(second => {
            this.second = second.data.data;
          })
        // .catch(error => {
        // });
      },
      request_honor_three() {
        this.$axios
          .get("/about/getPageByType", {
            params: {
              //每页显示条数 
              limit: 12,
              // 显示页数
              page: 3,
              type: "荣誉资质"
            }
          })
          .then(three => {
            this.three = three.data.data;
          })
        // .catch(error => {
        // });
      },
      request_honor_four() {
        this.$axios
          .get("/about/getPageByType", {
            params: {
              //每页显示条数 
              limit: 12,
              // 显示页数
              page: 4,
              type: "荣誉资质"
            }
          })
          .then(four => {
            this.four = four.data.data;
          })
        // .catch(error => {
        // });
      },
      request_honor_five() {
        this.$axios
          .get("/about/getPageByType", {
            params: {
              //每页显示条数 
              limit: 12,
              // 显示页数
              page: 5,
              type: "荣誉资质"
            }
          })
          .then(five => {
            this.five = five.data.data;
          })
        // .catch(error => {
        // });
      },
      // **************************请求about--加入我们******************************
      //  request_join() {
      //   this.$axios
      //     .get("/about/getPageByType", {
      //       params: {
      //         //每页显示条数 
      //         limit: 12,
      //         // 显示页数
      //         page: 1,
      //         type:"加入我们"
      //       }
      //     })
      //     .then(join => {
      //       this.join = join.data.data;
      //     })
      //     // .catch(error => {
      //     // });
      // },
    },
    // 吸顶效果销毁
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
</script>


<style lang="less" scope>
  #about {

    // 吸顶
    .is_fixed {
      position: fixed !important;
      width: 100%;
      top: 71px !important;
      background: rgba(0, 0, 0, 0.25) !important;
      left: 0;
      z-index: 5;

    }

// 遮罩
// 去除白色背景
 .el-dialog, .el-pager li {
    background:none;
}
// 去除关闭按钮 
.el-icon-close:before {
    // content: "\e6db";
}
// 去除水平线
.el-divider--horizontal{
  display: none;
}
    .videoSmall {
     width: 68%;
    margin-left: 16%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 50px;
    }

    h3 {
      margin-top: 15px;
    }

    .el-tabs__header {
      position: relative;
      margin: 0;
    }

    .site {
      top: 77%;
    }
    .videoCPE,
    .videoGL,
    .videoGAS{
      width: 324PX;
    }
    .videobox {
      width: 100%;
      cursor: pointer;
    }

    .el-tabs__item:hover {
      color: #ffffff;
      background: #55a4f1;
      cursor: pointer;
    }

    .el-tabs__item.is-active {
      color: #ffffff;
      background: #55a4f1;
    }

    .videoBig {
      text-align: center;

      h3 {
        padding-bottom: 15px;
        color: #444444;
        font-size: 28px;
        margin-bottom: 20px;
        margin-top: 20px;

        &:before {
          content: "";
          width: 40px;
          height: 3px;
          background: #f08605;
          position: absolute;
          left: 50%;
          margin-left: -20px;
          bottom: 0;
          top: 14%;
        }
      }

    }

    /*清除浮动*/
    .clearfix:after {
      height: 0;
      content: "";
      display: block;
      clear: both;
      visibility: hidden;
      font-size: 0;
    }

    .clearfix {
      zoom: 1;
    }

    * html .clearfix {
      zoom: 1;
    }

    .aboutUsHead {
      width: 100%;
      margin-top: 71px;
      z-index: -1;
    }

    .newsTab {
      text-align: center;
      background: rgba(0, 0, 0, 0.25);
      position: relative;
      top: -55px;

      a {
        display: inline-block;
        text-align: center;
        font-size: 16px;
        width: 150px;
        line-height: 50px;
        position: relative;
        color: #eeeeee;
        border-left: 1px solid #eeeeee;
        background: #6388cf;

        &:last-child {
          border-right: 1px solid #eeeeee;
        }

        &:hover {
          background: #6388cf;
        }

      }

      .active {
        background: none;
      }
    }

    .content {
      width: 100%;
      margin: 0 auto;
      position: relative;
    }

    //当前位置
    .productSite {
      padding: 0 0 10px;
      border-bottom: 1px solid #efefef;

      .productSiteText {
        width: 25%;
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
          transition: .5s;
        }
      }
    }

    .abouted {
      padding: 22px 0 110px;
      width: 885px;
      margin: auto;

      .el-tabs--top .el-tabs__item.is-top:last-child {
        padding-right: 20px;
      }

      .aboutts {
        margin-bottom: 60px;
        text-align: center;

        small {
          display: block;
          text-align: center;
          color: #292826;
          font-size: 24px;
          text-transform: uppercase;
          line-height: 1;
          margin-bottom: 30px;
        }

        h3 {
          display: inline-block;
          color: #292826;
          font-size: 18px;
          line-height: 1;
          font-weight: normal;
          margin: auto;
          position: relative;
          padding-left: 146px;
          padding-right: 146px;

          &:before {
            content: "";
            width: 113px;
            height: 1px;
            background: #a8a8a8;
            position: absolute;
            left: 0;
            top: 50%;
          }

          &:after {
            content: "";
            width: 113px;
            height: 1px;
            background: #a8a8a8;
            position: absolute;
            right: 0;
            top: 50%;
          }
        }
      }
    }

    // tab
    .el-tabs__nav-wrap::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: rgb(255, 255, 255);
      z-index: 1;
    }

    .el-tabs__nav {
      margin-left: 40%;
    }

    #tab-first {
      padding-left: 18px;

      &::before {
        padding-right: 10px;
      }
    }

    #tab-five {
      padding-right: 18px;

      &::after {
        padding-left: 10px;
      }
    }

    .aboutin {
      p {
        color: #73716e;
        font-size: 16px;
        text-align: center;
        line-height: 38px;
      }

    }

    // 价值观
    .ourvalue {
      position: relative;
    }

    .ourimg img {
      display: block;
      width: 100%;
      height: auto;
      line-height: 0;
    }

    .ourbox {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }

    .ourinfo {
      width: 33.33333%;
      float: left;
      height: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
      overflow: hidden;
    }

    .ourfont {
      width: 100%;
      height: 85px;
      text-align: center;
      line-height: 85px;
      color: #1f1e1e;
      font-size: 16px;
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 5;
      background: #e6edfa;
      cursor: pointer;
      transition: 0.42s;
    }

    .ourtext {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      bottom: -100%;
      background: #f7f7f7;
      transition: 0.65s;
    }

    .ourwrs {
      margin-left: 127px;
      margin-right: 50px;
      margin-top: 55px;
    }

    .ourwrs small {
      display: block;
      color: #1f1e1d;
      font-size: 35px;
      font-weight: bold;
      padding-top: 50px;
      position: relative;
      line-height: 1;
      text-transform: uppercase;
      margin-bottom: 44px;
    }

    .ourwrs small:before {
      content: "";
      width: 100px;
      height: 3px;
      background: #4c79ce;
      position: absolute;
      left: 0;
      top: 0;
    }

    .ourwrs span {
      display: block;
      line-height: 1;
      color: #1f1e1d;
      font-size: 14px;
      font-family: "宋体";
      margin-bottom: 35px;
      font-weight: bold;
    }

    .ourwrs p {
      color: #777572;
      font-size: 16px;
      font-family: "宋体";
      margin-bottom: 22px;
      font-weight: bold;
    }

    .ourinfo1 {
      left: 33.33333%;
    }

    .ourinfo2 {
      left: 66.66666%;
    }

    .ourinfo:hover .ourfont,
    .ourinfo.active .ourfont {
      background: #6388cf;
      color: #fff;
    }

    .ourinfo:hover .ourtext,
    .ourinfo.active .ourtext {
      bottom: 0;
    }

    // 荣誉资质

    .honorbox {
      position: relative;
    }

    .honorbox:before {
      content: "";
      width: 750px;
      height: 750px;
      background: url("../../public/images/honor.png") center no-repeat;
      position: absolute;
      left: 65px;
      bottom: 0;
    }

    .honor-list {
      position: relative;
      z-index: 0;
    }

    .honor-list li {
      width: 25%;
      padding: 38px 0;
      border-bottom: 1px dotted #eeeeee;
      text-align: center;
      float: left;
    }

    .honor-list li img {
      display: block;
      max-width: 90%;
      height: 304px;
      margin: auto;
      transition: 0.34s;
    }

    .honor-list li:hover img {
      transform: translateY(-5px);
      -webkit-transform: translateY(-5px);
      -moz-transform: translateY(-5px);
    }

    .wrapper {
      width: 1200px;
      margin: auto;
    }

    .advantitle {
      margin-bottom: 50px;
    }

    .advantitle h3 {
      padding-bottom: 15px;
      color: #444444;
      font-size: 28px;
      position: relative;
      text-align: center;
    }

    .advantitle h3:before {
      content: "";
      width: 40px;
      height: 3px;
      background: #f08605;
      position: absolute;
      left: 50%;
      margin-left: -20px;
      bottom: 0;
    }

    // 分页按钮
    .pages {
      margin-top: 28px;
      text-align: center;
      margin-bottom: 200px;
    }

    .pages a {
      display: inline-block;
      width: 48px;
      height: 38px;
      background: #fff;
      text-align: center;
      line-height: 38px;
      color: #333333;
      font-size: 16px;
      margin-right: 10px;
      vertical-align: middle;
      transition: 0.4s;
      border: 1px solid #fff;
    }

    .pages a:last-child {
      margin-right: 0;
    }

    .pages a:hover,
    .pages a.on {
      color: #f08605;
      border-color: #f08605;
    }

    // 分页
    .el-tabs__active-bar {
      background-color: none;
    }

    // 加入我们样式

    .support-list li {
      margin-bottom: 17px;
      padding: 34px 20px 24px 76px;
      position: relative;
      background: url(../../public/images/suppbg1.png) repeat;
    }

    .support-list li span {
      display: block;
      width: 71px;
      height: 73px;
      background: url(../../public/images/sppbg.png) center no-repeat;
      position: absolute;
      left: -3px;
      top: -9px;
    }

    .support-list li h3 {
      color: #333333;
      font-size: 18px;
      margin-bottom: 14px;
    }

    .support-list li p {
      color: #333333;
      font-size: 18px;
      line-height: 2;
    }

    .support-list li.suppbg1 {
      background: url(../../public/images/suppbg2.png) repeat;
    }

    .support-list li.suppbg2 {
      background: url(../../public/images/suppbg3.png) repeat;
    }

    .support-list li.suppbg3 {
      background: url(../../public/images/suppbg4.png) repeat;
    }

    .pages {
      margin-top: 28px;
      text-align: center;
    }

    .pages a {
      display: inline-block;
      width: 48px;
      height: 38px;
      background: #fff;
      text-align: center;
      line-height: 38px;
      color: #333333;
      font-size: 16px;
      margin-right: 10px;
      vertical-align: middle;
      transition: 0.4s;
      border: 1px solid #fff;
    }

    .pages a:last-child {
      margin-right: 0;
    }

    .pages a:hover,
    .pages a.on {
      color: #f08605;
      border-color: #f08605;
    }

    .load-info {
      margin-bottom: 40px;
    }

    .loadtitle {
      padding-bottom: 16px;
      border-bottom: 1px solid #eeeeee;
      position: relative;
      margin-bottom: 48px;
    }

    .loadtitle h3 {
      color: #444444;
      font-size: 25px;
      font-weight: normal;
      text-align: left;
    }

    .loadtitle h3:before {
      content: "";
      width: 25px;
      height: 3px;
      background: #f7a753;
      position: absolute;
      left: 0;
      bottom: -1px;
    }

    .load-list li {
      position: relative;
      margin-bottom: 10px;
      background: #eeeeee;
      transition: 0.4s;
    }

    .load-list li:before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background: #b5b5b5;
      opacity: 0;
      visibility: hidden;
      transform: scaleY(0);
      -webkit-transform: scaleY(0);
      -moz-transform: scaleY(0);
      transition: 0.38s;
    }

    .load-list li a {
      display: block;
      position: relative;
      height: 60px;
    }

    .load-list li a span {
      display: inline-block;
      float: left;
      padding-left: 43px;
      color: #444444;
      font-size: 18px;
      background: url(../../public/images/load1.png) 14px center no-repeat;
      line-height: 60px;
      height: 60px;
      transition: 0.44s;
    }

    .load-list li a b {
      display: block;
      width: 100px;
      height: 60px;
      background: #f08605 url(../../public/images/load3.png) center no-repeat;
      float: right;
      opacity: 0;
      visibility: hidden;
      transition: 0.46s;
    }

    .load-list li:hover:before {
      opacity: 1;
      visibility: visible;
      transform: scaleY(1);
      -webkit-transform: scaleY(1);
      -moz-transform: scaleY(1);
    }

    .load-list li:hover a span {
      color: #fff;
      background: url(../../public/images/load2.png) 14px center no-repeat;
    }

    .load-list li:hover a b {
      opacity: 1;
      visibility: visible;
      transition-delay: 0.2s;
    }

    .loadmore {
      text-align: center;
    }

    .loadmore a {
      display: block;
      width: 358px;
      height: 79px;
      margin: auto;
      position: relative;
      background: #eeeeee;
      border: 1px solid #e5e5e5;
      text-align: center;
      transition: 0.45s;
    }

    .loadmore a b {
      display: inline-block;
      margin: auto;
      line-height: 79px;
      padding-right: 43px;
      position: relative;
      color: #a5a4a4;
      font-size: 18px;
      font-weight: normal;
      transition: 0.4s;
    }

    .loadmore a b:before {
      content: "";
      width: 35px;
      height: 28px;
      background: url(../../public/images/more2.png) center no-repeat;
      position: absolute;
      right: 0;
      top: 50%;
      margin-top: -14px;
      transition: 0.4s;
    }

    .loadmore a:hover {
      background: #f08605;
      border-color: #f08605;
    }

    .loadmore a:hover b {
      color: #fff;
    }

    .loadmore a:hover b:before {
      background: url(../../public/images/more1.png) center no-repeat;
      transform: rotate(180deg);
    }

    .salas {
      margin-bottom: 66px;
    }

    .salas li {
      margin-bottom: 10px;
      border: 1px solid #cacaca;
      border-radius: 0 0 0 12px;
      position: relative;
      box-shadow: 0 0 6px rgba(55, 78, 94, 0.45);
      padding-left: 16px;
    }

    .salas li i {
      display: block;
      color: #fbddbd;
      font-size: 24px;
      font-style: italic;
      font-weight: bold;
      position: absolute;
      left: -4px;
      bottom: 2px;
    }

    .salas li span {
      display: block;
      float: left;
      line-height: 48px;
      color: #333333;
      font-size: 18px;
    }

    .salas li b {
      display: block;
      width: 64px;
      height: 29px;
      line-height: 29px;
      text-align: center;
      color: #999999;
      font-family: "Arial";
      float: right;
      margin-top: 11px;
      margin-right: 24px;
      background: url(../../public/images/box1.png) center no-repeat;
      text-transform: uppercase;
      transition: 0.4s;
    }

    .salas li:hover b {
      color: #fff;
      background: url(../../public/images/box2.png) center no-repeat;
    }

    .abouttop figure {
      display: block;
      line-height: 0;
      float: left;
      width: 600px;
      overflow: hidden;
    }

    .abouttop figure img {
      display: block;
      width: 100%;
      height: auto;
    }

    .abouri {
      width: 686px;
      float: left;
      margin-left: -86px;
      position: relative;
      z-index: 10;
      margin-top: 29px;
      background: rgba(34, 85, 153, 0.65);
    }

    .abouri span {
      display: block;
      width: 86px;
      float: left;
      text-align: center;
      padding-top: 21px;
    }

    .abouri span img {
      display: block;
      max-width: 100%;
      margin: auto;
    }

    .aboutext {
      width: 560px;
      float: left;
      margin-left: 14px;
      padding: 34px 0 32px;
    }

    .aboutext p {
      color: #ffffff;
      font-size: 16px;
      font-family: "宋体";
      line-height: 2;
    }

    .abouttt {
      padding: 42px 0;
    }

    .abouttt p {
      color: #333333;
      font-size: 16px;
      line-height: 2;
      font-family: "宋体";
    }

    .aboutimg img {
      display: block;
      float: left;
    }

    .aboutimg img:nth-child(2) {
      float: right;
    }

    .advantage {
      padding: 50px 0 42px;
      background: #f8f8f8;
      margin-top: 110px;
    }

    .advantitle {
      margin-bottom: 50px;
    }

    .advantitle h3 {
      padding-bottom: 15px;
      color: #444444;
      font-size: 28px;
      position: relative;
      text-align: center;
    }

    .advantitle h3:before {
      content: "";
      width: 40px;
      height: 3px;
      background: #f08605;
      position: absolute;
      left: 50%;
      margin-left: -20px;
      bottom: 0;
    }

    .advantage-info {
      width: 303px;
      float: left;
      margin-right: 128px;
      text-align: center;
    }

    .advantage-info:last-child {
      margin-right: 0;
    }

    .advantage-info img {
      display: block;
      margin: auto;
    }

    .advantage-info h3 {
      color: #333333;
      font-size: 16px;
      margin-top: 12px;
      margin-bottom: 14px;
    }

    .advantage-info p {
      color: #555555;
      line-height: 1.8;
      text-align: left;
      font-size: 16px;
    }

    .ideafix {
      margin-top: 45px;
      padding: 0 115px;
    }

    .idea .ideafix {
      padding: 0;
    }

    .idea {
      margin-bottom: 30px;
    }

    .ideafix p {
      color: #333333;
      font-size: 20px;
      line-height: 2.2;
      text-align: left;
    }

    .recuit-list {
      margin-top: 58px;
    }

    .recuit-list li {
      margin-bottom: 20px;
      background: #eeeeee;
      transition: 0.5s;
    }

    .recuit-list li:nth-child(1) .recuitetext {
      display: block;
      text-align: left;
    }

    .recuitop {
      cursor: pointer;
      position: relative;
    }

    .recuitop span {
      display: block;
      line-height: 50px;
      color: #333333;
      font-size: 18px;
      padding-left: 25px;
      float: left;
      position: relative;
      z-index: 6;
      transition: 0.4s;
    }

    .recuitop i {
      display: block;
      width: 212px;
      height: 64px;
      background: url(../../public/images/recuite.png) center no-repeat;
      position: absolute;
      left: 0;
      top: -7px;
      opacity: 0;
      visibility: hidden;
      transition: 0.45s;
    }

    .recuitop b {
      display: block;
      width: 28px;
      height: 28px;
      border: 1px solid #b0b0b0;
      border-radius: 50%;
      float: right;
      margin-right: 43px;
      margin-top: 10px;
      position: relative;
      overflow: hidden;
      transition: 0.4s;
    }

    .recuitop b:before {
      content: "";
      width: 17px;
      height: 4px;
      background: #aaaaaa;
      position: absolute;
      left: 6px;
      top: 12px;
    }

    .recuitop b:after {
      content: "";
      width: 4px;
      height: 17px;
      background: #aaaaaa;
      position: absolute;
      left: 12px;
      top: 6px;
      transition: 0.34s;
    }

    .recuitetext {
      padding: 20px 25px 25px;
      display: none;
    }

    .recuitetext strong {
      color: #333333;
      font-size: 16px;
      line-height: 2;
    }

    .recuitetext p {
      color: #333333;
      font-size: 16px;
      line-height: 2;
    }

    // 招聘职位
    .el-collapse-item__header {
      line-height: 18px;
      background: #e8e5e0;
      padding: 10px;
      margin-top: 1%;
      font-size: 18px;
      transition: .5s;

      &:hover {
        color: #ffffff;
        background: #55a4f1;
      }

      &:visited {
        color: #ffffff;
        background: #55a4f1;
      }
    }

    .el-collapse-item__content {
      font-size: 16px;
      text-align: left;
    }

    .relationUs {
      display: block;
      margin: 0 auto;
      margin-bottom: 30px;
      line-height: 50px;
      font-size: 18px;
      width: 100px;
      height: 50px;
      transition: .5s;
      background: #e8e5e0;

      a {
        display: block;
        text-align: center;
        color: #1f1e1d;

      }

      &:hover {
        background: #55a4f1;

        a {
          color: #ffffff;
        }
      }
    }

    .video {
      width: 70%;
      margin: 1% 15%;

      .video-list {
        width: 640px;
        height: 300px;
        width: 70%;
        margin: 5% 25%;

        h3 {
          padding-bottom: 15px;
          color: #444444;
          font-size: 28px;
          position: relative;
          padding-left: 28%;
          padding-bottom: 5%;

          &:before {
            content: "";
            width: 45px;
            height: 3px;
            background: #f08605;
            position: absolute;
            bottom: 45%;
          }
        }
      }
    }

  }
</style>
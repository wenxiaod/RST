<template>
  <div id="solution">
    <!-- 联系我们QQ组件 -->
    <onlineQQ />
    <Chat />
    <img class="solutionUsHead " src="../../public/images/solutionHead.jpg" alt="">
    <!-- Tab选项卡效果 -->
    <!-- 二级菜单栏吸顶效果 -->
    <div class="newsTab" id="boxFixed" :class="{'is_fixed' : isFixed}">
      <a href="javascript:;" :id="item.convertId" @click="addItem(i,item)" v-for="(item,i) in solution" :key="i"
        :class="{active:i!=nowIndex}">{{item.htmlTitle}}</a>
    </div>

    <!-- 数字管廊管理系统 -->
    <div v-show="nowIndex === 1" class="content" id="pipe">
      <!-- 当前位置 -->
      <div class="productSite">
        <div class="productSiteText">
          <span>当前位置：</span><a href="/">首页 ></a><a href="/#/solution">解决方案 ></a><a class="sel"
            href="javascript:;">数字管廊管理系统</a>

        </div>
      </div>
      <!-- 数字管廊管理系统内容区 -->
      <iframe class="iframe " :src="solution[1].visitPath" frameborder="0" scrolling="no"></iframe>

    </div>


    <!-- 智慧燃气解决方案 -->
    <div v-show="nowIndex === 2" class="content" id="witGas">
      <!-- 当前位置 -->
      <div class="productSite">
        <div class="productSiteText">
          <span>当前位置：</span><a href="/">首页 ></a><a href="/#/solution">解决方案 ></a><a class="sel"
            href="javascript:;">智慧燃气解决方案</a>
        </div>
      </div>
      <!-- 智慧燃气内容区 -->
      <iframe class="iframe " :src="solution[2].visitPath" frameborder="0" scrolling="no"></iframe>
    </div>


    <!-- 人员定位系统 -->
    <div v-show="nowIndex === 0" class="content" id="personnelLocation">
      <!-- 当前位置 -->
      <div class="productSite">
        <div class="productSiteText">
          <span>当前位置：</span><a href="/">首页 ></a><a href="/#/solution">解决方案 ></a><a class="sel"
            href="javascript:;">人员定位系统</a>
        </div>
      </div>
      <!-- 人员定位内容区 -->
      <iframe class="iframe1 " :src="solution[0].visitPath" frameborder="0" scrolling="no"></iframe>

    </div>

    <!-- 智能巡检系统 -->
    <div v-show="nowIndex === 3" class="content" id="witPolling">
      <!-- 当前位置 -->
      <div class="productSite">
        <div class="productSiteText">
          <span>当前位置：</span><a href="/">首页 ></a><a href="/#/solution">解决方案 ></a><a class="sel"
            href="javascript:;">智能巡检系统</a>
        </div>
      </div>
      <!-- 智能巡检内容区 -->
      <iframe class="iframe2 " :src="solution[3].visitPath" frameborder="0" scrolling="no"></iframe>

    </div>



  </div>
</template>



<script>
  // 导入组件
  import onlineQQ from "../components/onlineQQ"
  import Chat from "../components/Chat"
  export default {
    name: "solution",
    data() {
      return {
        // Tab选项卡效果参数
        nowIndex: 0,
        active_text: '解决方案',
        solution: [],
        isFixed: false,
        offsetTop: 350
      }
    },
    components: {
      onlineQQ,
      Chat
    },
    created() {
      // => 请求数据挂载
      this.request_solution();
      this.showInfo();
    },
    mounted() {
      // // 监听屏幕滚动
      //  window.addEventListener('scroll',this.initHeight);
      // this.$nextTick( () => {
      // this.offsetTop = document.querySelector('#boxFixed').offsetTop;
      // })
    },
    methods: {
      addItem: function (index, active_text) {
        this.nowIndex = index;
        this.active_text = active_text;
      },
      //跳转至锚点 
      showInfo() {
        let infos = this.$route.query.id;
        if (infos == "pipe") {
          this.nowIndex = 1;
        }
        if (infos == "witGas") {
          this.nowIndex = 2;
        }
        if (infos == "personnelLocation") {
          this.nowIndex = 0;
        }
        if (infos == "witPolling") {
          this.nowIndex = 3;
        }
      },
      // 吸顶效果
      initHeight() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        this.isFixed = scrollTop > this.offsetTop ? true : false;
      },
      // ---------------数据请求---解决方案----------------
      request_solution() {
        this.$axios
          .get("/doc/getSolution")
          .then(solution => {
            this.solution = solution.data.data;

          })
        // .catch(err => {
        // });
      },


    },
    // 吸顶效果销毁
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll)
    },
  }
</script>


<style lang="less" scope>
  #solution {
    .is_fixed {
      position: fixed !important;
      width: 100%;
      top: 71px !important;
      background: rgba(0, 0, 0, 0.25) !important;
      left: 0;
      z-index: 2;
    }

    .solutionUsHead {
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
        padding: 0 10px;
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
      width: 68%;

      .iframe {
        width: 110%;
        height: 2600px;
        display: block;
        margin: 0 auto;
        margin-left: -5%;
        z-index: 2;
      }

      .iframe1 {
        width: 110%;
        height: 2800px;
        display: block;
        margin: 0 auto;
        margin-left: -5%;
        z-index: 2;
      }

      .iframe2 {
        width: 110%;
        height: 3000px;
        display: block;
        margin: 0 auto;
        margin-left: -5%;
        z-index: 2;
      }

      margin: 0 auto;
      position: relative;
    }

    //当前位置
    .productSite {
      width: 25%;
      margin-left: 25%;

      .productSiteText {

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
  }
</style>
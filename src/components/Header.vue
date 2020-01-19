<template>
  <div id="app">
    <div id="nav">
      <a href="/" class="gohome"><img src="../../public/images/logo.png" alt=""></a>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1" style="width: 120px;">
          <router-link to="/">首页</router-link>
        </el-menu-item>

        <el-menu-item index="2" style="width: 120px;">
          <el-submenu index="2">
            <template slot="title">
              <router-link style="color:#666666;" to="/product">硬件产品</router-link>
            </template>
            <el-menu-item index="2-1" style="padding:0;">
              <router-link to="/productbyid?id=14">1100型路由器</router-link>
            </el-menu-item>
            <el-menu-item index="2-2" style="padding:0;">
              <router-link to="/productbyid?id=15">KT100型路由器</router-link>
            </el-menu-item>
            <el-menu-item index="2-3" style="padding:0;">
              <router-link to="/productbyid?id=16">室内CPE</router-link>
            </el-menu-item>
            <el-menu-item index="2-4" style="padding:0;">
              <router-link to="/productbyid?id=17">便捷式应急灯</router-link>
            </el-menu-item>
          </el-submenu>
        </el-menu-item>

        <el-menu-item index="3" style="width: 120px;">
          <el-submenu index="3">
            <template slot="title">
              <router-link style="color:#666666;" to="/solution">解决方案</router-link>
            </template>
            <el-menu-item index="3-1" style="padding:0;">
              <router-link to="/solution?id=personnelLocation">人员定位系统</router-link>
            </el-menu-item>
            <el-menu-item index="3-2" style="padding:0;">
              <router-link to="/solution?id=pipe">数字管廊解决方案</router-link>
            </el-menu-item>
            <el-menu-item index="3-3" style="padding:0;">
              <router-link to="/solution?id=witGas">智慧燃气解决方案</router-link>
            </el-menu-item>
            <el-menu-item index="3-4" style="padding:0;">
              <router-link to="/solution?id=witPolling">智能巡检系统</router-link>
            </el-menu-item>
          </el-submenu>
        </el-menu-item>

        <el-menu-item index="4" style="width: 120px;">
          <el-submenu index="4">
            <template slot="title">
              <router-link style="color:#666666;" to="/news">新闻动态</router-link>
            </template>
            <el-menu-item index="4-1" style="padding:0;">
              <router-link to="/news?id=newShow">公司动态</router-link>
            </el-menu-item>
            <el-menu-item index="4-2" style="padding:0;">
              <router-link to="/news?id=infoShow">行业资讯</router-link>
            </el-menu-item>
          </el-submenu>
        </el-menu-item>

        <el-menu-item index="5" style="width: 120px;">
          <el-submenu index="5">
            <template slot="title">
              <router-link style="color:#666666;" to="/about">关于我们</router-link>
            </template>
            <el-menu-item index="5-1" style="padding:0;">
              <router-link to="/about?id=aboutIntro">公司简介</router-link>
            </el-menu-item>
            <el-menu-item index="5-2" style="padding:0;">
              <router-link to="/about?id=aboutVideo">公司视频</router-link>
            </el-menu-item>
            <el-menu-item index="5-3" style="padding:0;">
              <router-link to="/about?id=aboutAptitude">荣誉资质</router-link>
            </el-menu-item>
          </el-submenu>
        </el-menu-item>

        <el-menu-item index="6" style="width: 120px;">
          <router-link to="/relation">联系我们</router-link>
        </el-menu-item>
      </el-menu>
    </div>
    <!-- 解决：路由相同参数不同无法触发路由 -->
    <router-view :key="$route.fullPath" />

  </div>
</template>

<script>
  export default {
    name: "headerNav",
    data() {

      return {
        activeIndex: '1',


      }
    },
    created() {
      this.handleSelect();
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        if (key == "2-1" || key == "2-2" || key == "2-3" || key == "2-4") {
          this.activeIndex = 2;
        }
        if (key == "3-1" || key == "3-2" || key == "3-3" || key == "3-4") {
          this.activeIndex = 3;
        }
        if (key == "4-1" || key == "4-2") {
          this.activeIndex = 4;
        }
        if (key == "5-1" || key == "5-2" || key == "5-3") {
          this.activeIndex = 5;
        }
      },

    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope lang="less">
  #nav {
    border: none;
    position: fixed;
    width: 100%;
    height: 90px;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
    box-shadow: 1px 0px 1px 0px;
    font-size: 18px;

    .gohome {
      margin-right: 17%;
      margin-left: -5%;

      img {
        width: 147px;
        height: 60px;
      }
    }

    //  取消下拉箭头
    .el-icon-arrow-down:before {
      content: none;
    }

    .el-menu.el-menu--horizontal {
      border-bottom: none;
    }

    .el-menu--horizontal>.el-menu-item {
      height: 90px;
      line-height: 90px;
    }

    .el-menu--horizontal>.el-submenu .el-submenu__title {
      height: 90px;
      line-height: 90px;
      border-bottom: none;
    }

    // 一级菜单选中蓝色
    .el-menu--horizontal>.el-menu-item.is-active {
      border-bottom: none;
      background: #409eff;
    }

    // 二级菜单选中蓝色
    .el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
      border-bottom: none;
      color: #ffffff;
      background: #409eff;

      a {
        color: #ffffff !important;
      }
    }

    .el-menu--horizontal>.el-submenu__title.is-active .el-menu-item {
      background: #409eff !important;
    }

    .el-menu-item,
    .el-submenu__title {
      font-size: 18px;
      color: #666666;
      line-height: 90px;
      height: 90px;
      padding: 0;

      &:hover {
        color: #ffffff !important;
        background: #409eff;
      }

      a {
        &:hover {
          color: #ffffff !important;
        }
      }

    }

  }

  .el-menu--popup {
    min-width: 121px !important;

    li {
      background: #EAF5FF !important;
    }
  }

  .el-menu-item {

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #909399;

      &:hover {
        color: #FF7600;

      }
    }

  }

  .el-menu-item {

    margin-top: -5px;
    margin-bottom: -5px;

    a {
      color: #55a4f1;
    }
  }

  .el-menu--popup-bottom-start {

    width: 120px;

  }

  // .el-menu--horizontal{
  //  background: #EAF5FF !important;
  // }
</style>
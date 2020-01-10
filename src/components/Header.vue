<template>
  <div id="app">
    <div id="nav">
      <a href="/" class="gohome"><img src="../../public/images/logo.png" alt=""></a>
      <el-menu :default-active="$route.path" class="el-menu-demo is-active" mode="horizontal" @tab-click="handleClick">
        <el-menu-item index="1">
          <router-link to="/" style="margin-top:4px">官网</router-link>
        </el-menu-item>

        <el-submenu index="2">
          <template slot="title" class="el-menu-item">
            <router-link to="/product">硬件产品</router-link>
          </template>
          <el-menu-item index="2-1"><router-link to="/productbyid?id=14">1100型路由器</router-link></el-menu-item>
          <el-menu-item index="2-2"><router-link  to="/KT100">KT100型路由器</router-link></el-menu-item>
          <el-menu-item index="2-3"><router-link  to="/CPE">室内CPE</router-link></el-menu-item>
          <el-menu-item index="2-4"><router-link  to="/LED">便捷式应急灯</router-link></el-menu-item>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title" class="el-menu-item">
            <router-link to="/solution">解决方案</router-link>
          </template>
          <el-menu-item index="3-1"><router-link to="/solution">数字管廊解决方案</router-link></el-menu-item>
          <el-menu-item index="3-2"><router-link to="/solution">智慧燃气解决方案</router-link></el-menu-item>
          <el-menu-item index="3-3"><router-link to="/solution">人员定位系统</router-link></el-menu-item>
          <el-menu-item index="3-4"><router-link to="/solution">智能巡检系统</router-link></el-menu-item>
        </el-submenu>


        <el-submenu index="4">
          <template slot="title" class="el-menu-item">
            <router-link to="/news">新闻动态</router-link>
          </template>
          <el-menu-item index="4-1"><router-link to="/news">公司动态</router-link></el-menu-item>
          <el-menu-item index="4-2"><router-link to="/news">行业资讯</router-link></el-menu-item>
        </el-submenu>

        <el-submenu index="5">
          <template slot="title" class="el-menu-item">
            <router-link to="/about">关于我们</router-link>
          </template>
          <el-menu-item index="5-1"><router-link to="/about">公司简介</router-link></el-menu-item>
          <el-menu-item index="5-2"><router-link to="/about">公司视频</router-link></el-menu-item>
          <el-menu-item index="5-3"><router-link to="/about">荣誉资质</router-link></el-menu-item>
        
        </el-submenu>

        <el-menu-item index="6">
          <router-link to="/relation" style="margin-top:4px">联系我们</router-link>
        </el-menu-item>
      </el-menu>

    </div>
    <router-view />

  </div>
</template>

<script>
export default {
  name: "HelloWorld",
data(){
  
  return{
     activeIndex: '1',
     
  }
},
 methods: {
      handleClick(tab, event) {
    console.log(tab, event);
    const activeTab = this.$router.query.tab
    this. activeName  = activeTab
  }
  
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope lang="less">
//↓ element 自带样式取消
.el-submenu:hover{
  background: #55a4f1;
}

//↑ element 自带样式取消
    #nav {
      border: none;
      position: fixed;
      width: 100%;
      height: 70px;
      background: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 99;
     box-shadow: 1px 0px 1px 0px;
      .gohome{
        margin-right: 8%;
        margin-left: -15%;
      img{
        width: 147px;
        height: 60px;
      }
      }
      .el-menu {
        height: 70px;
        li {
          height: 71px;
          float: left;
          padding: 0 15px;
          display: flex;
          align-items: center;
          &:hover{
            transition:linear .5s;
            background: #55a4f1;
          }
        }
      }

      ul {
        list-style: none;
      }

      a {
        font-size: 18px;
        color: #2c3e50;
        text-decoration: none;
      }
    }

.el-menu-item{
    margin-top: 5px;
    text-align: center;
    color: black !important;
    transition: .48s;
    a:hover{
      color:#f08605;
    }
}
.el-menu--horizontal>.el-submenu.is-active .el-submenu__title,
.el-menu--horizontal>.el-submenu .el-submenu__title,
.el-menu--horizontal>.el-menu-item.is-active{
    border-bottom:none !important;
}
.el-menu--horizontal>.el-submenu .el-submenu__icon-arrow{
  display: none;
}
.el-menu-item.is-active{
    background: #55a4f1 !important;
}
.el-menu-item.is-active ul li{
  &:active{
     background: #55a4f1 !important;
  }
}
.el-submenu__title:hover{
  background:none !important;
}
.el-menu--popup{
  min-width: 142px !important;
}


</style>

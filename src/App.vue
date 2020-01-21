<template>
  <div id="app">
    <!-- <Nav /> -->
    <Header />
    <BackToTop />
    <Footer />
  </div>


</template>

<script>
  // 导入组件
  import Header from "./components/Header"
  import BackToTop from "./components/BackToTop"
  import Footer from "./components/Footer"
  // import Nav from "./components/Nav"


  export default {
    name: 'app',
    data() {
      return {
        //回到顶部按钮初始化 
        myBackToTopStyle: {
          right: '50px',
          bottom: '50px',
          width: '40px',
          height: '40px',
          borderRadius: '4px',
          lineHeight: '45px', // 保持与高度一致以垂直居中
          background: '#e7eaf1', // 按钮的背景颜色,
          banner: "",
          routerData: ''
        }
      }
    },
    components: {
      // 组件注册
      Header,
      BackToTop,
      Footer,
      // Nav
    },
      created() {
    this.getLocation()
    
  },
    methods: {
       getLocation() {
      // 进行ip定位
      this.axios.get('http://www.niceming.cn/api/ip').then(
        res => {
          let location = res.data.province + res.data.city
          this.$store.commit('setLocation', location)
        },
        // err => {
        //   this.$store.commit('setLocation', '未知')
        //   console.log(res)
        // }
      )
    }
    },

  }
</script>



<style lang="less">
  // 全局应用样式
  * {
    margin: 0;
    padding: 0;
  }

  a {
    color: black;
  }

  #app {

    // 占位
    .placeholder {
      width: 100%;
      height: 100px;
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

    .back-to-ceiling:hover {
      background: #f08605 !important;

      .Icon {
        fill: #ffffff !important;
      }
    }

  }
</style>
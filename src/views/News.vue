<template>
  <div id="news">
    <onlineQQ />
    <Chat />
    <img class="newsHead" src="../../public/images/newsHead.jpg" alt="">
    <!-- Tab选项卡效果 -->
    <!-- 吸顶效果 -->
    <div class="newsTab" id="boxFixed" :class="{'is_fixed' : isFixed}">
      <a href="javascript:;" @click="addItem(i,item)" v-for="(item,i) in text" :key="i"
        :class="{active:i!=nowIndex}">{{item}}</a>
    </div>

    <!-- 公司动态 -->
    <div v-show="nowIndex === 0" class="content">
      <!-- 当前位置 -->
      <div class="productSite">
        <div class="productSiteText">
          <span>当前位置：</span><a href="/">首页 ></a><a href="/news">新闻动态 ></a><a class="sel"
            href="javascript:;">公司动态</a>
        </div>
      </div>
      
      <!-- 新闻动态内容区 -->
      <div class="newsNews" v-for="(item,index) in news" :key="index" @click="selectItem(item)">
        <div class="newsNews-pic">
          <img :src="item.newsPicPath" alt="">
        </div>
        <div class="newsNews-text">
          <h3>{{item.newsTitle}}</h3>
          <p>{{item.newsContent}}</p>
          <span>{{item.newsKeywords}}</span>
          <span>{{item.newsWritter}}</span>
          <span>{{item.newsSource}}</span>
          <span>{{item.addTime}}</span>
        </div>
      </div>

    </div>




    <!-- 行业资讯 -->
    <div v-show="nowIndex === 1" class="content">
      <!-- 当前位置 -->
      <div class="productSite">
        <div class="productSiteText">
          <span>当前位置：</span><a href="/">首页 ></a><a href="/news">新闻动态 ></a><a class="sel"
            href="javascript:;">行业资讯</a>
        </div>
      </div>
      <!-- 行业资讯内容区 -->
      <div class="newsNews" v-for="(item,index) in messages" :key="index" @click="selectItem(item)">
        <div class="newsNews-pic">
          <img :src="item.newsPicPath" alt="">
        </div>
        <div class="newsNews-text">
          <h3>{{item.newsTitle}}</h3>
          <p>{{item.newsContent}}</p>
          <span>{{item.newsKeywords}}</span>
          <span>{{item.newsWritter}}</span>
          <span>{{item.newsSource}}</span>
          <span>{{item.addTime}}</span>
        </div>
      </div>
    
    </div>



  </div>
</template>



<script>
  import onlineQQ from "../components/onlineQQ"
  import Chat from "../components/Chat"
  export default {
    name: "news",
    data() {
      return {
        nowIndex: 0,
        active_text: '公司动态',
        text: ['公司动态', '行业资讯'],
        news: [],
        messages:[],
        isFixed: false,
        offsetTop:350,
      }
    },
    components: {
      onlineQQ,
      Chat
    },
    created() {
      // => 请求数据
      this.request_news();
      this.request_messages();
    },
     mounted(){
       // 监听屏幕滚动
       window.addEventListener('scroll',this.initHeight);
      this.$nextTick( () => {
      this.offsetTop = document.querySelector('#boxFixed').offsetTop;
      })
    },
    methods: {
      addItem: function (index, active_text) {
        this.nowIndex = index;
        this.active_text = active_text;
      },
      // 吸顶效果
      initHeight () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        this.isFixed = scrollTop > this.offsetTop ? true : false;
      },
    selectItem(item){
    let id=item.newsId;
    this.$router.push({
      path:"/newsbyid",
      query:{
        id:id
      }
    })

  },
      // **************************请求news--公司动态******************************
      request_news() {
        this.$axios
          .get("/news/getTypeAll", {
            params: {
              // 请求类型
              type: "公司动态",
              //每页显示条数 
              limit: 4,
              // 显示页数
              page: 1
            }
          })
          .then(news => {
            this.news = news.data.data;
          })
          // .catch(error => {
          // });
      },
      // **************************请求news--行业资讯******************************
         request_messages() {
        this.$axios
          .get("/news/getTypeAll", {
            params: {
              // 请求类型
              type: "行业资讯",
              //每页显示条数 
              limit: 6,
              // 显示页数
              page: 1
            }
          })
          .then(messages => {
            this.messages = messages.data.data;
          })
          // .catch(error => {
          // });
      }
    },
    // 吸顶效果销毁
    destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
    }
  }
</script>

<style lang="less" scope>
  #news {
// 吸顶
.is_fixed{
position:fixed !important;
width: 100%;
top:71px !important;
background: rgba(0, 0, 0, 0.25) !important;
left:0;
z-index:2;
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

    //productSite
    .newsHead {
      width: 100%;
      margin-top: 71px;
      z-index: -1;
    }

    .newsTab {
        text-align: center;
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
    .content{
      width: 68%;
      margin: 0 auto;
      position: relative;
    .newsNews-pic{
   img{
       width: 191px;
    height: 127px;
    position: relative;
    top: 65px;
    left: 50%;
  }
}
    }
.newsNews{
    border-bottom: 1px solid #eeeeee;
    height: 320px;
    display: flex;
    justify-content: center;
  .newsNews-text{
   position: relative;
    top: 33px;
    width: 888px;
    height: 220px;
    left: 10%;
    text-align: left;
  
    h3{
    color: #333333;
    font-size: 25px;
    margin-bottom: 20px;
    }
    p{
          color: #333333;
    font-size: 18px;
    line-height: 2;
    height: 100px;
    }
    span{
    margin-top: 40px;
    display: block;
    min-width: 50px;
    height: 17px;
    line-height: 17px;
    color: #fff;
    text-align: center;
    font-size: 12px;
    margin-right: 37px;
    background: #72b5f1;
    float: left;
    margin-left: 5%;
    &:last-child,&:nth-child(4),&:nth-child(5){
      color: black;
      background: none;
    }
    &:nth-child(4){
      margin-left: 16%;
    }
    }
  }
}

  }
</style>
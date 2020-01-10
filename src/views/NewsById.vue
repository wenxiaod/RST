<template>
  <div id="bewsbyid">
  <onlineQQ />
  <Chat />
    <div class="view-box">
       
            <div class="positewr wrapper">
                <span>当前位置：</span><a href="./#/">首页 ></a><a href="./#/news">新闻动态  ></a><a href="./#/news">企业新闻   ></a><a class="on" href="javascript:;">正文</a>
            </div>
                <!-- <iframe class="iframe" :src="newsbyid.visitPath" frameborder="0" id="test" scrolling="no" width="100%" height="100%" ></iframe> -->
            
            <iframe name="iframe2" onload="this.height=iframe2.document.body.scrollHeight" :src="newsbyid.visitPath" frameborder="0" width="50%"></iframe>
      
    </div>


  </div>
</template>

<script>
import onlineQQ from "../components/onlineQQ"
import Chat from "../components/Chat"
export default {
  name: "bewsbyid",

data(){
      return {
       newsbyid:[]
       
      }
    },
  
    components:{
      onlineQQ,
      Chat
    },
   created() {
      // => 请求数据
      this.request_newsbyid();
    },
mounted(){
   /**
     * iframe-宽高自适应显示   
     */
    var iframes = document.getElementsByTagName('iframe');

        for (var i = 0, j = iframes.length; i < j; ++i) {
            // 放在闭包中，防止iframe触发load事件的时候下标不匹配
            (function(_i) {
                iframes[_i].onload = function() {
                    this.contentWindow.onbeforeunload = function() {
                        iframes[_i].style.visibility = 'hidden';
                        iframes[_i].style.display = 'none';

                        iframes[_i].setAttribute('height', 'auto');
                    };

                    this.setAttribute('height', this.contentWindow.document.body.scrollHeight);

                    this.style.visibility = 'visible';
                    this.style.display = 'block';
                };
            })(i);
        }

},
    methods:{
 // **************************--硬件产品---新闻详情页******************************
   request_newsbyid(){
        let id = this.$route.query.id;
       this.$axios
          .get("/doc/getNews", {
            params: {
              id: id
            }
          })
          .then(newsbyid => {
            this.newsbyid = newsbyid.data.data;
          })
        //   .catch(err => {
        //   });
      },    
}
}
</script>

<style lang="less" scope>
#bewsbyid{
  overflow:hidden;
ul{
    li{
        list-style: none;
    }
}
padding-top:71px;
    .iframe{
      width: 50%;
    // height: 3500px; 
    display: block;
    margin: 50px auto;
    /* margin-left: 15%; */
    z-index: 2;

    .X3{
    line-height: 20px !important;
    }
  }

.positewr span,
.positewr a {
    display: inline-block;
    color: #888888;
    font-size: 16px;
}

.positewr a {
    transition: 0.4s;
    margin-right: 5px;
}

.positewr a:hover,
.positewr a.on {
    color: #f08605;
}

.positewr span {
    position: relative;
    padding-left: 10%;
    margin: 1% 0;
}

.reading {
    width: 420px;
    float: right;
    position: fixed;
    left: 55%;
    top: 18%;
    transition: 0.45s;
}

.reading.scoll {
    position: fixed;
    top: 40px;
}

.redtitle {
    background: url(../../public/images/newbg.png) repeat;
    border-bottom: 5px solid #425268;
}

.redtitle span {
    display: block;
    padding-left: 46px;
    line-height: 48px;
    line-height: 48px;
    position: relative;
    color: #225599;
    font-size: 25px;
}

.redtitle span:before {
    content: "";
    width: 24px;
    height: 25px;
    background: url(../../public/images/read.png) center no-repeat;
    position: absolute;
    left: 15px;
    top: 14px;
}

.read-list {
    padding-bottom: 26px;
    border-bottom: 5px solid #eaeaea;
    background: url(../../public/images/bg2.png) repeat;
}

.read-list li {
    border-bottom: 1px solid #eeeeee;
        display: block;
}

.read-list li a {
    display: block;
    padding-left: 32px;
    padding-top: 19px;
    padding-bottom: 6px;
    color: #333333;
    font-size: 1px;
    position: relative;
    transition: 0.35s;
    font-size: 14px;
}

.read-list li a:before {
    content: "";
    width: 8px;
    height: 8px;
    background: #888888;
    position: absolute;
    left: 15px;
    top: 25px;
    border-radius: 50%;
    transition: 0.34s;
}

.read-list li a:hover {
    color: #225599;
}

.read-list li a:hover:before {
    background: #2f81cd;
}

}
</style>

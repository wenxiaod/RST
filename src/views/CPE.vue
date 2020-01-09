<template>
  <div id="cpe">
  <onlineQQ />
  <Chat />
<div class="view-box">
        <div class="posite">
             <div class="positewr wrapper clearfix">
                <span>当前位置：</span><a href="/">首页 ></a><a href="./product">硬件产品 ></a><a href="./CPE">室内CPE</a>
            </div>
            <div class="product-view">
                <div class="producttopd wrapper clearfix">
                    <figure><img src="http://192.168.1.115:8080/picture/homePic/RST-LD680.png" alt="" /></figure>
                    <div class="prote">
                        <h3>室内CPE</h3>
                        <p>{{cpe[0].productDetailsContent}}</p>
                    </div>
                </div>
              <div class="productho">
                    <ul class="pro-list wrapper clearfix">
                        <li><a href="javascript:;">产品概述</a></li>
                        <li><a href="javascript:;">组网方案拓扑图</a></li>
                        <li><a href="javascript:;">功能特点及优势</a></li>
                        <li><a href="javascript:;">技术参数</a></li>
                        <li><a href="javascript:;">应用案例</a></li>
                    </ul>
                </div>
                <div class="pro-info" id="describe">
                    <div class="loadtitle">
                      <h3>{{cpe[0].productDetailsType}}</h3>
                    </div>
                    <div class="protexss clearfix">
                        <div class="prole">
                        <p>{{cpe[0].productDetailsContent}}</p>                        
                        </div>
                    </div>
                </div>


                <div class="proinfo2" id="character">
                    <ul class="recuit-list">
                        <li class="on">
                            <div class="recuitop clearfix">
                                <span>{{cpe[1].productDetailsType}}</span><i></i><b></b>
                            </div>
                            <div class="recuitetext">
                                <strong>{{cpe[1].productDetailsContent}}</strong><br />
                                
                            </div>
                        </li>
                    </ul>
                </div>


                  <!-- <div class="pro-info" id="describe">
                    <div class="loadtitle">
                         <h3>{{cpe[1].productDetailsType}}</h3>
                    </div>
                    <div class="protexss clearfix">
                        <div class="prole">
                            <p>{{cpe[1].productDetailsContent}}</p>
                        </div>

                    </div>
                </div> -->

                <div class="pro-info" id="parameter">
                    <div class="loadtitle">
                        <h3>{{cpe[2].productDetailsType}}</h3>
                    </div>
                    <div class="pross"><img :src="cpe[2].productDetailsPicLink" alt="" /></div>
                </div>
                <div class="pro-info" id="case">
                    <div class="loadtitle">
                       <h3>{{cpe[3].productDetailsType}}</h3>
                    </div>
                    <div class="pross"><img :src="cpe[3].productDetailsPicLink" alt="" /></div>
                </div>
            </div>
  
            <div class="prevpage wrapper">
                <div class="words clearfix"><span>关键词：室内CPE</span><a href="javascript:history.back(-1);">返回上一页</a></div>
                <div class="prebnext">
                    <div class="preinfo"><a href="./#/KT100">上一篇：RST-KT100工业路由器/DTU</a></div>
                    <div class="preinfo"><a href="./#/LED">下一篇：便携式应急灯</a></div>
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
  name: "CPE",

data(){
      return {
       cpe:[]
      }
    },
  
    components:{
      onlineQQ,
      Chat
    },
        created() {
      // => 请求数据
      this.request_cpe();
    },
methods:{
 // **************************请求RST1100--硬件产品---详情数据******************************
         request_cpe(){
       this.$axios
          .get("/productDetails/getProductDetails", {
            params: {
              id: "16"
            }
          })
          .then(cpe => {
            this.cpe = cpe.data.data;
          })
        //   .catch(err => {
        //   });
      },
  
}






}
</script>

<style lang="less" scope>
#cpe{
  width: 68%;
  margin:0 auto;
  padding-top: 71px;
  text-align: center;
  .view-box {
  background: url(../../public/images/view.jpg) repeat-x;
.positewr{

    text-align: left;
    padding-top: 60px;
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
    padding-left: 21px;
    position: relative;
    background: url(../../public/images/now.png) 1px center no-repeat;
}
.product-view {
    padding-top: 110px;
}

.producttopd figure {
    display: block;
    width: 370px;
    float: left;
    margin-left: 20px;
    overflow: hidden;
}

.producttopd figure img {
    display: block;
    width: 100%;
    height: auto;
}

.prote {
    width: 693px;
    float: right;
    margin-right: 20px;
    padding-top: 78px;
}

.prote h3 {
    color: #225599;
    font-size: 25px;
    margin-bottom: 34px;
}

.prote p {
    color: #333333;
    font-size: 16px;
    line-height: 2.2;
    text-align: left;
}

.productho {
    margin-top: 102px;
}

.pro-list {
    background: url(../../public/images/newbg.png) repeat;
}

.pro-list li {
    float: left;
    position: relative;
}

.pro-list li:nth-child(1) {
    margin-left: 20px;
}

.pro-list li a:after {
    content: "";
    width: 100%;
    height: 100%;
    border: 1px solid #065fb7;
    position: absolute;
    left: 0;
    top: 0;
    box-sizing: border-box;
    opacity: 0;
    transition: 0.43s;
    transform: scale(0.5);
    -webkit-transform: scale(0.5);
    -moz-transform: scale(0.5);
    visibility: hidden;
}

.pro-list li a {
    display: block;
    width: 154px;
    position: relative;
    line-height: 50px;
    color: #333333;
    font-size: 16px;
    text-align: center;
    position: relative;
    transition: 0.45s;
    z-index: 5;
}

.pro-list li:before {
    content: "";
    width: 1px;
    height: 25px;
    position: absolute;
    right: 0;
    background: url(../../public/images/line2.png) center no-repeat;
    top: 16px;
    transition: 0.34s;
}

.pro-list li.on:before,
.pro-list li:hover:before {
    background: none;
}

.pro-list li.on a,
.pro-list li:hover a {
    background: #fff;
}

.pro-list li.on a:after,
.pro-list li:hover a:after {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
}

.prosilist .loadtitle {
    margin-bottom: 0;
}

.pro-info {
    width: 1180px;
    margin: auto;
    padding-top: 60px;
}

#parameter {
    padding-top: 40px;
}

#case {
    padding-top: 40px;
}

.prosilist {
    padding-top: 50px;
}

.prole {
    float: left;
    width: 680px;
}

.prole p {
    color: #333333;
    font-size: 18px;
    line-height: 2.2;
        text-align: left;
}

.proimgs {
    float: right;
}

.proimgs img {
    display: block;
}

.pross {
    text-align: center;
}

.pross img {
    max-width: 100%;
    margin: auto;
}

.prolis li {
    padding: 40px 0;
}

.prolis li .protexss {
    width: 1160px;
    margin: auto;
}

.prolis li .protexss .prole {
    padding-top: 10px;
    width: 600px;
}

.prolis li .protexss .prole h3 {
    color: #333333;
    font-size: 22px;
    margin-bottom: 30px;
}

.prolis li:nth-child(2n+2) {
    background: #f5f5f5;
}

.prolis li:nth-child(2n+2) .protexss .prole {
    float: right;
}

.prolis li:nth-child(2n+2) .proimgs {
    float: left;
}   
}
.posite .prevpage {
    margin-top: 58px;
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
.words {
    border-bottom: 1px solid #eeeeee;
    padding-left: 20px;
    padding-right: 20px;
}

.words span {
    float: left;
    color: #333333;
    font-size: 16px;
}

.words a {
    display: block;
    width: 102px;
    height: 33px;
    background: url(../../public/images/back.png) center no-repeat;
    float: right;
    line-height: 28px;
    text-align: center;
    color: #fff;
    font-size: 12px;
}

.prebnext {
    padding: 15px 20px 0;
    text-align: left;
}

.preinfo {
    margin-bottom: 16px;
}

.preinfo a {
    display: inline-block;
    color: #333333;
    font-size: 16px;
    transition: 0.4s;
}

.preinfo a:hover {
    color: #225599;
}
// 优势特点
.proinfo2 {
    padding: 36px 0 50px;
    background: #f8fafe;
    width: 1306px;
    max-width: 95%;
    margin: auto;

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
}
.recuit-list li.on {
    background: url(../../public/images/rebg.png) left top repeat-x;
}

.recuit-list li.on .recuitop span,
.recuit-list li:hover .recuitop span {
    color: #fff;
}

.recuit-list li.on .recuitop i,
.recuit-list li:hover .recuitop i {
    opacity: 1;
    visibility: visible;
}

.recuit-list li.on .recuitop b {
    border-color: #0d77e5;
}

.recuit-list li.on .recuitop b:before,
.recuit-list li.on .recuitop b:after {
    background: #0d77e5;
}

.recuit-list li.on .recuitop b:after {
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px);
    -webkit-transform: translateY(20px);
    -moz-transform: translateY(20px);
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
    display: block;
    text-align: initial;
}

.recuitetext p {
    color: #333333;
    font-size: 16px;
    line-height: 2;
}
}

</style>

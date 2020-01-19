<template>
    <div id="productbyid">
        <onlineQQ />
        <Chat />
        <div class="view-box">
            <div class="positewr wrapper clearfix">
                <span>当前位置：</span><a href="/">首页 ></a><a href="./#/product">硬件产品 ></a><a
                    href="javascript:;">1100型路由器</a>
            </div>

            <div class="product-view">
                <div class="producttopd wrapper clearfix">
                    <figure><img :src="productImg.imagePath" alt="" /></figure>
                    <div class="prote">
                        <h3>{{productImg.imageTitle}}</h3>
                        <p>{{productbyid[0].productDetailsContent}}</p>
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
                <!-- 产品概述 -->
                <div class="pro-info" id="describe">
                    <div class="loadtitle">
                        <h3>{{productbyid[0].productDetailsType}}</h3>
                    </div>
                    <div class="protexss clearfix">
                        <div class="prole">
                            <p>{{productbyid[0].productDetailsContent}}</p>
                        </div>

                    </div>
                </div>
                <!-- 产品优势 -->
                <div v-if="productbyid[1].productDetailsContent" class="pro-info" id="spectrum">
                    <div class="loadtitle">
                        <h3>{{productbyid[1].productDetailsType}}</h3>
                    </div>
                    <div class="pross"><img :src="productbyid[1].productDetailsPicLink" alt="" /></div>
                </div>
                <div class="prosilist" id="character">
                    <div class="loadtitle wrapper">
                        <h3>{{productbyid[2].productDetailsType}}</h3>
                    </div>
                    <ul class="prolis">
                        <li>
                            <!-- 1、工业级设计 -->
                            <div class="protexss clearfix">
                                <div class="prole">
                                    <h3>{{productbyid[2].productDetailsTitle}}</h3>
                                    <p>{{productbyid[2].productDetailsContent}}</p>
                                </div>
                                <div class="proimgs"><img :src="productbyid[2].productDetailsPicLink" alt="" /></div>
                            </div>
                        </li>
                        <li v-if="productbyid[3].productDetailsTitle">
                            <!-- 2、高可靠、无间断的网络通讯" -->
                            <div class="protexss clearfix">
                                <div class="prole">
                                    <h3> {{productbyid[3].productDetailsTitle}}</h3>
                                    <p>{{productbyid[3].productDetailsContent}}</p>

                                </div>
                                <div class="proimgs"><img :src="productbyid[3].productDetailsPicLink" alt="" /></div>
                            </div>
                        </li>
                        <li v-if="productbyid[4].productDetailsTitle">
                            <!-- 3、运维便捷，管理高效 -->
                            <div class="protexss clearfix">
                                <div class="prole">
                                    <h3>{{productbyid[4].productDetailsTitle}}</h3>
                                    <p>{{productbyid[4].productDetailsContent}}</p>

                                </div>
                                <div class="proimgs"><img :src="productbyid[4].productDetailsPicLink" alt="" /></div>
                            </div>
                        </li>
                        <li v-if="productbyid[5].productDetailsTitle">
                            <!--  -->
                            <div class="protexss clearfix">
                                <div class="prole">
                                    <h3>{{productbyid[5].productDetailsTitle}}</h3>
                                    <p>{{productbyid[5].productDetailsContent}}</p>
                                </div>
                                <div class="proimgs"><img :src="productbyid[5].productDetailsPicLink" alt="" /></div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="pro-info" id="parameter">
                    <div class="loadtitle">
                        <h3>{{productbyid[6].productDetailsType}}</h3>
                    </div>
                    <div class="pross"><img :src="productbyid[6].productDetailsPicLink" alt="" /></div>
                </div>
                <div class="pro-info" id="case">
                    <div class="loadtitle">
                        <h3>{{productbyid[7].productDetailsType}}</h3>
                    </div>
                    <div class="pross"><img :src="productbyid[7].productDetailsPicLink" alt="" /></div>
                </div>
            </div>
            <div class="prevpage wrapper">
                <div class="words clearfix"><span>关键词：</span><a href="#">返回上一页</a></div>
                <div class="prebnext">
                    <div class="preinfo"><a href="./#/LED">上一篇：便携式应急灯</a></div>
                    <div class="preinfo"><a href="./#/KT100">下一篇：RST-KT100工业路由器</a></div>
                </div>
            </div>

        </div>



    </div>




</template>

<script>
    import onlineQQ from "../components/onlineQQ"
    import Chat from "../components/Chat"
    export default {
        name: "productbyid",

        data() {
            return {
                productbyid: [],
                productImg: []
            }
        },

        components: {
            onlineQQ,
            Chat
        },
        created() {
            // => 请求数据
            this.request_productbyid();
            this.request_productImg();


        },
        methods: {
            // **************************--硬件产品---详情数据******************************
            request_productbyid() {
                let id = this.$route.query.id;
                this.$axios
                    .get("/productDetails/getProductDetails", {
                        params: {
                            id: id
                        }
                    })
                    .then(productbyid => {
                        this.productbyid = productbyid.data.data;

                    })

            },
            // **************************--硬件产品---详情数据---图片******************************
            request_productImg() {
                let id = this.$route.query.id;
                this.$axios
                    .get("/index/getById", {
                        params: {
                            id: id
                        }
                    })
                    .then(productImg => {
                        this.productImg = productImg.data.data;
                    })

            },
        }
    }
</script>

<style lang="less" scope>
    #productbyid {
        width: 68%;
        padding-top: 71px;
        margin: 0 auto;

        .view-box {
            background: url(../../public/images/view.jpg) repeat-x;

            .positewr {

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
                padding-left: 50px;
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
                width: 321px;
                height: 211px;
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
    }
</style>
<template>
    <div id="footer">
        <a href="/" class="gohome"><img src="../../public/images/flogo.png" alt=""></a>
        <div class="footer-list">
            <ul>
                <li class="list-first">
                    <router-link to="/product" @click="changeColor()">硬件产品</router-link>
                    <ul class="list-second">
                        <li>
                            <router-link to="/productbyid?id=14">1100型路由器</router-link>
                        </li>
                        <li>
                            <router-link to="/productbyid?id=15">KT100型路由器</router-link>
                        </li>
                        <li>
                            <router-link to="/productbyid?id=16">室内CPE</router-link>
                        </li>
                        <li>
                            <router-link to="/productbyid?id=17">便携式应急灯</router-link>
                        </li>
                    </ul>
                </li>
                <li class="list-first">
                    <router-link to="/solution" @click="changeColor()">解决方案</router-link>
                    <ul class="list-second">
                        <li>
                            <router-link to="/solution?id=pipe">数字管廊解决方案</router-link>
                        </li>
                        <li>
                            <router-link to="/solution?id=witGas">智慧燃气解决方案</router-link>
                        </li>
                        <li>
                            <router-link to="/solution?id=personnelLocation">人员定位系统</router-link>
                        </li>
                        <li>
                            <router-link to="/solution?id=witPolling">智能巡检系统</router-link>
                        </li>
                    </ul>
                </li>

                <li class="list-first">
                    <router-link to="/about">关于我们</router-link>
                    <ul class="list-second">
                        <li>
                            <router-link to="/about?id=aboutIntro">公司简介</router-link>
                        </li>
                        <li>
                            <router-link to="/about?id=aboutIntro">企业文化</router-link>
                        </li>
                        <li>
                            <router-link to="/about?id=aboutVideo">公司视频</router-link>
                        </li>
                        <li>
                            <router-link to="/about?id=aboutAptitude">企业荣誉</router-link>
                        </li>

                    </ul>
                </li>
            </ul>
            <div class="footer-serve">
                <img src="../../public/images/footer_wx.png" alt="">
                <p>服务热线</p>
                <h3>028-84175896</h3>
            </div>
        </div>
        <div class="hr"></div>
        <div class="editers">
            <span>版权所有@2019成都蓉视通科技有限公司ICP备案号：蜀ICP备14001156</span>
            <span>网站建设：蓉视通科技</span>
            <span>川公网安备51019002000560号</span>
        </div>

    </div>
</template>


<script>
    export default {
        name: "Footer",
        data() {
            return {

            };
        },
        methods: {
            changeColor() {
                document.bgColor = "orange"
            }

        }
    };
</script>



<style lang="less" scope>
    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    #footer {

        .gohome {
            float: left;
            margin-right: 2%;
            position: relative;
            left: 15%;
            top: 20%;

            img {
                width: 230px;
                height: 95px;
            }
        }

        .footer-list {
            position: relative;
            left: -16%;
        }

        width: 100%;
        height: 270px;
        background: #6388cf;
        margin-bottom: 0;

        .list-first {
            margin: 2.5% 2.5%;
            float: left;
            color: #ffffff;
            font-size: 14px;
            position: relative;
            left: 30%;
            border-left: 1px solid #ff7600;
            border-image: linear-gradient(#ff7600, #c0b0a1) 30 30;
            padding-left: 10px;

            & a:hover {
                color: #55a4f1;
                transition: 0.4s;
            }

            .list-second {
                li {
                    margin-top: 10px;

                    a {
                        color: #c7c7c7;

                        &:hover {
                            color: #ff7600;
                            transition: 0.4s;
                        }
                    }
                }



            }
        }

        a {
            color: #ffffff;
        }

        .hr {
            border-top: 1px dashed #d6a478;
            position: relative;
            top: 80%;
        }

        .editers {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 12px;
            color: #c7c7c7;

            span {
                padding-left: 30px;
            }

            span:last-child {
                margin-left: 25px;
                padding-left: 18px;
                background: url("../../public/images/jian.png") left center no-repeat;
            }
        }

        .footer-serve {
            float: left;
            position: relative;
            top: 45px;
            left: 32%;

            img {
                width: 152px;
                height: 152px;
            }

            p,
            h3 {
                text-align: left;
                padding-top: 5%;
                position: relative;
                left: 130%;
                color: #ffffff;
                top: -120px;
            }
        }
    }
</style>
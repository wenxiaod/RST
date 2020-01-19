<template>
    <div id="chat">
        <img class="onlineChat" @click="onlineChat()" src="../../public/images/onlineChat.png" alt="">
        <div v-if="chatSwitchStore">
            <div class="head">
                <img src="../../public/images/favicon.png" alt="">
                <p>成都蓉视通科技有限公司·在线咨询</p>
                <button @click="chatSwitch()">X</button>
            </div>
            <div id="box-container" class="contents" style="overflow-y:scroll;">
                <!-- 客服 -->
                
                
                <div class="infos">
                    <img src="../../public/images/chatClient.png" alt="">
                    <p>咨询师-小璐</p>
                    <p>{{t}}</p>
                </div>
                <div class="message">
                    <p>请问有什么可以帮您？</p>

                </div>

                <!-- 读取发送记录 -->
                <div v-for="(item,index) in sendMessageRecord" :key="index">
                <!-- 我的发送 -->
                <div v-if="infosClictStore" class="infosClict">
                    <img src="../../public/images/chatHead.png" alt="">
                    <p>{{nowTime}}</p>
                    <p>我</p>
                    </div>
                    <div class="messageClict" style="word-wrap:break-word;">
                        <p>{{item}}</p>
                    </div>

             <!-- 读取接收记录 -->
             <div v-for="(item,index) in txtMessageRe" :key="index">    
                     <div v-if="txtMessageReStore" class="infos">
                    <img src="../../public/images/chatClient.png" alt="">
                    <p>咨询师-小璐</p>
                    <p>{{t}}</p>
                </div>
                <div class="message">
                <p>{{item}}</p>
                </div>


                    
                </div>
            </div>
                 

          </div>
            <div class="foot">
                <input type="text" v-model="sendMessage" ref="inputValue" placeholder="请输入内容..." @keyup.enter="send()"
                    required>
                <el-button :plain="true" class="button" @click="send()" value="发送">发送</el-button>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Chat',
        data() {
            return {
                chatSwitchStore: false,
                sendMessage: '',
                sendMessageLocal: '',
                txtMessage: "",
                txtMessageReStore:false,
                txtMessageRe:[],
                path: 'ws://121.36.35.253:8080/websocket/',
                socket: '',
                t: "",
                nowTime:"",
                infosClictStore: false,
                sendMessageRecord: []
            }
        },
        mounted() {
            // 初始化
            this.init();
            
        },
        methods: {
            // onAdd() {
            //   this.messageClient=this.$refs.inputValue.value;
            //   this.$refs.inputValue.value="";          
            // },
            // 聊天框开关
            chatSwitch() {
                this.chatSwitchStore = !this.chatSwitch;

            },
            onlineChat() {
                this.chatSwitchStore = !this.chatSwitchStore;
                //判断当前浏览器是否支持WebSocket
                if (typeof (WebSocket) === 'undefined') {
                    alert('您的浏览器不支持socket')
                } else {
                    // 实例化socket
                    var t = new Date().toLocaleTimeString(); //当前时间
                    this.t = t;
                    this.socket = new WebSocket("ws://121.36.35.253:8080/websocket/" + this.t)
                    // 监听socket连接
                    this.socket.onopen = this.open
                    // 监听socket错误信息
                    this.socket.onerror = this.error
                    // 监听socket消息
                    this.socket.onmessage = this.getMessage
                }
            },
            init: function () {

            },
            send() {
                if (!this.sendMessage) {
                    this.$message({
                        message: '错误，请输入内容再点击发送！',
                        type: 'error',
                        offset: 350
                    })
                } else {
                    this.txtMessage=""
                    this.$refs.inputValue.value = "";
                    var msgs = '{"ip":"' + this.t + '","content":"' + this.sendMessage + '","state":"index"}';
                    this.$axios({
                        url: "http://121.36.35.253:8080/sms/communication", //后台url
                        params: {
                            msg: msgs,
                            ids: "rst"
                        },
                        // cache: false,
                        // async: false,
                        type: "GET", //类型，POST或者GET
                        dataType: 'json', //数据返回类型，可以是xml、json等
                        // dataType: 'JSONP',
                        success: function (msg) {
                            if (msg.code == 0) {
                                alert("发送成功")
                            } else {
                                alert("发送失败")

                            }
                        }
                    });
                    this.$message({
                        message: '信息发送成功，请耐心等待回复！',
                        type: 'success',
                        offset: 350,

                    });
                    this.infosClictStore = true;
                    this.sendMessageLocal = this.sendMessage;
                    this.sendMessageRecord.push(this.sendMessage);
                    this.sendMessage = '';
                    var nowTime = new Date().toLocaleTimeString(); //当前时间
                    this.nowTime = nowTime;
                    // var item = {'time':nowTime};
                    // this.nowTime.push(nowTime);

                    

                }
            },
            open: function () {
                console.log('socket连接成功')
            },
            error: function () {
                console.log('连接错误')
            },
            getMessage: function (msg) {
            this.txtMessageReStore = true;
            this.txtMessage = msg.data;
            this.txtMessageRe.push(this.txtMessage);
            console.log(msg.data)
            
            },

            close: function () {
                console.log('socket已经关闭')
            }
        },
        destroyed() {
            // 销毁监听
            this.socket.onclose = this.close;
        }
    }
</script>

<style lang="less" scope>
    #chat {
        width: 360px;
        height: 470px;
        z-index: 99;
        position: fixed;
        right: 0;
        top: 40%;

        .onlineChat {
            position: fixed;
            right: 0;
            top: 28%;
            z-index: 1;
            cursor: pointer;
        }

        .head {
            width: 100%;
            height: 60px;
            background: #b8b5b5;
            display: flex;
            align-items: center;

            img {
                width: 32px;
                height: 32px;
                margin-left: 2%;
            }

            p {
                margin-left: 2%;
            }

            button {
                width: 20px;
                height: 20px;
                margin-left: 10%;
                background: #f08605;
            }

        }

        .contents {
            width: 100%;
            height: 300px;
            background: rgb(245, 245, 228);

            //    客服
            .infos {
                display: flex;
                align-items: center;
                font-size: 12px;
                padding-top: 8px;

                img {
                    position: relative;
                    top: 5px;
                    left: 15px;
                }

                p {
                    margin-left: 6%;
                }
            }

            .message {
                margin: 0 auto;
                width: 68%;
                border-radius: 5px;

                p {
                    background: #bde1f1;
                    text-align: center;
                }
            }

            //    客户
            .infosClict {
                display: flex;
                align-items: center;
                font-size: 12px;
                // padding-top: 45px;

                img {
                    position: relative;
                    top: 5px;
                    left: 88%;
                }

                p {
                        margin-right: 5%;
    position: relative;
    left: 44%;
                }
            }

            .messageClict {
                margin: 0 auto;
                width: 68%;
                border-radius: 5px;
                text-align: left;


                p {
                    background: #bde1f1;
    text-align: center;
    font-size: 16px;
    width: 244.8px;
                }
            }
        }

        .foot {
            width: 100%;
            height: 110px;
            background: #b5ceeb;

            input {
                width: 98%;
                height: 55%;
                margin-left: 1.5px;
                margin-top: 1.5px;
                font-size: 18px;
            }

            .button {

                height: 35px;
                font-size: 16px;
                color: #f08605;
                position: relative;
                left: 75%;
                top: -15%;
                transition: 0.48s;

                &:hover {
                    color: #ffffff;
                    background: #f08605;
                }
            }

        }
    }
</style>
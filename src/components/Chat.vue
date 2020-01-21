<template>
  <div id="chat">
    <img class="onlineChat" @click="onlineChat()" src="../../public/images/onlineChat.png" alt />
    <transition name="slideToLeft">
      <div v-if="chatSwitchStore" class="container">
        <header class="chat-header">
          <!-- <i class="iconfont icon-zhinenghuagongcheng" @click="$router.push({path: '/AI'})"></i> -->
          <div class="head">
            <img src="../../public/images/favicon.png" alt />
            <p>成都蓉视通科技有限公司·在线咨询</p>
            <button @click="chatSwitch()">X</button>
          </div>
          <!-- <i class="iconfont icon-logout" @click="$router.push('/')"></i> -->
        </header>
        <div class="chat-content" ref="chatContent">
          <ul class="message-list">
            <li
              class="clearfix"
              v-for="(msg,i) of messages"
              :key="i"
              :class="{'others': msg.from !== 'other', 'mine': msg.from === 'mine'}"
            >
            <!-- 时间 -->
              <p class="date">{{ msg.date }}</p>
              <p class="info">
                <span class="portrait">
                  <img style="position: relative;top: 30%;" src="../../public/images/chatHead.png" />
                </span>
                <!-- <span class="nickname">{{ msg.nickname }}</span>
                <span class="location" v-if="msg.location">{{ `[${msg.location}]` }}</span>-->
              </p>

              <p class="content" style="word-wrap:break-word;">{{ msg.content }}</p>
            </li>
          </ul>
        </div>
        <footer class="chat-footer">
          <i
            class="iconfont icon-smile emojiBtn"
            :class="{'clickable': isShowEmoji}"
            @click="isShowEmoji = !isShowEmoji"
          ></i>
          <input
            ref="inputBox"
            v-model="inputText"
            
            @keyup.enter="send()"
            @focus="hideEmoji"
            placeholder="请输入内容..."
            autofocus
            required
          />
          <!-- <i class="sendBtn iconfont icon-icon_send_fill"
           :class="{'clickable': clickable}"
           @click="sendMsg"
          ></i>-->
          <el-button
            :plain="true"
            :class="{'clickable': clickable}"
            class="button"
            @click="send()"
            value="发送"
          >发送</el-button>
        </footer>
        <!-- 表情 -->
        <transition name="showEmoji">
          <div class="emoji-wrap" v-show="isShowEmoji">
            <ul class="emoji-list">
              <li v-for="(item,i) of emoji" :key="i" @click="inputEmoji(item)">{{ item }}</li>
            </ul>
          </div>
        </transition>
        <transition name="showTip">
          <div class="top-tip" v-show="isShowTip">
            <span class="tip-text">{{ onlineTip }}</span>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
import io from 'socket.io-client';

// 建立socket.io通信
const socket = io.connect('http://121.36.35.253:8080/websocket/kehu')
export default {
  name: "Chat",
  data() {
    return {
      chatSwitchStore: false,
      t: "",
      messages: [],
      inputText: "",
      nickname: "",
      portrait: "",
      location: "",
      isShowEmoji: false,
      onlineTip: "",
      isShowTip: false,
      emoji: [
        "😃",
        "😁",
        "😂",
        "😧",
        "😃",
        "😄",
        "😅",
        "😆",
        "😉",
        "😊",
        "😋",
        "😎",
        "😍",
        "😘",
        "😙",
        "😚",
        "🙂",
        "🤗",
        "😭",
        "🤔",
        "😳",
        "😐",
        "😑",
        "😶",
        "🙄",
        "😏",
        "😣",
        "😥",
        "😮",
        "🤐",
        "😯",
        "😪",
        "😫",
        "😴",
        "😌",
        "😛",
        "😟",
        "😝",
        "😒",
        "😓",
        "😔",
        "😕",
        "🙃",
        "🤑",
        "😲",
        "🙁",
        "😖",
        "😞",
        "😟",
        "😤",
        "😢",
        "😦"
      ]
    };
  },
  mounted() {
    // 初始化
    this.init();
     socket.on('receiveMsg', data => {
      this.messages.push(data)
    })
  },
  created(){
 if (localStorage.record_chat) {
      this.messages = JSON.parse(localStorage.record_chat)
    }
  },
  activated() {
    this.$nextTick(() => {
      this.$refs.chatContent.scrollTop = this.$refs.chatContent.scrollHeight
    })
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
      // 判断当前浏览器是否支持WebSocket
      if (typeof WebSocket === "undefined") {
        alert("您的浏览器不支持socket");
      } else {
        // 实例化socket
        var t = new Date().toLocaleTimeString(); //当前时间
        this.t = t;
        this.socket = new WebSocket(
          "ws://121.36.35.253:8080/websocket/" + this.t
        );
        // 监听socket连接
        this.socket.onopen = this.open;
        // 监听socket错误信息
        this.socket.onerror = this.error;
        // 监听socket消息
        this.socket.onmessage = this.getMessage;
      }
    },
    init: function() {},
    // 添加表情
     inputEmoji(emoji) {
      this.inputText += emoji
    },
    showTip() {
      this.isShowTip = true
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.isShowTip = false
      }, 1500)
    },

    hideEmoji() {
      this.isShowEmoji = false
    },
    // 发送信息
    send() {
      // debugger
      if (!this.inputText) {
        this.$message({
          message: "错误，请输入内容再点击发送！",
          type: "error",
          offset: 350
        });
      }
      else {
        this.$refs.inputBox.value = "";
        var msgs ='{"ip":"' + this.t + '","content":"' +  this.inputText + '","state":"index"}';
        this.$axios({
          url: "http://121.36.35.253:8080/sms/communication", //后台url
          params: {
            msg: msgs,
            ids: "rst"
          },
          type: "GET", //类型，POST或者GET
          dataType: "json", //数据返回类型，可以是xml、json等
          success: function(msg) {
            if (msg.code == 0) {
              alert("发送成功");
            } else {
              alert("发送失败");
            }
          }
        });
        this.$message({
          message: "信息发送成功，请耐心等待回复！",
          type: "success",
          offset: 350
        });

      socket.emit('sendMsg', {
        from: 'other',
        date: this.getTime(),
        nickname: this.nickname,
        portrait: this.portrait,
        location: this.location,
        content: this.inputText
      })
      this.pushMine()
      this.inputText = ''
      this.isShowEmoji = false
      this.$refs.inputBox.blur()
      }
    },
      pushMine() {
      this.messages.push({
        from: 'mine',
        date: this.getTime(),
        nickname: this.nickname,
        portrait: this.portrait,
        location: this.location,
        content: this.inputText
      })
    },
    
     getTime() {
      return this.moment().format('YYYY-MM-DD HH:mm:ss')
    },

    fixedBottom() {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.$refs.chatContent.scrollTop = this.$refs.chatContent.scrollHeight
      }, 20)
    },
    open: function() {
      console.log("socket连接成功");
    },
    error: function() {
      console.log("连接错误");
    },
    getMessage: function(msg) {
      this.txtMessageReStore = true;
      this.txtMessage = msg.data;
      this.messages.push(msg.data);
      console.log(this.messages);
    },

    close: function() {
      console.log("socket已经关闭");
    }
  },
  destroyed() {
    // 销毁监听
    this.socket.onclose = this.close;
  },
    watch: {
    messages: {
      handler() {
        localStorage.record_chat = JSON.stringify(this.messages)
        this.fixedBottom()
      },
      deep: true
    }
  }
};
</script>

<style lang="scss" scope>
// public
$main-blue: #9ed1da;
$main-yellow: #e6caa9;
$light-blue: #96bcff;

.clearfix::after {
  display: block;
  visibility: hidden;
  clear: both;
  height: 0;
  line-height: 0;
  content: "";
}

.container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #eee;
}

.submitBtn.clickable {
  background-color: $main-blue;
}

.emojiBtn,
.sendBtn {
  &.clickable {
    color: $main-blue;
  }
}

//--------------------------切换动画--------------------------
.slideToBottom-enter-active,
.slideToLeft-enter-active,
.slideToRight-enter-active {
  transition: all 0.5s;
}

//从顶部滑向底部
.slideToBottom-enter {
  transform: translateY(-100%);
  opacity: 0;
}

// 从右边滑向左边
.slideToLeft-enter {
  transform: translateX(20rem);
  opacity: 0;
}

// 从左边滑向右边
.slideToRight-enter {
  transform: translateX(-20rem);
  opacity: 0;
}

// chat
.container {
  display: flex;
  flex-direction: column;

  .chat-header {
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    color: #fff;
    .iconfont {
      font-size: 2.2rem;
    }
  }

  .chat-content {
    flex: 1;
    overflow: auto;

    .message-list {
      & > li {
        padding: 0.5rem;
      }

      li.mine {
        .info {
          flex-direction: row-reverse;
        }

        .content {
          float: right;
          color: #fff;
          background-color: $main-blue;
          left: -8%;
        }
      }

      li.others {
        .content {
          background-color: $main-yellow;
        }
      }

      .date {
        font-size: 12px;
        color: gray;
        text-align: center;
      }

      .info {
        display: flex;
        align-items: center;

        .nickname {
          margin: 0 0.4rem;
          color: #333;
        }

        .location {
          font-size: 1rem;
        }

        .portrait {
          // display: inline-block;
          // width: 3.2rem;
          // height: 3.2rem;

          & > img {
            max-width: 100%;
          }
        }
      }

      .content {
        max-width: 70%;
        max-height: 250px;
        padding: 0.5rem 1rem;
        border-radius: 10px;
      }
    }
  }

  .chat-footer {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
    box-shadow: 0 0 10px #ddd;
    height: 65px;
    background: #ded9d9;

    input {
      flex: 1;
      font-size: 16px;
      border: none;
      border-bottom: 1px solid $main-blue;
      outline: none;
      background-color: #eee;
      height: 35px;
      position: relative;
      top: 21%;
      left: -3%;
    }

    i {
      margin: 0 0.6rem 0;
      font-size: 2.4rem;
      transition: color 0.1s;
      width: 35px;
      height: 35px;
      background: url("../../public/images/fav.png") no-repeat;
      z-index: 999;
      position: relative;
      left: -1%;
      top: 20%;
    }
  }

  .emoji-wrap {
    height: 16rem;
    overflow: auto;

    .emoji-list {
      & > li {
        float: left;
        width: 12.5%;
        padding: 0.5rem 0;
        font-size: 2.4rem;
        text-align: center;
      }
    }

    &.showEmoji-enter-active {
      transition: all 0.3s;
    }

    &.showEmoji-enter,
    &.showEmoji-leave-to {
      transform: translate(0, 100%);
    }
  }

  .top-tip {
    position: absolute;
    top: 4rem;
    width: 100%;
    font-size: 1.4rem;
    line-height: 2rem;
    text-align: center;
    color: #fff;
    background-color: $light-blue;

    &.showTip-enter-active,
    &.showTip-leave-active {
      transition: all 0.5s;
    }

    &.showTip-enter,
    &.showTip-leave-to {
      transform: translate3d(0, -100%, 0);
      opacity: 0;
    }
  }
}
#chat {
  position: fixed;
  z-index: 999;
  left: 80%;
  top: 45%;
  width: 360px;
  height: 500px;
  .onlineChat {
    position: fixed;
    right: 0;
    top: 28%;
    z-index: 1;
    cursor: pointer;
  }
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
    font-size: 15px;
  }

  button {
    width: 20px;
    height: 20px;
    margin-left: 10%;
    background: #f08605;
  }
}
// 发送按钮
.button {
  height: 35px;
  font-size: 16px;
  color: #f08605;
  position: relative;
  padding: 6px 20px;
  top: 20%;
  left: -2.5%;
  transition: 0.48s;

  &:hover {
    color: #ffffff;
    background: #f08605;
  }
}
</style>

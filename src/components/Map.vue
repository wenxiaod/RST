<template>
    <div id="app">
        <div id="allmap" ref="allmap"></div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: 'App',
        methods: {
            map() {
                let sContent = "<h4 style='margin:0 0 5px 0;padding:0.2em 0'>环球中心</h4>" +
                    "<img style='float:right;margin:4px' id='imgDemo' src='https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3858333018,2878074381&fm=26&gp=0.jpg' width='139' height='104' title='环球中心'/>" +
                    "<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>新世纪环球中心是四川省、成都市两级政府确定的打造世界现代田园城市的重大项目，主体建筑以“流动的旋律”为设计理念，为世界第一大单体建筑之一。</p>" +
                    "<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>成都新世纪环球中心位于成都武侯区天府大道北段1700号，在绕城高速路内侧紧邻公路边，地处成都市中心向南发展的核心区域内。新世纪环球中心占地面积约1300亩，总建筑面积约176万平方米，主体平面尺寸约500米×400米，主体高度约100米，是由中央游艺区和四周酒店、商业、办公等部分组成的一个集游艺、展览、商务、传媒、购物、酒店于一体的多功能建筑。建成后成为成都市的娱乐天堂、购物天堂、休闲天堂和美食天堂。</p>" +
                    "</div>"
                let infoWindow = new window.BMap.InfoWindow(sContent); // 创建信息窗口对象
                let map = new window.BMap.Map(this.$refs.allmap) // 创建Map实例
                let point = new window.BMap.Point(104.067046, 30.572998); //红色提示点
                map.centerAndZoom(new window.BMap.Point(104.067046, 30.572998), 17); // 初始化地图,设置中心点坐标和地图级别
                let marker = new window.BMap.Marker(point);
                map.addOverlay(marker);
                // 默认打开信息框   
                // marker.openInfoWindow(infoWindow);

                marker.addEventListener("click", function () {
                    this.openInfoWindow(infoWindow);
                    //图片加载完毕重绘infowindow
                    document.getElementById('imgDemo').onload = function () {
                        infoWindow.redraw(); //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
                    }
                });

                map.addControl(new window.BMap.MapTypeControl({ // 添加地图类型控件
                    mapTypes: [
                        window.BMAP_NORMAL_MAP,
                        window.BMAP_HYBRID_MAP
                    ]
                }))
                map.setCurrentCity('成都') // 设置地图显示的城市 此项是必须设置的
                map.enableScrollWheelZoom(true) // 开启鼠标滚轮缩放

            }

        },
        mounted() {
            this.map()
        }
    }
</script>
<style lang="less" scope>
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;

    }

    #allmap {
        height: 780px;
        overflow: hidden;
    }
</style>
<template>
    <div class="dynamic">
        <vue-seamless-scroll :data='dynamicList' class="dynamic-warp">
            <div class="dynamic-list" v-for="item in dynamicList" :key="item.name">
                <div class="dynamic-list-left">
                    <img :src="item.img || require('@/assets/image/'+'colleague01.jpg')" />
                </div>
                <div class="dynamic-list-right">
                    <p class="dynamic-list-right-top">
                        <span><el-button type="primary" plain size="mini" @click="popWeChat(item.name)">{{item.name}}</el-button></span>
                        <span>{{item.type}}</span>
                        <span>{{item.msg}}</span>
                    </p>
                    <p class="dynamic-list-right-bottom">
                        {{item.time}}
                    </p>
                </div>
            </div>
        </vue-seamless-scroll>
    </div>
</template>

<script>
export default {
    name:"DynamicBox",
    data(){
        return {
            dynamicList:[
                {
                    name: '陈程',
                    type: '程序开发',
                    msg: '我可以提供前端开发，有意向请联系138XXXXXXX',
                    time: '11-10 10:12'
                },
                {
                    name: '李珊珊',
                    type: '内容营销',
                    msg: '我从事内容营销8年经验，看了您的需求，特此联系',
                    time: '11-10 10:12'
                },
                {
                    name: '王小鹏',
                    type: '直播达人',
                    msg: '我在直播间带货，有空可以来我的抖音账号：xxxxx',
                    time: '11-10 10:12'
                },
                {
                    name: '林之浩',
                    type: '程序开发',
                    msg: '我有全栈开发经验，并有需求和数据分析经验，用需要联系Vx:13389XXXXX',
                    time: '11-10 10:12'
                },
                {
                    name: '陈路',
                    type: '效果广告',
                    msg: '如果对于效果广告有兴趣，可以联系我，我深耕10年，目前有自己的工作室',
                    time: '11-10 10:12'
                },
                {
                    name: '张大智',
                    type: '出海营销',
                    msg: '我目前利用虾皮、亚马逊做出海项目，有需要联系',
                    time: '11-10 10:12'
                },
                {
                    name: '章帅',
                    type: '直播达人',
                    msg: '我是游戏主播，每日直播时间21：00，有兴趣来b站XXXXX直播间',
                    time: '11-10 10:12'
                }
            ]
        }
    },
    methods:{
        popWeChat(aa){
            alert('自动打开微信与'+aa+'联系')
        }
    }
}
</script>

<style scoped>
.dynamic{
    width: 100%;
    height: auto;
}
.dynamic-warp{
    height: 651px;
    overflow: hidden;
}
.dynamic-list{
    width: 100%;
    height: 93px;
    padding: 25px 0;
    border-bottom: 1px solid #dcdfe6;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
}
.dynamic-list:hover{
    background: #DBFEFB;
}
.dynamic-list-left,.dynamic-list-left img{
    width: 42px;
    height: 42px;
    border-radius: 21px;
    overflow: hidden;
    margin-right: 25px;
}
.dynamic-list-right{
    flex: 1;
    height: 42px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    
}
.dynamic-list-right .dynamic-list-right-top{
    font-size: 14px;
}
.dynamic-list-right-top span:nth-child(1){
    color: #3B3C3C;
    margin-right: 15px;
}
.dynamic-list-right-top span:nth-child(2){
    color: #7C7E81;
    margin-right: 5px;
}
.dynamic-list-right-top span:nth-child(3){
    color: #2E93FD;
}
.dynamic-list-right-bottom{
    color: #999999;
    font-size: 12px;
}
.dynamic-list-right-chater{
    border-color: #0D9AFF;
    color: #0D9AFF;
    background: #DEEFFB
}
</style>
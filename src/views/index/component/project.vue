<template>
    <el-row :gutter="10" class="project">
        <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8">
            <div class="project-list">
                <div class="project-list-left">
                    <svg-icon icon="email" class="project-list-left-icon" />
                </div>
                <div class="project-list-right">
                    <count-to :startVal='startVal' :endVal='47' :duration='3000'></count-to>
                    msg
                </div>
            </div>
        </el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8">
            <div class="project-list">
                <div class="project-list-left">
                    <svg-icon icon="sales" class="project-list-left-icon" />
                </div>
                <div class="project-list-right">
                    <count-to :startVal='startVal' :endVal='17' :duration='3000'></count-to>
                    msg
                </div>
            </div>
        </el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8">
            <div class="project-list">
                <div class="project-list-left">
                    <svg-icon icon="order" class="project-list-left-icon" />
                </div>
                <div class="project-list-right">
                    <count-to :startVal='startVal' :endVal='10' :duration='3000'></count-to>
                    pics
                </div>
            </div>
        </el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8">
            <div class="project-list">
                <div class="project-list-left">
                    <svg-icon icon="friend" class="project-list-left-icon" />
                </div>
                <div class="project-list-right">
                    <count-to :startVal='startVal' :endVal='11' :duration='3000'></count-to>
                    star
                </div>
            </div>
        </el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8">
            <div class="project-list">
                <div class="project-list-left">
                    <svg-icon icon="deal" class="project-list-left-icon" />
                </div>
                <div class="project-list-right">
                    <count-to :startVal='startVal' :endVal='7' :duration='3000'></count-to>
                    deal
                </div>
            </div>
        </el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8">
            <div class="project-list">
                <div class="project-list-left">
                    <svg-icon icon="feedback" class="project-list-left-icon" />
                </div>
                <div class="project-list-right">
                    <count-to :startVal='startVal' :endVal='3' :duration='3000'></count-to>
                    back
                </div>
            </div>
        </el-col>
    </el-row>
</template>

<script>
import countTo from 'vue-count-to';
export default {
    name:'ProjectBox',
    data(){
        return {
            startVal: 0,
            endVal: 10
        }
    },
    components:{
        countTo
    }
}
</script>

<style scoped>
.project{
    width: 100%;
    height: auto;
}
.project-list{
    width: 100%;
    height: 108px;
    border-radius: 5px;
    cursor: pointer;
    padding: 14px;
    box-sizing: border-box;
    background: url('~@/assets/image/vue.png');
    background-size: 100% 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
}
.project-list-left{
    padding: 16px;
    box-sizing: border-box;
    width: 80px;
    height: 80px;
    border-radius: 5px;
}
.project-list-left:hover{
    background: #E84D67;
}
.project-list-left:hover .project-list-left-icon{
    color: #ffffff;
}
.project-list-left-icon{
    width: 48px;
    height: 48px;
    fill: currentColor; 
    color: #ffffff;
    
}
.project-list-right{
    flex: 1;
    color: #EA4E68;
    font-weight: bolder;
    font-size: 30px;
    line-height: 80px;
    text-align: right;
    color: #ffffff;
}
</style>
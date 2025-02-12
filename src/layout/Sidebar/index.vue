<template>
  <div class="sidebar">
    <div class="sidebar-title"> {{title}}</div>
    <div class="sidebar-box">
      <el-menu
       router
        class="el-menu-vertical-demo"
        :collapse="!showSidebar"
        :class="showSidebar?'sidebar-menu':''"
        :default-active="$route.path"
        background-color="transparent"
        :text-color="variables.menuText"
        :unique-opened="true"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="true"
        mode="vertical"
      >
      <el-menu-item index="/index">
            <i class="el-icon-s-management"></i>
            <span slot="title">工作台</span>
          </el-menu-item>

          <el-submenu>
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>会员中心</span>
            </template>
            <el-menu-item index="/userinfo">会员信息</el-menu-item>
          </el-submenu>
          <el-menu-item index="/notice">
            <i class="el-icon-s-management"></i>
            <span slot="title">信息发布</span>
          </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  data(){
    return {
      title:'Digital Res'
    }
  },
  computed: {
    ...mapState("theme", ["showSidebar"]),
    variables() {
      return {
        menuText: "#ffffff", // "#bfcbd9"
        menuActiveText: "#ffffff",
      };
    },
  },
  mounted() {
    if(!this.showSidebar){
      this.title = ''
    }
  },
  watch:{
    showSidebar(v){
      if(v){
        setTimeout(()=>{
          this.title = 'Digital Res'
        },300)
      }else{
        this.title = ''
      }
    }
  },
};
</script>
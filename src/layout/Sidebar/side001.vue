<!--
 工作台：@/views/index/index.vue
会员中心：
   会员信息：@/modules/home/index.vue
内容管理：@/modules/system/index.vue
    信息发布: @/modules/system/notice/index.vue
-->
<template>
    <el-row>
      <el-col>
        <el-menu
          router
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          background-color="#E9EEF3"
          text-color="black">

          <el-menu-item index="/daohang1">
            <i class="el-icon-s-management"></i>
            <span slot="title">工作台</span>
          </el-menu-item>

          <el-submenu>
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>会员中心</span>
            </template>
            <el-menu-item index="/memberinfo">会员信息</el-menu-item>
          </el-submenu>
          <el-menu-item index="/notice">
            <i class="el-icon-s-management"></i>
            <span slot="title">信息发布</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </template>
  
  <script>
  export default {
    name: 'SidebarItem'
  }
  </script>
  
  <style>
  .el-menu-vertical-demo {
    height: 700px
  }
  </style>
  
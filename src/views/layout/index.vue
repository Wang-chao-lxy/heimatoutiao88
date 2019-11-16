<template>
  <!-- 外层容器 -->
  <el-container>
    <!-- 左侧 -->
    <el-aside style="width:220px;overflow:hidden" class="left">
      <div class="menu-title">
        <img src="../../assets/img/logo_admin.png" alt="">
      </div>
      <!-- 左侧菜单 -->
      <el-menu background-color="#323745" text-color="#adafb5" active-text-color="#ffd04b" style="width:220px" router>
        <!-- 一级菜单 -->
        <el-menu-item index='/home'>首页</el-menu-item>
        <!-- 二级菜单 -->
        <el-submenu index='1'>
          <template slot="title">内容管理</template>
          <el-menu-item index='/push'>发布文章</el-menu-item>
          <el-menu-item index = '/content'>内容列表</el-menu-item>
          <el-menu-item index='/comment'>评论列表</el-menu-item>
          <el-menu-item index="/material">素材列表</el-menu-item>
        </el-submenu>
        <!-- 二级菜单 -->
        <el-submenu index='2'>
          <template slot="title" >粉丝管理</template>
          <el-menu-item>图文数据</el-menu-item>
          <el-menu-item>粉丝概况</el-menu-item>
          <el-menu-item>粉丝画像</el-menu-item>
          <el-menu-item>素材管理</el-menu-item>
        </el-submenu>
        <!-- 一级菜单 -->
        <el-menu-item>账户信息</el-menu-item>
      </el-menu>
    </el-aside>
    <!-- 右侧 -->
    <el-container>
      <!-- 顶栏容器 -->
      <el-header><Header></Header></el-header>
      <!-- 主要区域容器 -->
      <router-view></router-view>
    </el-container>
  </el-container>
</template>

<script>
import Header from '../../components/header'
export default {
  components: {
    Header: Header
  }
}
</script>
<style lang="less" scoped>
.left{
  height: 100vh;
  background-color: #323745;
  .menu-title{
  background-color: #2e2f32;
  padding: 20px 0;
  text-align: center;
  img{
    height: 30px;
  }
}
}

</style>

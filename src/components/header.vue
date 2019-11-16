<template>
  <el-row type='flex' justify='space-between'>
      <el-col :span='6' class="left">
          <i class="el-icon-s-fold"></i>
          <span>江苏传智播客教育机构有限公司</span>
      </el-col>
      <el-col :span='3' class="right">
          <img src="../../src/assets/img/avatar.jpg" alt="">
          <el-dropdown trigger='click'>
      <span>
        无非小众<i class="el-icon-arrow-down"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
        <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-check" @click.native="onlogout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
      </el-col>
  </el-row>
</template>

<script>
export default {
  methods: {
    onlogout () {
      // 这里使用MessageBox 弹框 组件
      this.$confirm('您确定要退出登录吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 点击确定后删除token并编程式导航到登录页
        window.localStorage.removeItem('user-token')
        this.$router.push('/login')
        this.$message({
          type: 'success',
          message: '退出成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消退出'
        })
      })
    }
  }

}
</script>

<style lang="less" scoped>
.left{

    display: flex;
    align-items: center;
    i{
        font-size: 30px;
    };
    span{
        font-size: 18px;
        margin-left: 10px;
    };

}
.right{
display: flex;
align-items: center;

        img{
            border-radius: 50%;
            margin-right: 10px;
        }

}
</style>

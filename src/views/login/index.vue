<template>
<div class="login">
<el-card class="login-car" style="width:440px;height:360px">
  <div class="title">
      <img src="../../assets/img/logo_index.png" alt="">
  </div>
  <!-- 表单容器 -->
  <el-form>
      <!-- 表单域 -->
      <el-form-item>
          <!-- 输入框 -->
          <el-input></el-input>
      </el-form-item>
      <!-- 表单域 -->
       <el-form-item>
           <!-- 输入框 -->
          <el-input style="width:250px"></el-input>
          <!-- 验证码按钮 -->
          <el-button plain style="margin-left:23px;width:120px">验证码</el-button>
      </el-form-item>
        <!-- 表单域 -->
        <el-form-item>
           <!-- 复选框  -->
           <el-checkbox>已阅读条款并同意使用</el-checkbox>
        </el-form-item>
          <!-- 表单域 -->
          <el-form-item>
              <!-- 登录按钮 -->
              <el-button type="primary" style="width:100%">登录</el-button>
          </el-form-item>
  </el-form>
</el-card>
</div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.login{
background-image: url('../../assets/img/login_bg.jpg');
height: 100vh;
background-size:cover;
display: flex;
justify-content: center;
align-items: center;
.title{
    text-align: center;
    img{
        height: 45px;
    }
}
}
</style>

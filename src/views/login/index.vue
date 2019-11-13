<template>
<div class="login">
<el-card class="login-car" style="width:440px;height:360px">
  <div class="title">
      <img src="../../assets/img/logo_index.png" alt="">
  </div>
  <!-- 表单容器 -->
  <el-form :model='loginForm' :rules='loginRule' ref="formobj">
      <!-- 表单域 -->
      <el-form-item prop="mobile">
          <!--手机号 输入框 -->
          <el-input v-model="loginForm.mobile"></el-input>
      </el-form-item>
      <!-- 表单域 -->
       <el-form-item prop='code'>
           <!-- 验证码输入框 -->
          <el-input style="width:250px" v-model="loginForm.code"></el-input>
          <!-- 验证码按钮 -->
          <el-button plain style="margin-left:23px;width:120px">验证码</el-button>
      </el-form-item>
        <!-- 表单域 -->
        <el-form-item prop='agree'>
           <!-- 复选框  -->
           <el-checkbox  v-model="loginForm.agree">已阅读条款并同意使用</el-checkbox>
        </el-form-item>
          <!-- 表单域 -->
          <el-form-item>
              <!-- 登录按钮 -->
              <el-button type="primary" style="width:100%" @click="onLogin">登录</el-button>
          </el-form-item>
  </el-form>
</el-card>
</div>
</template>

<script>
export default {
  data () {
    let validator = function (rule, value, callBack) {
      // rule当前规则
      // value当前表单项的值
      // callback 回调函数
      // 正常写法
      if (value) {
        // 正确 勾选了协议
        callBack() // 一切OK请继续
      } else {
        // 不对 没勾选协议
        callBack(new Error('您必须同意无条件被我们蒙骗'))
      }
    //   value ? callBack() : callBack(new Error('您必须同意无条件被我们蒙骗')) // 炫技模式
    }
    return {
      loginForm: {
        mobile: '',
        code: '',
        agree: false
      },
      loginRule: {
        mobile: [{ required: true, message: '请输入您的手机号' },
          { pattern: /^1[3456789]\d{9}$/, message: '请输入合法的手机号' }],
        code: [{ required: true, message: '请输入您的验证码' },
          { pattern: /^\d{6}$/, message: '验证码为6位数字' }],
        agree: [{ validator }]
      }
    }
  },
  methods: {
    onLogin () {
      this.$refs.formobj.validate(function (isok) {
        if (isok) {
          // 表单数据校验成功，调axios接口
        }
      })
    }
  }

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

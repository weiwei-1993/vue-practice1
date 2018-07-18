<template>
  <div>
    <div class="common-head">
      <i class="back"></i>
      <p>{{title}}</p>
    </div>
    <div class="div-block"></div>
    <div class="login-logo">
      <img src="./../image/common/logo.png" alt="">
    </div>
    <div class="login">
      <div class="lable">
        <input type="text" v-model="name" placeholder="请输入账号">
      </div>
      <div class="lable">
        <input type="text" v-model="passward" placeholder="请输入密码">
      </div>
    </div>
    <div class="login-btn">
      <button @click="toLogin">登录</button>
    </div>
  </div>
</template>

<script>
import global from './global'
export default {
  name: 'login',
  data () {
    return {
      aa: global.aa,
      title: '登录',
      name: '',
      passward: ''
    }
  },
  methods: {
    toLogin: function () {
      const _this = this
      const data = {
        name: _this.name,
        password: _this.passward,
        captcha: '2133'
      }
      if (_this.name && _this.passward) {
        this.axios.post('login/login', data)
          .then(function (res) {
            if (res.code === 1) {
              sessionStorage.setItem('token', res.data.token)
              _this.$router.push('/Main/myaccountHome')
            } else if (res.code === 0) {
              alert(res.msg)
            }
          })
      }
    }
  },
  created: function () {
    const token = sessionStorage.getItem('token')
    if (token) {
      this.$router.push('/Main/myaccountHome')
    }
  }
}
</script>

<style lang="less" scoped>
  body,html{
    background: #fff;
  }
  .login-logo{
    background: #fff;
    text-align: center;
    padding-top: 1rem;
    img{
      width: 2rem;
    }
  }
  .login{
    padding: 1rem 1rem;
    background: #fff;
    .lable{
      display: flex;
      width: 100%;
      height: 1rem;
      border-bottom: 1px solid #f0f0f0;
      input{
        flex: 1;
        border: 0;
      }
    }
  }
  .login-btn{
    width: 100%;
    padding-top: 0.5rem;
    background: #fff;
    padding-bottom: 1rem;
    button{
      width: 60%;
      height: 0.8rem;
      line-height: 0.5rem;
      text-align: center;
      background: @blue;
      color: #fff;
      border-radius: 0.1rem;
      font-size: 0.3rem;
    }
  }
</style>

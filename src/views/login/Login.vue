<template>
  <div class="login">
    <div ref="vantaRef" style="width:100%;height:100vh"></div>
    <!-- 登录面板 -->
    <div class="login-box" @keyup.enter="submitForm">
      <div class="login-box-title">DigitalRes 用户登录</div>
      <div class="login-box-from">
        <el-form
          :model="loginForm"
          :rules="rules"
          ref="loginForm"
          class="demo-ruleForm"
        >
          <el-form-item prop="username">
            <el-input
              v-model="loginForm.username"
              placeholder="请输入用户名"
              size="medium"
            >
              <el-button slot="prepend" icon="el-icon-user" />
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              :type="!pwdShow ? 'password' : 'text'"
              v-model="loginForm.password"
              placeholder="请输入密码"
              size="medium"
            >
              <i
                slot="prepend"
                @click="pwdShow = !pwdShow"
                class="el-icon-key"
              />
            </el-input>
          </el-form-item>
          <el-form-item prop="code">
            <el-input
              type="text"
              clearable
              v-model.trim="loginForm.code"
              placeholder="验证码"
            >
              <template slot="append">
                <div
                  class="login-code"
                  v-html="loginForm.codeSvg"
                  @click="getCodeSvg"
                ></div>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              size="medium"
              :loading="loading"
              style="width: 100%"
              @click.native="submitForm"
              >立即登陆</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>


<script>
import { mapActions } from "vuex"
import * as THREE from 'three'
import Net from 'vanta/src/vanta.globe'

export default {
  data() {
    return {
      loading: false, //登陆状态
      pwdShow: false,
      loginForm: {
        // 登陆表单
        username: "",
        password: "",
        code: "",
        codeSvg: "",
        key: "",
      },

      rules: {
        //登陆验证规则
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 2,
            max: 18,
            message: "长度在 2 到 18 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 16,
            message: "长度在 6 到 16 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  mounted() {
    this.vantaEffect = Net({
      el: this.$refs.vantaRef,
      THREE: THREE
    })
  },
  beforeDestroy() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy()
    }

    // 以下是获取验证码
    this.getCodeSvg();
  },
  methods: {
    ...mapActions("user", ["login","getLoginCaptcha"]),
    submitForm() {
      this.$refs.loginForm.validate((valid) => {
        if (!valid) {
          return false;
        }
        this.loading = true;
        this.usrlogin();
      });
    },
    getCodeSvg() {
      this.getLoginCaptcha().then((res) => {
        this.loginForm.codeSvg = res.codeSvg || ""
        this.loginForm.key = res.key || ""
        this.loading = false
      })
    },
    usrlogin() {
      this.login(this.loginForm)
        .then((res) => {
          this.loading = true
          this.$router
            .push({
                path: this.$route.query.redirect || "/index",
            })
            .catch((err) => {})
          if (!res.data.userInfo.login_time) return false
          this.$notify({
            title: "欢迎回来",
            message: "上次登陆时间：" + res.data.userInfo.login_time,
            offset: 100,
          })
        })
        .catch((error) => {
          this.loading = false;
        })
    },
  },
}
</script>

<style lang="scss">
@use "@/assets/css/login.scss";
</style>

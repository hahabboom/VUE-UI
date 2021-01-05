<template>
  <div class="site-wrapper site-page--login">
    <div class="site-content__wrapper">
      <div class="site-content">
        <div class="brand-text animate__animated animate__fadeInUp animate__slower">
          综合气象观测业务运行信息化平台
        </div>
        <div class="login-main animate__animated animate__fadeIn animate__slower">
          <div class="login-title">登 录</div>
          <el-form :model="dataForm" :rules="dataRule" @keyup.enter.native="dataFormSubmit()" ref="dataForm"
                   status-icon>
            <el-form-item prop="userName">
              <el-input placeholder="帐号" v-model="dataForm.userName"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input placeholder="密码" type="password" v-model="dataForm.password"></el-input>
            </el-form-item>
            <el-form-item prop="captcha">
              <el-row :gutter="20">
                <el-col :span="14">
                  <el-input placeholder="验证码" v-model="dataForm.captcha">
                  </el-input>
                </el-col>
                <el-col :span="10" class="login-captcha">
                  <img :src="captchaPath" @click="getCaptcha()" alt="">
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item>
              <el-button @click="dataFormSubmit()" class="login-btn-submit" type="primary">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getUUID } from '@/utils'

export default {
  name: 'login',
  components: { },
  data () {
    return {
      dataForm: {
        userName: '',
        password: '',
        uuid: '',
        captcha: ''
      },
      dataRule: {
        userName: [
          {
            required: true,
            message: '帐号不能为空',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '密码不能为空',
            trigger: 'blur'
          }
        ],
        captcha: [
          {
            required: true,
            message: '验证码不能为空',
            trigger: 'blur'
          }
        ]
      },
      captchaPath: ''
    }
  },
  created () {
    this.getCaptcha()
  },
  methods: {
    // 提交表单
    dataFormSubmit () {
      // this.$refs.dataForm.validate((valid) => {
      //   if (valid) {
      //     this.$axios({
      //       url: '/sys/login',
      //       method: 'post',
      //       data: {
      //         username: this.dataForm.userName,
      //         password: this.dataForm.password,
      //         uuid: this.dataForm.uuid,
      //         captcha: this.dataForm.captcha
      //       }
      //     }).then(({ data }) => {
      //       if (data && data.code === 0) {
      //         this.$cookie.set('token', data.token)
      this.$router.replace({ name: 'Home' })
      //   } else {
      //     this.getCaptcha()
      //     this.$message.error(data.msg)
      //   }
      // })
    // }
    // })
    },
    // 获取验证码
    getCaptcha () {
      this.dataForm.uuid = getUUID()
      this.captchaPath = `http://222.18.149.206:80/captcha.jpg?uuid=${this.dataForm.uuid}`
    }
  }
}
</script>

<style lang="scss">
  .site-wrapper.site-page--login {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    &:before {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      content: "";
      background-image: url(~@/assets/img/login.png);
      background-size: cover;
    }

    .site-content__wrapper {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      padding: 0;
      margin: 0;
      overflow-x: hidden;
      overflow-y: auto;
      background: none;

      .site-content {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        height: 100%;

        .brand-text {
          font-size: 60px;
          font-family: 'hyk2gj', sans-serif;
          -webkit-box-reflect: below -0% -webkit-linear-gradient(rgba(195, 233, 255, 0), rgba(26, 160, 236, .4));
          letter-spacing: 10px;
          /* https://developer.mozilla.org/zh-CN/docs/Web/CSS/linear-gradient */
          background: linear-gradient(to bottom, rgba(26, 160, 236, 1) 0%, rgba(195, 233, 255, 1) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .login-main {
          width: 430px;
          height: 360px;
          margin-top: 100px;
          padding: 0 45px;
          background-image: url(~@/assets/img/login_box.png);
          font-size: 24px;

          .login-title {
            margin: 35px 0 27px 0;
            text-align: center;
          }

          .el-input__inner {
            border: none;
            background: rgba(223, 250, 255, 0.2);
            box-shadow: 1px 1px 1px 1px rgba(1, 7, 15, 0.4);
          }

          .login-captcha {
            overflow: hidden;

            > img {
              width: 100%;
              cursor: pointer;
            }
          }

          .login-btn-submit {
            width: 100%;
          }
        }
      }
    }
  }
</style>

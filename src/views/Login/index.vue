<template>
  <div>
    <van-nav-bar title="账号登录" left-arrow @click-left="$router.back()" />
    <van-form @submit="onSubmit">
      <van-field
        v-model.trim="username"
        name="username"
        placeholder="请输入账号"
        :rules="[
          { required: true, message: '请输入账号' },
          {
            pattern: /^[a-zA-Z0-9_-]{4,16}$/,
            message: '输入正确的账号',
          },
        ]"
        class="wanshang"
        center
      />
      <van-field
        center
        v-model.trim="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="[
          { required: true, message: '请填写密码' },
          { pattern: /^\d+$/, message: '输入正确的密码' },
        ]"
      />
      <div style="margin: 16px">
        <van-button
          block
          type="info"
          native-type="submit"
          color="#1cb676"
          size="large"
          >登录</van-button
        >
      </div>
    </van-form>
    <a href="#/registe">还没有账号, 去注册~</a>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  created () { },
  data () {
    return {
      username: 'zhoujinhui',
      password: '123456'
    }
  },
  methods: {
    async onSubmit (values) {
      try {
        const res = await login(values)
        console.log(res)
        console.log(res.data.status)
        if (res.data.status !== 200) {
          return this.$toast.fail('账号或密码格式不对')
        } else {
          this.$store.commit('setUser', res.data.body.token)
          this.$toast.success('登录成功')
          this.$router.push({ name: 'my' })
        }
      } catch (error) {
        console.log(error)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang=less>
/deep/ .van-nav-bar__title {
  font-size: 18px !important;
}
.van-cell {
  height: 60px;
  margin-bottom: 5px;
}
.wanshang {
  margin-top: 25px;
}
/deep/ .van-field__control {
  font-size: 18px !important;
}
a {
  display: block;
  font-size: 14px;
  text-align: center;
  margin-top: 25px;
  color: #666666;
}
</style>

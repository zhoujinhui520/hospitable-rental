<template>
  <div>
    <van-nav-bar title="账号登录" left-arrow />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        placeholder="请输入账号"
        :rules="[{ required: true}]"
        class="wanshang"
        center
      />
      <van-field
        center
        v-model="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="[{ required: true}]"
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
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {
      username: 'heima',
      password: '123456'
    }
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
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
  font-size: 35px !important;
}
.van-cell {
  height: 120px;
  margin-bottom: 10px;
}
.wanshang {
  margin-top: 50px;
}
/deep/ .van-field__control {
  font-size: 35px !important;
}
</style>

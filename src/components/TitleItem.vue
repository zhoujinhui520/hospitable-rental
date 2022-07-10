<template>
  <!-- 标题栏 -->
  <van-nav-bar :title="title" left-arrow @click-left="$router.back()">
  </van-nav-bar>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true

    }
  },
  created () { },
  data () {
    return {}
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
/deep/.van-nav-bar__title {
  font-size: 18px;
}
</style>

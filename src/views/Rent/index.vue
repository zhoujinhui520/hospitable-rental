<template>
  <div>
    <TitleItem title="发布房源"></TitleItem>
    <van-cell-group>
      <van-cell title="房源信息" />
      <van-cell title="小区名称" is-link value="请输入小区名称" to="/login" />
      <van-field v-model="value" :label="msg" placeholder="请输入租金/月">
        <template #right-icon>
          <span>¥/月</span>
        </template>
      </van-field>
      <!-- 建筑面积 -->
      <van-field v-model="value" label="建筑面积" placeholder="请输入建筑面积">
        <template #right-icon>
          <span>m²</span>
        </template>
      </van-field>
      <van-cell
        title="小区名称"
        is-link
        value="123"
        v-model="value"
        placeholder="请输入用户名"
      ></van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import TitleItem from '@/components/TitleItem.vue'
export default {
  created () { },
  data () {
    return {
      msg: '租\xa0\xa0\xa0\xa0\xa0\xa0\xa0金',
      huxing: '请选择',
      value: ''
    }
  },
  methods: {
    onConfirm (huxing) {
      this.huxing = huxing
      this.showPicker = false
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: { TitleItem }
}
</script>

<style scoped>
</style>

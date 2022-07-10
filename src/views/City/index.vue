<template>
  <div>
    <TitleItem title="城市列表"></TitleItem>
    <van-index-bar v-for="(item, index) in mapList" :key="index">
      <van-index-anchor index="A"></van-index-anchor>
      <van-cell :title="item.label" />
    </van-index-bar>
  </div>
</template>

<script>
import TitleItem from '@/components/TitleItem.vue'
import { getMapList } from '@/api/map'
export default {
  name: 'city',
  created () {
    this.getList()
  },
  data () {
    return {
      mapList: []
    }
  },
  methods: {
    async getList () {
      try {
        const res = await getMapList(1)
        console.log(res)
        this.mapList = res.data.body
      } catch (error) {
        console.log(error)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: { TitleItem }
}
</script>

<style scoped lang='less'>
</style>

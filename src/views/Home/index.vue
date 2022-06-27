<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#333">
      <van-swipe-item
        ><img src="http://liufusong.top:8080/img/swiper/1.png" alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img src="http://liufusong.top:8080/img/swiper/2.png" alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img src="http://liufusong.top:8080/img/swiper/3.png" alt=""
      /></van-swipe-item>
    </van-swipe>
    <van-search
      v-model="value"
      show-action
      label="地址"
      background="transparent"
      placeholder="请输入搜索关键词"
    >
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>

    <van-grid clickable :column-num="4">
      <van-grid-item text="路由跳转" to="/" />
      <van-grid-item icon="home-o" text="路由跳转" to="/" />
      <van-grid-item icon="home-o" text="地图找房" to="/map" />
      <van-grid-item icon="search" text="去看房" to="/login" />
    </van-grid>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {
      value: ''
    }
  },
  methods: {
    onSearch () {

    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang=less>
.my-swipe .van-swipe-item {
  color: #000;
  width: 100%;
  text-align: center;
}
img {
  width: 100%;
}
.van-search {
  position: absolute;
  top: 20px;
  /* left: 70px; */
  width: 100%;
  /* transform: translate(-50%);  */
}
</style>

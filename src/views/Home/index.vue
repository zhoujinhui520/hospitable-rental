<template>
  <div>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#333">
      <van-swipe-item v-for="item in picture" :key="item.id"
        ><img :src="'http://liufusong.top:8080' + item.imgSrc" alt=""
      /></van-swipe-item>
    </van-swipe>
    <!-- 搜索栏 -->
    <van-search
      v-model="value"
      show-action
      background="transparent"
      placeholder="请输入搜索关键词"
    >
      <template #label>
        <span @click="$router.push({name:'city'})">北京</span>
        <van-icon name="arrow-down" />
      </template>
      <template #action>
        <van-icon name="location-o"  size="25"  color="#fff" @click="$router.push({name:'map'})"/>
      </template>
    </van-search>
    <!-- 列表 -->
    <van-grid clickable :column-num="4" :border="false" >
      <van-grid-item text="整租" to="/">
        <template #icon>
          <img src="@/assets/zhengzu.png" alt="" />
        </template>
      </van-grid-item>
      <van-grid-item text="合租" to="/">
        <template #icon>
          <img src="@/assets/hezu.png" alt="" />
        </template>
      </van-grid-item>
      <van-grid-item text="地图找房" to="/">
        <template #icon>
          <img src="@/assets/chuzu.png" alt="" />
        </template>
      </van-grid-item>
      <van-grid-item text="去出租" to="/rent">
        <template #icon>
          <img src="@/assets/zhaofang.png" alt="" />
        </template>
      </van-grid-item>
    </van-grid>
    <!-- 租房小组 -->
    <div class="group">
      <h3 class="group_title">
        租房小组
        <span class="more">更多</span>
      </h3>
      <van-row gutter="20" type="flex" justify="space-between">
        <van-col span="12" v-for="item in groupsList" :key="item.id">
          <van-image
            art="图片"
            width="50"
            height="50"
            :src="'http://liufusong.top:8080' + item.imgSrc"
          />
          <div class="right">
            <p>{{ item.title }}</p>
            <p>{{ item.desc }}</p>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import { getGroupsList, getSwiperPicture } from '@/api/home'
export default {
  name: 'home',
  created () {
    this.getPicture()
    this.getGroups()
  },
  data () {
    return {
      value: '',
      picture: [],
      groupsList: []
    }
  },
  methods: {
    async getPicture () {
      try {
        const res = await getSwiperPicture()
        console.log(res)
        this.picture = res.data.body
      } catch (error) {
        console.log(error)
      }
    },
    async getGroups () {
      try {
        const res = await getGroupsList()
        console.log(res)
        this.groupsList = res.data.body
      } catch (error) {
        console.log(error)
      }
    },
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
  width: 100%;
}
.van-grid-item {
  height: 122px;
  /* padding: 10px 0; */
  img {
    height: 60px;
    margin-top: -5px;
  }
}
/deep/.van-grid-item__text {
  margin-top: 15px;
  font-size: 14px;
  font-weight: 400;
  color: #333;
  overflow: hidden;
  padding: 0 10px;
}
.group {
  background-color: #f6f5f6;
  overflow: hidden;
  padding: 0 10px;
}
.group_title {
  position: relative;
  margin: 15px 0 15px 10px;
  font-size: 15px;
}
.more {
  color: #787d82;
  position: absolute;
  right: 0;
  font-size: 14px;
  font-weight: 400;
}
.van-col {
  display: flex;
  margin-bottom: 10px;
  background-color: #fff;
  width: 173px;
  height: 60px;
}
.van-image {
  margin: 0 10px;
}
p {
  font-size: 14px;
  color: #333;
}
.right {
  padding-top: 10px;
}
</style>

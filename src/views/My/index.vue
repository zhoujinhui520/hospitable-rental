<template>
  <div>
    <!-- 头像标题 登录后 -->
    <div class="myTitle" v-if="user">
      <img :src="'http://liufusong.top:8080' + userInfo.avatar"  />
      <div class="myInfo">
        <div class="myAvatar">
          <div class="myIcon">
            <img
              class="myAvatar"
              src="http://liufusong.top:8080/img/profile/avatar.png"
              alt="icon"
            />
          </div>
        </div>
        <div class="myUser">
          <div class="myName">{{ userInfo.nickname }}</div>
          <div class="myAuth">
            <van-button
              type="primary"
              size="mini"
              round
              @click="logout"
              v-if="user"
              >退出
            </van-button>
          </div>
          <div class="myEdit">
            编辑个人资料
            <van-icon name="arrow" />
          </div>
        </div>
      </div>
    </div>

    <!-- 头像标题 登录之前 -->
    <div class="myTitle" v-else>
      <img src="http://liufusong.top:8080/img/profile/bg.png" alt="" />
      <div class="myInfo">
        <div class="myAvatar">
          <div class="myIcon">
            <img
              class="myAvatar"
              src="http://liufusong.top:8080/img/profile/avatar.png"
              alt="icon"
            />
          </div>
        </div>
        <div class="myUser">
          <div class="myName">游客</div>
          <div class="myAuth">
            <van-button
              type="primary"
              size="small"
              color="#21b97a"
              @click="$router.push('/login')"
              >去登录
            </van-button>
          </div>
        </div>
      </div>
    </div>

    <!-- 我的个人资料 -->
    <van-grid :border="false" clickable :column-num="3">
      <van-grid-item icon="star-o" text="我的收藏" to="/" />
      <van-grid-item
        icon="wap-home-o"
        text="我的出租"
        url="/vant/mobile.html"
      />
      <van-grid-item icon="clock-o" text="看房记录" url="/vant/mobile.html" />
      <van-grid-item icon="idcard" text="成为房主" url="/vant/mobile.html" />
      <van-grid-item icon="contact" text="个人资料" url="/vant/mobile.html" />
      <van-grid-item icon="service-o" text="联系我们" url="/vant/mobile.html" />
    </van-grid>
    <!-- 广告区 -->
    <div class="myImg">
      <img src="http://liufusong.top:8080/img/profile/join.png" alt="" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getUserInfo, getUserLogoutInfo } from '@/api/user'
export default {
  name: 'my',
  async created () {
    if (this.user) {
      try {
        const res = await getUserInfo()
        console.log(res)
        this.userInfo = res.data.body
      } catch (error) {
        console.log(error)
      }
    }
  },
  data () {
    return {
      userInfo: {},
      userLogoutInfo: {}
    }
  },
  methods: {
    async logout () {
      await this.$dialog.confirm({ message: '确定要退出吗' })// 弹出窗
        .then(async () => {
          try {
            const res = await getUserLogoutInfo()
            console.log(res)
            this.$store.commit('setUser', null)// 把本地的token清空
          } catch (error) {
            console.log(error)
          }
        })
    }
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang=less>
.myTitle {
  min-height: 300px;
  position: relative;
  z-index: 1;
}
.myInfo {
  position: absolute;
  background: #fff;
  width: 85%;
  height: 55%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 10px 3px #ddd;
  margin: 50px auto 0;
  padding: 0 20px;
  text-align: center;
  font-size: 13px;
}
.myIcon {
  position: relative;
  transform: translateY(-50%);
  border-radius: 50%;
  width: 70px;
  height: 70px;
  border: 5px solid #f5f5f5;
  display: inline-block;
  box-shadow: 0 2px 2px #bdbdbd;
}
.myAvatar {
  width: 100%;
  border-radius: 50%;
}
.myUser {
  padding-top: 15px;
  display: block;
}
.myName {
  margin-top: -30px;
  margin-bottom: 10px;
}
.myAuth {
  margin-bottom: 20px;
}
.myEdit {
  color: #999;
  font-size: 12px;
  /* margin-top: 10px; */
}
.van-button {
  display: block;
  width: 60px;
  margin: 0 auto;
}
/deep/.van-grid-item__text {
  font-size: 13px;
  color: #333;
}
/deep/.van-icon {
  font-size: 20px;
}
/deep/.van-grid-item {
  height: 95px;
}
.myImg {
  margin-top: 10px;
  padding: 0 15px;
}
</style>

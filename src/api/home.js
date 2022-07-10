import http from '@/utils/http'

//! 获取首页轮播图
export const getSwiperPicture = (area) => {
  return http({
    url: '/home/swiper',
    params: {
      area
    }
  })
}
//! 获取租房小组数据
export const getGroupsList = () => {
  return http({
    url: '/home/groups'
  })
}

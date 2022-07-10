import http from '@/utils/http'

//! 获取城市列表数据
export const getMapList = (level) => {
  return http({
    url: '/area/city',
    params: {
      level
    }
  })
}

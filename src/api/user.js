import http from '@/utils/http'

//! 登录
export const login = ({ username, password }) => {
  return http({
    method: 'POST',
    url: '/user/login',
    data: {
      username, password
    }
  })
}

//! 获取用户登录后的个人资料
export const getUserInfo = () => {
  return http({
    url: '/user'
  })
}
//! 获取用户没登录的个人资料
export const getUserLogoutInfo = () => {
  return http({
    method: 'POST',
    url: '/user/logout'
  })
}

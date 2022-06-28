import http from '@/utils/http'
export const login = ({ username, password }) => {
  return http({
    method: 'POST',
    url: '/user/login',
    data: {
      username, password
    }
  })
}

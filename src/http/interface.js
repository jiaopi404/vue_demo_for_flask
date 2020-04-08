import axios from './api'
// const version = '/bc-api'

// oauth path
// export const oauthPath = () => {
//   return '/login'
// }

export const apiURL = () => {
  return 'http://127.0.0.1:5000/'
}

export const websocketURL = () => {
  // process.env.NODE_ENV === 'production' ?
  return 'ws://47.93.35.179:9101'
  // return 'ws://192.168.1.189:9101'
}

export const getIndexRes = () => {
  return axios({
    url: apiURL()
  })
}

// export const bcLogin = (params) => {
//   return axios({
//     url: `${version}/user/login`,
//     method: 'post',
//     data: params
//   })
// }

// const getUserInfo = () => {
//   return axios({
//     url: `${version}/user_manage/manager_info`,
//     method: 'get'
//   })
// }

export default {
  // oauthPath,
  // bcLogin,
  // getUserInfo,
  websocketURL,
  apiURL,
  getIndexRes
}

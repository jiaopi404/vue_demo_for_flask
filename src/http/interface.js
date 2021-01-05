import axios from './api'
// const version = '/bc-api'

// oauth path
// export const oauthPath = () => {
//   return '/login'
// }
// const version = '/express'

export const expressURL = () => {
  return 'http://122.51.19.128:8089'
}
export const localExpressURL = () => {
  return 'http://localhost:8089'
}

export const apiURL = () => {
  return 'http://127.0.0.1:5000'
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

export const login = (usrName, pwd) => {
  return axios({
    url: `${apiURL()}/login`,
    method: 'post',
    data: {
      usr_name: usrName,
      pwd: pwd
    }
  })
}

export const getAllUsr = () => {
  return axios({
    url: `${expressURL()}/api/usr/get-all`,
    // url: `${localExpressURL()}/api/usr/get-all`,
    // url: `${version}/api/usr/get-all`,
    method: 'get'
    // params: { id: 222, name: '2332' }
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
export const getGoods = spuId => {
  return axios({
    url: `/api-v1/spu/goods/${spuId}`,
    method: 'get'
  })
}

export default {
  // oauthPath,
  // bcLogin,
  // getUserInfo,
  websocketURL,
  apiURL,
  getIndexRes,
  login,
  getAllUsr,
  getGoods
}

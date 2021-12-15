import axios from "axios";
import router from "../router";

const requestAxios = axios.create({
  baseURL: process.env.VUE_APP_FB_URL
})

requestAxios.interceptors.response.use(null, err => {
  if(err.response.status === 401) {
    router.push('/auth?message=auth')
  }
  return Promise.reject(err)
})
export default requestAxios

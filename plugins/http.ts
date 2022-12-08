import { defineNuxtPlugin } from '@nuxtjs/composition-api'
import { AxiosResponse, AxiosRequestConfig } from 'axios'

export default defineNuxtPlugin(({ $axios, redirect, error, store }) => {
  $axios.defaults.timeout = 1000

  $axios.onRequest((config: AxiosRequestConfig) => {
    config.headers.token = store.state.user.token
    return config
  })

  $axios.onError(() => {
    redirect('/error')
  })

  // response拦截器，数据返回后，你可以先在这里进行一个简单的判断
  $axios.interceptors.response.use((response: AxiosResponse<any>) => {
    const res = response
    if (res.status === 200) {
      return Promise.resolve(res)
    } else {
      return Promise.reject(res)
    }
  },
  (e: any) => {
    const { status, data } = e.response
    error({ statusCode: status, message: data })
    return Promise.reject(e)
  })
})

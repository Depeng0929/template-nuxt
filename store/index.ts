import { ActionTree } from 'vuex'

export const actions:ActionTree<any, any> = {
  nuxtServerInit (store, { app: { $cookies } }) {
    const user = $cookies.get('user') || null
    store.commit('user/setToken', user)
  }
}

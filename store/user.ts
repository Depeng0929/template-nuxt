import { MutationTree } from 'vuex'
interface IUser {
  token: string
}

export const state = (): IUser => ({
  token: ''
})

export const mutations: MutationTree<IUser> = {
  setToken (state, val) {
    state.token = val
  }
}

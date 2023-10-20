import { type InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import axios from 'axios'

export interface MainState {
  userData?: IUser[],
  selectedUser?: IUser,
  loading: boolean
}

export const mainStoreKey: InjectionKey<Store<MainState>> = Symbol()

export const mainStore = createStore<MainState>({
  state: { 
    userData: [],
    selectedUser: undefined,
    loading: false
  },

  mutations: {
    updateUserData(state, userData) {
      state.userData = userData      
    },
    setLoading(state, loading) {
      state.loading = loading
    },
    selectUser(state, user) {
      state.selectedUser = user
    }
  },

  actions: {
    async fetchUserData({ commit }, userSearchInput) {
      let url
      if (!userSearchInput) {
        url = `${import.meta.env.VITE_API_URL}users`
      } else url = `${import.meta.env.VITE_API_URL}users?name_like=${userSearchInput}`
      
      commit('setLoading', true)
      const res = await axios.get(url)
      const userData = res.data
      commit('updateUserData', await userData)
      commit('setLoading', false)
    }
  }
})
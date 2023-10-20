import { type InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import axios from 'axios'

export interface MainState {
  userData?: IUser[],
  selectedUser?: IUser,
  userLoading: boolean
}

export const mainStoreKey: InjectionKey<Store<MainState>> = Symbol()

export const mainStore = createStore<MainState>({
  state: { 
    userData: [],
    selectedUser: undefined,
    userLoading: false
  },

  mutations: {
    updateUserData(state, userData) {
      state.userData = userData      
    },
    setUserLoading(state, userLoading) {
      state.userLoading = userLoading
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
      
      commit('setUserLoading', true)
      const res = await axios.get(url)
      const userData = res.data
      commit('updateUserData', await userData)
      commit('setUserLoading', false)
    }
  }
})
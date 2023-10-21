import { toRaw, type InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import axios from 'axios'

export interface MainState {
  userData?: IUser[],
  selectedUsers: IUser[],
  userLoading: boolean,
  errorMessage?: string
}

export const mainStoreKey: InjectionKey<Store<MainState>> = Symbol()

export const mainStore = createStore<MainState>({
  state: { 
    userData: [],
    selectedUsers: [],
    userLoading: false,
    errorMessage: ''
  },

  mutations: {
    updateUserData(state, userData) {
      state.userData = userData      
    },
    setUserLoading(state, userLoading) {
      state.userLoading = userLoading
    },
    selectUser(state, user) {
      if (state.selectedUsers.find((selectedUser) => selectedUser.id === user.id)) {
        const selectedUsers = toRaw(state.selectedUsers)
        state.selectedUsers = selectedUsers.filter((selectedUser: IUser) => selectedUser.id !== user.id)
      } else {
        if (user) state.selectedUsers.push(user)
      } 
    },
    updateErrorMessage(state, errorMessage) {
      state.errorMessage = errorMessage
    }
  },

  actions: {
    async fetchUserData({ commit }, userSearchInput) {
      commit('updateErrorMessage', '')
      let url
      if (!userSearchInput) {
        url = `${import.meta.env.VITE_API_URL}users`
      } else url = `${import.meta.env.VITE_API_URL}users?name_like=${userSearchInput}`
      
      commit('setUserLoading', true)
      try {
        const res = await axios.get(url)
        const userData = res.data
        commit('updateUserData', await userData)
      } catch (err) {
        commit('setUserLoading', false)
        if (axios.isAxiosError(err))  {
          commit('updateErrorMessage', err.message)
        } else {
          throw new Error('Request for user data failed')
        }
      }
      commit('setUserLoading', false)
    }
  }
})
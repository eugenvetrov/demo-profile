import { toRaw, type InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import axios from 'axios'

export interface MainState {
  userApiUrl: string,
  userData?: IUser[],
  selectedUsers: IUser[],
  userLoading: boolean,
  errorMessage?: string
}

export const mainStoreKey: InjectionKey<Store<MainState>> = Symbol()

export const mainStore = createStore<MainState>({
  state: { 
    userApiUrl: '',
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
        state.selectedUsers.push(user)
      } 
    },
    updateErrorMessage(state, errorMessage) {
      state.errorMessage = errorMessage
    },
    updateUserApiUrl(state, userSearchInput) {
      if (!userSearchInput) {
        state.userApiUrl = `${import.meta.env.VITE_API_URL}users`
      } else {
        const userSearchTextArray = userSearchInput.split(',')
        const userQueryText = userSearchTextArray.reduce((acc: string, cur: string) => acc + '|' + cur.trim())
        state.userApiUrl = `${import.meta.env.VITE_API_URL}users?username_like=${userQueryText}`
      }
    }
  },

  actions: {
    async fetchUserData({ state, commit }, userSearchInput) {
      commit('updateErrorMessage', '')
      commit('updateUserApiUrl', userSearchInput)
      commit('setUserLoading', true)
      try {
        const res = await axios.get(state.userApiUrl)
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
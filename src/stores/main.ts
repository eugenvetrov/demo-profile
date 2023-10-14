// store.ts
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

export interface State {
  count: number
}

export const mainStoreKey: InjectionKey<Store<State>> = Symbol()

export const mainStore = createStore<State>({
  state: {
    count: 0
  }
})
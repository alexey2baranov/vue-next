import {CommitOptions, createLogger, createStore, DispatchOptions, Store as VuexStore} from 'vuex';
import {State} from '@/store/helpers/intersectionState'
import {Actions} from '@/store/helpers/intersectionActions'
import {Mutations} from '@/store/helpers/intersectionMutations'
import {Getters} from '@/store/helpers/intersectionsGetters'

import user from '@/store/modules/user'
import alert from '@/store/modules/alert'


export const store = createStore({
  plugins: process.env.NODE_ENV === 'development' ? [createLogger()] : [],
  state: undefined,
  actions: {},
  mutations: {},
  getters: {},
  modules: {
    user,
    alert
  }
});

export function useStore() {
  return store as Store;
}

export type Store = Omit<VuexStore<State>,
  'getters' | 'commit' | 'dispatch'>
  & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload?: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
}
  & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
}
  & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
}
  & {
  state: {
    [K in keyof State]: ReturnType<() => State[K]>;
  };
}

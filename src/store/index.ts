import {actions, Actions} from '@/store/modules/alert/actions';
import {CommitOptions, createLogger, createStore, DispatchOptions, Store as VuexStore} from 'vuex';
import {Getters, getters} from './modules/alert/getters';
import {Mutations, mutations} from './modules/alert/mutations';

import {State, state} from './modules/alert/state';

export const store = createStore({
  plugins: process.env.NODE_ENV === 'development' ? [createLogger()] : [],
  state,
  actions,
  mutations,
  getters
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
    [K in keyof Getters]: ReturnType<Getters[K]>
  };
}

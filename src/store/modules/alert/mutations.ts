import {MutationTree} from 'vuex'
import {State, Alert} from './state'

export enum MutationTypes {
  SetItems = 'CREATE_ITEM',
  Hide = 'HIDE',
}

export type Mutations = {
  [MutationTypes.SetItems](state: State, alert: Alert): void;
  [MutationTypes.Hide](state: State): void;
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SetItems](state, alert) {
    state.alert = alert
    state.isVisible = true
  },
  [MutationTypes.Hide](state) {
    state.isVisible = false
    state.alert = {}
  }
}

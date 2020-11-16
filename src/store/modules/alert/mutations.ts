import {MutationTree} from 'vuex'
import {StateAlert, Alert} from './state'

export enum MutationTypesAlert {
  SetItems = 'CREATE_ITEM',
  Hide = 'HIDE',
}

export type MutationsAlert = {
  [MutationTypesAlert.SetItems](state: StateAlert, alert: Alert): void;
  [MutationTypesAlert.Hide](state: StateAlert): void;
}

export const mutations: MutationTree<StateAlert> & MutationsAlert = {
  [MutationTypesAlert.SetItems](state, alert) {
    state.alert = alert
    state.isVisible = true
  },
  [MutationTypesAlert.Hide](state) {
    state.isVisible = false
    state.alert = {}
  }
}

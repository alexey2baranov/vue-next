import {GetterTree} from 'vuex'
import {State} from './state'

export type Getters = {
  optionsAlert(state: State): object;
}

export const getters: GetterTree<State, State> & Getters = {
  optionsAlert(state): object {
    return state.alert
  }
}

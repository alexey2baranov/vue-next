import {GetterTree} from 'vuex'
import {State} from '@/store/helpers/intersectionState';

export type GettersAlert = {
  optionsAlert(state: State): object;
}

export const getters: GetterTree<State, State> & GettersAlert = {
  optionsAlert(state): object {
    return state.alert
  }
}

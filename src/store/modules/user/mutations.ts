import {MutationTree} from 'vuex'
import {StateUser, Profile} from './state'

export enum MutationTypesUser {
  SetProfile = 'SET_PROFILE',
}

export type MutationsUser = {
  [MutationTypesUser.SetProfile](state: StateUser, profile: Profile): void;
}

export const mutations: MutationTree<StateUser> & MutationsUser = {
  [MutationTypesUser.SetProfile](state, profile) {
    state.profile = profile
  }
}

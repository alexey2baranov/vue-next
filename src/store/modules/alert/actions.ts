import TypesAlert from '@/store/modules/alert/types';
import {ActionContext, ActionTree} from 'vuex';
import {Mutations, MutationTypes} from './mutations';
import {State} from './state';

export enum ActionTypes {
  fetchData = 'FETCH_DATA'
}

type ActionArguments = Omit<ActionContext<State, State>, 'commit'> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
}

export type Actions = {
  [ActionTypes.fetchData](context: ActionArguments): void;
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.fetchData]({commit}) {
    await sleep(4000)
    commit(MutationTypes.SetItems, {
      message: 'msg',
      description: 'description',
      type: TypesAlert.success
    });
  }
};


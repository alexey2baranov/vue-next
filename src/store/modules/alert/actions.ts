import api from '@/api';
import TypesAlert from '@/store/modules/alert/types';
import {ActionContext, ActionTree} from 'vuex';
import {Mutations} from '@/store/helpers/intersectionMutations';
import {MutationTypes} from '@/store/helpers/typesStore';
import {State} from '@/store/helpers/intersectionState';

export enum ActionTypesAlert {
  fetchData = 'FETCH_DATA'
}

type ActionArguments = Omit<ActionContext<State, State>, 'commit'> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
}

export type ActionsAlert = {
  [ActionTypesAlert.fetchData](context: ActionArguments): object;
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const actions: ActionTree<State, State> & ActionsAlert = {
  async [ActionTypesAlert.fetchData]({commit}) {
    const response = await api('company/210/company-attributes')
    commit(MutationTypes.SetItems, {
      message: 'msg',
      description: 'description',
      type: TypesAlert.success
    });
    return response
  }
};


import {MutationTypesAlert} from '@/store/modules/alert/mutations';
import {ActionTypesAlert} from '@/store/modules/alert/actions';
import {MutationTypesUser} from '@/store/modules/user/mutations';

export const MutationTypes = {
  ...MutationTypesAlert,
  ...MutationTypesUser,
}

export const ActionTypes = {
  ...ActionTypesAlert,
}


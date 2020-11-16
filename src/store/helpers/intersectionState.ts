import {StateAlert} from '@/store/modules/alert/state';
import {StateUser} from '@/store/modules/user/state';

export type State = StateUser & StateAlert

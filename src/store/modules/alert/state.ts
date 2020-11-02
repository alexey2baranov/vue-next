export type State = {
  isVisible: boolean;
  alert: object;
}

export type Alert = {
  message: string;
  description: string;
  type: string;
}

export const state: State = {
  isVisible: false,
  alert: {
    message: '',
    description: '',
    type: '',
  }
}

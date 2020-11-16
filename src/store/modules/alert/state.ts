export type StateAlert = {
  isVisible: boolean;
  alert: object;
}

export type Alert = {
  message: string;
  description: string;
  type: string;
}

export const state: StateAlert = {
  isVisible: false,
  alert: {
    message: '',
    description: '',
    type: '',
  }
}

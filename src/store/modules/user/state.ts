export type StateUser = {
  profile: object;
}

export type Profile = {
  access_token: string;
  expires_in: string;
  id_token: string;
  'not-before-policy': string;
  refresh_expires_in: string;
  refresh_token: string;
  scope: string;
  session_state: string;
  token_type: string;
}

export const state: StateUser = {
  profile: {}
};


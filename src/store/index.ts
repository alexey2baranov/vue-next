import { createStore } from "vuex";

export interface User {
  name: string;
  password: string;
}
export interface State {
  count: number;
  height: number;
  user: User;
}

export const state: State = {
  count: 1,
  height: 200,
  user: {
    name: "alexey2baranov",
    password: "qwerty",
  },
};

export const store = createStore({
  state,
  mutations: {
    setUser: (state: State, value: User) => {
      state.user = value;
    },
  },
  actions: {},
  modules: {},
  getters: {
    reversedUsername: ({ user }) =>
      user.name
        .split("")
        .reverse()
        .join(""),
  },
});

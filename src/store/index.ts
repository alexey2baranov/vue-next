import {createStore} from 'vuex'

export type State = {
    count: number,
    height: number,
}

export const store= createStore({
    state() {
        return {
            count: 1,
            height: 200,
        }
    },
    mutations: {},
    actions: {},
    modules: {}
})

import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Vuex from 'vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(Vuex){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const store = new Vuex.Store({
    state: {
        message: 'Hello Vue!'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    },

    getters: {
        message: state => state.message{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    },

    mutations: {
        SET_MESSAGE: (state, message) => {
            state.message = message{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
        }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    },

    actions: {
        setMessage: ({ commit, }, payload) => {
            commit('SET_MESSAGE', payload){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
        }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default store{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

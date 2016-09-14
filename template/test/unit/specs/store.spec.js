import { expect{{#if_eq lintConfig "airbnb"}},{{/if_eq}} } from 'chai'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import { mutations{{#if_eq lintConfig "airbnb"}},{{/if_eq}} } from 'src/vuex/store'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const { SET_MESSAGE{{#if_eq lintConfig "airbnb"}},{{/if_eq}} } = mutations{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

describe('mutations', () => {
    it('should change message', () => {
        const state = { message: 'Hello World!'{{#if_eq lintConfig "airbnb"}},{{/if_eq}} }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

        expect(state.message).to.equal('Hello World!'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
        SET_MESSAGE(state, 'Goodbye!'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
        expect(state.message).to.equal('Goodbye!'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

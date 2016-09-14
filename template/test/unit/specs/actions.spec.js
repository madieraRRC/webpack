import { setMessage, } from 'src/vuex/actions'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// Mock dispatch
const dispatch = (name, ...payload) => {
    const mutation = { name, payload{{#if_eq lintConfig "airbnb"}},{{/if_eq}} }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    expect(mutation.name).to.equal(name){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

    if (payload) {
        expect(mutation.payload).to.deep.equal(payload){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

describe('actions', () => {
    it('setMessage', (done) => {
        setMessage({ dispatch{{#if_eq lintConfig "airbnb"}},{{/if_eq}} }, 'Bye!'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
        done(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import hello from 'src/components/hello'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import store from 'src/store'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

describe('hello.vue', () => {
    it('should render correct contents', () => {
        const vm = new Vue({
            store,
            el: document.createElement('div'),
            render: (h) => h(hello){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
        }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
        expect(vm.$el.querySelector('.hello h1').textContent).to.equal('Hello Vue!'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

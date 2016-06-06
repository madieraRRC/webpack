import home from 'sections/home/home'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import notFound from 'sections/not-found/not-found'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
    '*': {
        component: notFound{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    },
    '/': {
        component: home{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

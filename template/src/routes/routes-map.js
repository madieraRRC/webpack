import index from 'routes/index'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import notFound from 'routes/not-found'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
    '*': {
        component: notFound{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    },
    '/': {
        component: index{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

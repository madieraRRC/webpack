export const setMessage = ({ dispatch{{#if_eq lintConfig "airbnb"}},{{/if_eq}} }, message) => {
    dispatch('SET_MESSAGE', message){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

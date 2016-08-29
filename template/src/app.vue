<template>
    <div class="wrapper">
        <router-view :is="view"></router-view>
    </div>
</template>

<script>
import store from './vuex/store'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
    store{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style src="./styles/app.scss" lang="scss"></style>

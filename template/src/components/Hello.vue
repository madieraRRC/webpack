<template>
    <div class="hello">
        <h1>\{{ message }}</h1>
        <button @click="changeMessage">Get random message</button>
    </div>
</template>

<script>
import { mapActions{{#if_eq lintConfig "airbnb"}},{{/if_eq}} } from 'vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
    computed: {
        message() {
            return this.$store.state.message{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
        }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    },

    methods: {
        ...mapActions([
            'setMessage'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
        ]),

        changeMessage() {
            const messages = [
                'Hi there!',
                'How\'s it going?',
                'Are you enjoing Vue yet? I know I am!',
                'Only four messages, sorry!'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
            ]{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

            const randomInt = Math.floor(Math.random() * (messages.length - 0)) + 0{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

            this.setMessage(messages[randomInt]){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
        }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    color: #42b983;
}
</style>

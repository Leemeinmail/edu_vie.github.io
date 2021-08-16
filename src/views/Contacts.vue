<template>
    <div class='contacts'>
        <div class='contacts-form'>
            <div class='contacts-intro '>
                {{ intro }}
            </div>
            <feedback></feedback>
        </div>
    </div>
</template>

<script>

import feedback from '@/components/Feedback.vue';

import {get_page} from '@/models/pages/pages.js';

export default {
    components: {feedback},
    data() {
        return {
            intro: ''
        }
    },
    methods: {},
    mounted: async function() {
        
        this.$store.commit('loaderOn');
        this.$store.commit('changeHeaderTitle', 'Наши контакты');
        
        let page_data = await get_page('contacts');
        this.intro = page_data.intro;

        this.$store.commit('changeHeaderTitle', page_data.title);
        this.$store.commit('loaderOff', 1000);
    }
}
</script>
<style lang="scss">
.contacts {
    &-form {}

    &-intro {
        color: #000;
        line-height: 1.5;
        margin-bottom: 15px;
    }
}
</style>
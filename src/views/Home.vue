<template>
    <articleApp :content='content' />
</template>

<script>
import {get_page} from '@/models/pages/pages.js';

import articleApp from '@/components/ArticleApp.vue';

export default {
    components: { articleApp },
    data() {
        return {
            content: '',
        }
    },
    async mounted() {

        this.$store.commit('loaderOn'); 

        let page_data = await get_page('home');
        this.content = page_data.content;

        this.$store.commit('changeHeaderTitle', page_data.title);
        this.$store.commit('loaderOff', 1000);

    }
}
</script>
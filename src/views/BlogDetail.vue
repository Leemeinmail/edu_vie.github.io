<template>
    <div class='blog-detail'>
        <articleApp :content='content' />
    </div>
</template>

<script>
import { get_single_post } from "@/models/blog/blog.js";

import articleApp from "@/components/ArticleApp.vue";

export default {
    components: { articleApp },
    data() {
        return {
            title: '',
            content: ''
        }
    },
    mounted: async function() {

        this.$store.commit('loaderOn');
        let post = await get_single_post(this.$route.params.post);
        this.title = post.title;
        this.content = post.content;
        this.$store.commit('changeHeaderTitle', this.title);
        this.$store.commit('loaderOff', 1000);

    }
}
</script>
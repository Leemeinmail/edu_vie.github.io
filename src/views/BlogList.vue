<template>
    <div class='blog-list'>

        <CartPreviewsList :posts='items' v-if='items' />

        <div class='blog-list-bottom'>
            <div class='blog-list-pagin'>
                <pagination v-bind:pags='pags'></pagination>
            </div>
        </div>

    </div>
</template>
<script>
import { get_posts_list, get_page_pagination } from "@/models/blog/blog.js";

import pagination from "@/components/Pagination.vue";
import CartPreviewsList from "@/components/CartPreviewsList.vue";

export default {
    components: {
        pagination,
        CartPreviewsList
    },
    data() {
        return {
            title: 'Наш блог',
            items: '',
            pags: '',
            items_on_page: 16
        }
    },
    mounted: async function() {
        this.$store.commit('loaderOn');
        this.items = await get_posts_list(this.items_on_page, 1);
        this.pags = await get_page_pagination(this.items_on_page);
        this.$store.commit('changeHeaderTitle', this.title);
        this.$store.commit('loaderOff', 1000);
    },
    watch: {
        async $route(to, from) {
            if (this.$route.params.id) {
                this.$store.commit('loaderOn');
                this.items = await get_posts_list(this.items_on_page, this.$route.params.id);
                this.pags = await get_page_pagination(this.items_on_page);
                this.$store.commit('changeHeaderTitle', this.title);
                this.$store.commit('loaderOff', 1000);
            }
        }
    }
}
</script>

<style scoped lang="scss" >
.blog-list{
    &-bottom {
        padding: 30px 0;
    }  
}
</style>
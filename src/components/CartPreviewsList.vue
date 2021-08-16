<template>
    <div class='cart-previews-list'>
        <div class='cart-previews-list-body' v-if='posts'>
            <div class='cart-previews-list-item -col-3' v-for="post in posts">
                <CartPreview v-bind="post"/>
            </div>
        </div>
    </div>
</template>

<script>

import CartPreview from "@/components/CartPreview.vue";

export default {
    props:['posts'],
    components: {CartPreview},
    data() {return {}}
}
</script>

<style scoped lang="scss">
.cart-previews-list {

    @extend .grid;

    &-body {
        @extend .grid-row;
    }

    &-item {
        @extend .grid-item;
        margin-bottom: 10px;
    }

}
</style>
<template>
    <ul class="left-menu">
        <li class="left-menu-item" v-for="item in items">
            <router-link class="left-menu-link" v-bind:to="item.path">
                {{ item.value }}
            </router-link>
        </li>
    </ul>
</template>


<script>
import { get_menu_points } from '@/models/leftMenu/leftMenu.js';

export default {
    data() {
        return {
            items: []
        }
    },
    async mounted() {
        let r = await get_menu_points();
        this.items = r;
    },
}
</script>


<style scoped lang="scss">
.left-menu {

    list-style-type: none;

    &-item {

        transition: .3s;

        &:hover{
            background-color: #0f2742;
        }
    }

    &-link {
        display: block;
        padding: 10px 15px;
        color: #fff;
        text-decoration: none;
        transition: .3s;
    }

}
</style>
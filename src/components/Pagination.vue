<template>
    <div class='pagin'>
        <ul class='pagin-list'>
            <li class='pagin-item' v-for="pag in pags">
                <router-link class="pagin-link" :to="pag.url">
                    {{pag.title}}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['pags']
}
</script>

<style scoped lang="scss">
.pagin {

    &-list {
        display: flex;
        justify-content: center;
        list-style-type: none;
    }

    &-item {
        background-color: #133458;
        margin: 0 10px;
    }

    &-link {
        font-size: 20px;
        display: block;
        padding: 5px 10px;
        color: #fff;
        text-decoration: none;
    }

}
</style>
<template>
    <header class='header'>
        <div class='header-left'>
            <router-link class="header-slogan" :to="toHome">
                {{pageSlogan}}
            </router-link>
        </div>
        <div class='header-right'>
            <div class='header-back' @click='pageback()'>
                назад
            </div>
            <h1 class='header-title'>
                {{pageTitle}}
            </h1>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {
        pageback() {
            this.$router.go(-1);
        }
    },
    computed: {
        pageTitle() {
            return this.$store.state.headerTitle;
        },
        pageSlogan() {
            return this.$store.state.headerSlogan;
        },
        toHome() {
            return this.$store.state.homePath;
        }
    }
}
</script>

<style scoped lang="scss">
.header {
    display: flex;
    padding: 10px 0;
    background-color: #0f2742;
    box-shadow: -5px 2px 5px 0px rgb(0 0 0 / 70%);

    &-left {
        flex: 0 0 300px;
    }

    &-right {
        flex: 1 0 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &-title {
        font-size: 30px;
        text-align: center;
        flex: 1 0 0;
    }

    &-slogan {
        display: block;
        text-decoration: none;
        color: #fff;
        font-size: 30px;
        text-align: center;
    }

    &-back {
        position: relative;
        padding-left: 20px;
        line-height: 1;
        cursor: pointer;

        &:before {
            position: absolute;
            content: "";
            top: 50%;
            left: 3px;
            width: 8px;
            height: 8px;
            margin-top: -3px;
            border-top: 1px solid #fff;
            border-left: 1px solid #fff;
            box-sizing: border-box;
            transform: rotate(-45deg);
        }
    }

}
</style>
<template>
    <HeaderApp />
    <div class='main'>
        <asideApp css_class='main-menu' />
        <div class='main-content' :class='{"not-scrollable":loaderIsActive}'>
            <loader />
            <router-view />
        </div>
    </div>

    <TinyWindow
        v-if='tinyWindowsList.length > 0' 
        v-for='win in tinyWindowsList' 
        :prop_x='win.x' :prop_y='win.y' :prop_id='win.id'
        :prop_title='win.title'
        :prop_content='win.content'
    />

    <Modal/>

</template>

<script>

//компоненты
import HeaderApp from '@/components/HeaderApp.vue';
import AsideApp from '@/components/AsideApp.vue';
import Loader from '@/components/Loader.vue';
import TinyWindow from '@/components/TinyWindow.vue';
import Modal from '@/components/Modal.vue';

export default {
    components: { 
        HeaderApp, 
        AsideApp, 
        Loader, 
        TinyWindow, 
        Modal
    },
    computed: {
        loaderIsActive() {
            return this.$store.state.showLoader;
        },
        tinyWindowsList(){
            return this.$store.state.tinyWindows;
        }
    }
}
</script>

<style lang="scss">

@import '/static/css/global-styles.scss';

#app {
    height: 100%;
}

.main {
    display: flex;
    height: 100%;

    &-menu {
        flex: 0 0 300px;
        background-color: #133458;
        height: calc(100% - 50px);
    }

    &-content {
        position: relative;
        flex: 1 0 0;
        max-width: calc(100% - 300px);
        background-color: #f1f1f1;
        height: calc(100% - 50px);
        overflow-y: auto;
        padding: 20px;

        &.not-scrollable {
            overflow-y: hidden;
        }
    }

    &-notfound {
        width: 100%;
        height: 100%;
    }
}
</style>
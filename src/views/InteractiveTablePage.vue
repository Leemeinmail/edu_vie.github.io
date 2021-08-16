<template>
    <div class='table'>
        <InteractiveTable/>
    </div>
</template>

<script>

import InteractiveTable from '@/components/InteractiveTable.vue';

export default {
    components: {InteractiveTable},
    data() {
        return {}
    },
    mounted: async function() {
        this.$store.commit('loaderOn');
        this.$store.commit('changeHeaderTitle', 'Интерактивная таблица');
        this.$store.commit('loaderOff', 1000);
    }
}
</script>
<style lang='scss' scoped>

.others {
    &-row {}

    &-item {}
}
</style>
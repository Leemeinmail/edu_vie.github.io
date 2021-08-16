<template>
    <aside class='aside' :class='css_class'>
        
        <div class='aside-block'>
            <div class='aside-title' >
                Меню
            </div>
            <LeftMenu/>
        </div>

    </aside>
</template>

<script>

import LeftMenu from '@/components/LeftMenu.vue';

export default {
    props: ['css_class'],
    components: { LeftMenu },
     methods: {
        btn_click() {
            alert('клик');
        }
    }
}
</script>
<style scoped lang="scss">
.aside{
    
    &-block{
        
        padding: 15px;
        //border-bottom: 3px solid #fff;

        /*&:last-child{
            margin-bottom: 0;
        }*/
    }

    &-title{
        font-weight: 600;
        font-size: 20px;
        margin-bottom: 15px;
    }
}
</style>
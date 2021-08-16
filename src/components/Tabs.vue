<template>
    <div class='tabs' >
        <div class='tabs-header' >
            <div 
                v-for='tab,index in tabs' 
                :data-index='index' 
                @click='toggle($event)'
                :class='{"-active":tab.show}'
                class='tabs-btn'
            >
                {{tab.name}}
            </div>
        </div>
        <div class='tabs-body' >
            <div 
                v-for='tab,index in tabs' 
                :data-index='index'
                :class='{"-active":tab.show}'
                class='tabs-tab'
            >   
                <div v-if='tab.type == "html"' v-html='tab.body' ></div>
                <component v-if='tab.type !== "html"' 
                    :is='getTabComponent(tab.type)' 
                    v-bind='tab.body'
                />
            </div>
        </div>
    </div>
</template>


<script>

import { defineAsyncComponent } from 'vue';

export default {
    props: ['tabs'],
    data() {return {}},
    mounted: function(){},
    computed: {},
    methods:{
        toggle(evt){
            let index = evt.target.dataset.index;
            this.hide_all_tabs();
            this.tabs[index].show = true;
        },
        hide_all_tabs(){
            for( let i = 0; i < this.tabs.length; i++ ){
                this.tabs[i].show = false;
            } 
        },
        getTabComponent( componentName ){
            return defineAsyncComponent(() =>
                import('@/components/' + componentName + '.vue')
            );
        }
    }
}
</script>
<style lang='scss' scoped>
.tabs{

    border-radius: 5px;
    border: 1px solid #000;

    &-header{
        display: flex;
    }

    &-btn{
        flex: 1 0 0;
        padding: 10px 20px;
        background-color: #133458;
        color: #fff;
        cursor: pointer;
        border-right: 1px solid #fff;
        transition: .3s;
        text-align: center;

        &:last-child{
            border-right: 1px solid transparent;
        }

        &:hover, &.-active{
            background-color: #0f2742;
        }
    }

    &-body{
        overflow: hidden;
    }

    &-tab{
        position: absolute;
        top:0;left:-9999px;
        opacity: 0;
        padding: 15px;
        transition: .3s;

        color: #000;

        &.-active{
           position: static;
           opacity: 1; 
        }
    }

}
</style>
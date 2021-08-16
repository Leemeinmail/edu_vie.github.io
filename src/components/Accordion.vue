<template>
    <div class='accordion' >
        <div v-for='tab,index in items' class='accordion-tab accord-item'>
            <div 
                @click='toggle($event)' 
                :data-index='index' 
                :class='{"-show":tab.show}'
                class='accord-item-head' 
            >
                {{tab.title}}
            </div>
            <div :class='{"-show":tab.show}' class='accord-item-body'>
                <div class='accord-item-content' >
                    <articleApp :content='tab.body' />
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import articleApp from '@/components/ArticleApp.vue'

export default {
    components:{articleApp},
    props:['elements'],
    data() {
        return {}
    },
    mounted: function(){},
    computed: {
        items(){

            if( this.elements && this.elements.length ){
                for( let i = 0; i < this.elements.length; i++ ){
                    this.elements[i].show = false;
                }
            }

            return this.elements;  
        }
    },
    methods:{
        toggle(evt){
            let index = evt.target.getAttribute('data-index');

            if( this.elements && !this.elements[index].show ){
                this.closed_all_tabs();
                this.elements[index].show = true;
            }else{
                this.elements[index].show = false;
            }
        },
        closed_all_tabs(){
            for( let i = 0; i < this.elements.length; i++ ){
                this.elements[i].show = false;
            }
        }
    }
}
</script>
<style lang='scss' scoped>

.accordion {
    &-tab{
        margin-bottom: 10px;
        &:last-child{
            margin-bottom: 0;
        }
    }
}
.accord-item{
    border: 1px solid #133458;
    border-radius: 5px;

    &-head{
        position: relative;
        padding: 10px 15px;
        color: #fff;
        background-color: #133458;
        cursor: pointer;

        &:after{
            position: absolute;
            top: 50%; right: 10px;
            width: 10px; height: 10px;
            margin-top: -6px;
            display: block;
            content: "";
            border-bottom: 2px solid #fff;
            border-right: 2px solid #fff;
            transform: rotate(-45deg);
            transition: transform .3s ease-in-out;
        }

        &.-show:after{
            border-bottom: 2px solid #fff;
            border-right: 2px solid #fff;
            transform: rotate(45deg);
        }

    }

    &-body{
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);

        &.-show{
            max-height: 999999px;  
            transition: max-height 1s ease-in-out;
        }
    }

    &-content{ 
        border-top: 1px solid #133458; 
        padding: 10px 15px;
        color: #000;
    }

}

</style>
<template>
    <div 
        ref='modalContainer' 
        @click='closed($event)' 
        class='modal' 
        :class='{"-active":isShow}'
    >
        <div class='modal-content'>
            <div class='modal-head'>
                <div class='modal-title'>
                    {{title}}
                </div>
                <div ref='modalClosed' class='modal-closed'>
                    &#10006;
                </div>
            </div>
            <div class='modal-body'>
                <component 
                    v-if='isShow == true && componentDataType == "component"'
                    :is='bodyComponent' 
                    v-bind='componentData'
                />
                <div 
                    v-else-if='isShow == true && componentDataType == "html"' 
                    v-html='componentData' 
                > 
                </div>
                <div v-else >
                    Ошибка. Тип контента не определён.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    components:{},
    data() {return {}},
    mounted(){},
    methods: {
        closed(evt) {
            let el = evt.target;
            if( el == this.$refs.modalContainer || el == this.$refs.modalClosed){
                this.$store.commit('modalHide');
            }
        }
    },
    computed: {
        isShow() {
            return this.$store.state.modal.show;
        },
        bodyComponent(){
            return defineAsyncComponent(() =>
                import('@/components/' + this.componentName + '.vue')
            );
        },
        componentName(){
            return this.$store.state.modal.component;
        },
        componentData(){
            return this.$store.state.modal.data;
        },
        componentDataType(){
            return this.$store.state.modal.contentType;
        },
        title(){
            return this.$store.state.modal.title;
        }
    }
}
</script>
<style lang='scss' scoped>
.modal {
    @extend .basic-modal;

    &-content {
        @extend .basic-modal-content;
    }

    &-head {
        @extend .modal-with-header-head;
        cursor: default;
    }

    &-title {
        @extend .modal-with-header-title;
    }

    &-closed {
        @extend .modal-with-header-closed;
    }

    &-body {
        @extend .modal-with-header-body;
        max-height: 80vh;
        overflow-y: scroll;
    }

}
</style>
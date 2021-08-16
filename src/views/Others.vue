<template>
    <div class='others'>
        <div class='others-row' >
            <div class='others-item -col-12' >
                <div class='others-title' >
                    Аккордион. Контент только в стиле статьи
                </div>
                <Accordion :elements='accordionData' />
            </div>

            <div class='others-item -col-12' >
                <div class='others-title' >
                    Табы. Контентом может быть html или любой компонент 
                </div>
                <Tabs :tabs='tabsData' />
            </div>

            <div class='others-item -col-6' >
                <div class='others-title' >
                    Мини окна. Компонент
                </div>
                <button @click='showTinyWindowComponent()' class='btn -type-1' >
                    Открыть окно
                </button>
            </div>

            <div class='others-item -col-6' >
                <div class='others-title' >
                    Мини окна. Текст или html
                </div>
                <button @click='showTinyWindowHtml()' class='btn -type-1' >
                    Открыть окно
                </button>
            </div>

            <div class='others-item -col-6' >
                <div class='others-title' >
                    Модальное окно. Компонент
                </div>
                <button @click='showModalComponent()' class='btn -type-1' >
                    Открыть модальное окно
                </button>
            </div>

            <div class='others-item -col-6' >
                <div class='others-title' >
                    Модальное окно. Текст
                </div>
                <button @click='showModalText()' class='btn -type-1' >
                    Открыть модальное окно
                </button>
            </div>

        </div>
    </div>

</template>
<script>

//components
import Accordion from '@/components/Accordion.vue';
import Tabs from '@/components/Tabs.vue';

//functions
import {get_accordion_data} from '@/models/others/othersModel.js';
import {get_single_post,get_posts_list} from '@/models/blog/blog.js';

export default {
    components: {Accordion,Tabs},
    data() {
        return {
            accordionData:[],
            tabsData:[
                {
                    name:'Избранные статьи',
                    type:'CartPreviewsList',
                    body:{},
                    show:true
                },
                {
                    name:'Читайте наши статьи',
                    type:'Accordion',
                    body:{elements:[]},
                    show:false
                }
            ]
        }
    },
    mounted: async function() {
        this.$store.commit('loaderOn');
        this.$store.commit('changeHeaderTitle', 'Разное');
        this.accordionData = await get_accordion_data();
        
        this.tabsData[0].body = {posts:await get_posts_list(4, 1)};
        for( let i = 1; i < 3; i++ ){
            let post = await get_single_post(i);
            this.tabsData[1].body.elements.push({
                title: post.title,
                body: post.content
            });
        }
        this.$store.commit('loaderOff', 1000);
    },
    methods:{
        async showTinyWindowComponent(){
            
            let post = await get_single_post(10);

            this.$store.commit( 'addTinyWindow', {
                x: 0, y: 0, 
                title: post.title, 
                content: {
                    type: 'component',
                    component: 'ArticleApp',
                    body: post
                }
            });
        },
        async showTinyWindowHtml(){
            let post = await get_single_post(10);
            this.$store.commit( 'addTinyWindow', {
                x: 0, y: 0, 
                title: 'Страница разное Окно', 
                content: {
                    type: 'html',
                    body: post.content
                }
            });

        },
        async showModalComponent(){
            
            let compData = [
                {
                    name:'Избранные статьи',
                    type:'CartPreviewsList',
                    body:{},
                    show:true
                },
                {
                    name:'Читайте наши статьи',
                    type:'Accordion',
                    body:{elements:[]},
                    show:false
                }
            ];

            compData[0].body = { posts: await get_posts_list(4, 9) };
            for( let i = 3; i < 7; i++ ){
                let post = await get_single_post(i);
                compData[1].body.elements.push({
                    title: post.title,
                    body: post.content
                });
            }

            this.$store.commit('modalShow', {
                contentType: 'component',
                component: 'Tabs',
                data: {tabs:compData},
                title: 'Модальное окно с компонентом',
                show: true,
            });
        },
        async showModalText(){

            let post = await get_single_post(10);

            this.$store.commit('modalShow', {
                contentType: 'html',
                data: post.content,
                title: post.title,
                show: true,
            });
        }
    }
}
</script>
<style lang='scss' scoped>
.others {
    @extend .grid;

    &-row{
        @extend .grid-row;  
    }

    &-item{
       @extend .grid-item;
       margin-bottom: 20px;
       &:last-child{
           margin-bottom: 0;
       } 
    }

    &-title{
        font-size: 23px;
        color: #000;
        margin-bottom: 20px;
    }
}
</style>
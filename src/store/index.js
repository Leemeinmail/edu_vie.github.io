import { createStore } from 'vuex'

export default createStore({

    state: {
        headerTitle: 'Страница',
        headerSlogan: 'Vue SPA site',
        showLoader: true,
        homePath: '/', // если прописать "/" в v-bind:to будет ошибка компиляции
        tinyWindows: [],
        modal:{
            show:false,
            contentType:'',
            component:'',
            title: '',
            data:''
        }
    },

    mutations: {

        loaderOff(state, delay) {
            setTimeout(function() {
                state.showLoader = false;
            }, delay);
        },

        loaderOn(state) {

            // отключаю скролл контентного блока
            document.querySelector('.main-content').classList.add('not-scrolable');

            //включаю лоадер
            state.showLoader = true;

            // проматываю скролл контентного блока в начало
            document.querySelector('.main-content').scroll({ top: 0 });

        },

        changeHeaderTitle(state, value) {
            state.headerTitle = value;
        },

        changeHeaderSlogan(state, value) {
            state.headerSlogan = value;
        },

        addTinyWindow( state, opts ){
            opts.id = (opts.id) ? opts.id : Math.round(0 + Math.random() * (999999 + 1 - 0));
            state.tinyWindows.push(opts);
        },

        removeTinyWindow( state, id ){
            for( let i = 0; i < state.tinyWindows.length; i++ ){
                if( state.tinyWindows[i].id == id ){
                    state.tinyWindows.splice(i,0);
                    break;
                }
            }
        },

        modalShow( state, opts ){
            for( let key in opts ){
                state.modal[key] = opts[key];
            }
        },

        modalHide(state){
            for( let key in state.modal ){
                if( key == 'show' ){
                    state.modal[key] = false;
                }
                state.modal[key] = '';
            }
        }

    },
    actions: {}
})
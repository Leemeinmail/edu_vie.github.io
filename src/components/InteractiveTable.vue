<template>
    <div class='table'>
        <div class='table-body'>
            <div class='table-aside'>
                <div class='columns table-head'>
                    <div class='columns-row -wrap-items'>
                        <!-- <div class='columns-item -type-1 -full-width'>
                            Название элемента
                        </div> -->
                        <div class='columns-item -type-1 -full-width'>
                            <input 
                                v-model='search_string'
                                class='table-search-input' 
                                type='text' 
                                placeholder='Найти по названию'>
                        </div>
                    </div>
                </div>
                <div class='columns'>
                    <div 
                        v-if='items_on_page' 
                        v-for='row in items_on_page' 
                        class='columns-row'
                    >
                        <div v-if='row' class='columns-item -type-1 -full-width'>
                            <input 
                                class='columns-item-checkbox' 
                                type='checkbox' 
                                @change='select_row($event)'
                                :checked='check_in_selected_row(row.id)' 
                                :value='row.id'
                            >
                            <input
                                class='columns-input'
                                type='text'
                                @input='change_table_cell($event)'
                                @blur='change_table_data($event)'
                                :data-id='row.id'
                                data-changed-value='name'
                                :name='"row_name_for" + row.id'
                                :value='row.name'
                            >
                        </div>
                    </div>
                </div>
            </div>
            <div class='table-content'>
                <div class='table-scrollable'>
                    <!-- <div class='columns table-head'>
                        <div class='columns-row'>
                            <div class='columns-item -type-1 -full-width'>
                                Значения элементов
                            </div>
                        </div>
                    </div> -->
                    <div class='columns table-head'>
                        <div class='columns-row'>
                            <div 
                                v-for='col in colums' 
                                class='columns-item -type-1 -content-center'
                            >
                                {{col}}
                            </div>
                        </div>
                    </div>
                    <div class='columns table-rows'>
                        <div 
                            v-if='only_values' 
                            v-for='row,row_key in only_values' 
                            class='columns-row'
                        >
                            <div 
                                v-for='cell,cell_key in row' 
                                class='columns-item -type-2 -content-center'
                            >
                                <input
                                    :data-id='row_key'
                                    :data-changed-value='cell_key'
                                    class='columns-input' 
                                    type='text'
                                    :value='cell'
                                    @input='change_table_cell($event)'
                                    @blur='change_table_data($event)'
                                    :name='cell_key + "_for_" + row_key'
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class='table-footer controll-table'>

                <div class='controll-table-info' >
                    <div v-if='pagination.length' class='controll-table-paging table-pages'>
                        <div v-for='page in pagination' :data-page='page' @click='change_page($event);' class='controll-table-item table-pages-item'>
                            {{page}}
                        </div>
                    </div>
                    
                    <div v-if='printed_items.length' class='controll-table-num'>
                        Всего записей: <span>{{printed_items.length}}</span>
                    </div>
                    
                    <div v-if='printed_items.length' class='controll-table-to-show'>
                        <span>
                            Показать на странице:
                        </span>
                        <select @change='change_num_items($event);'>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                        </select>
                    </div>
                </div>

                <div class='controll-table-btns' >
                    <div class='controll-table-add-item'>
                        <button class='btn' @click='add_el()' >
                            Добавить элемент
                        </button>
                    </div>

                    <div class='controll-table-remove-items'>
                        <button class='btn' @click='delete_rows()'>
                            Удалить выбранные элементы
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>

import { get, update, remove, set } from '@/models/interactiveTable/table.js'

export default {
    data() {
        return {
            items: [],
            //printed_items: [],
            items_by_page: 5,
            page: 1,
            search_string:'',
            selected_rows: []
        }
    },
    mounted: async function() {
        this.items = await get('*');
        //this.printed_items = this.items;
    },
    computed: {
        page_nums: function() {
            if (this.items.length) {
                return Math.ceil(this.printed_items.length / this.items_by_page);
            }
        },
        pagination() {
            let pagination = [];
            let limit = this.page + 5;

            for (let i = this.page - 1; i < limit; i++) {
                if (i > (this.page_nums)) { break; }
                if (i <= 0) { continue; }
                pagination.push(i);
            }

            return pagination;
        },
        items_on_page() {
            if (this.items.length) {

                let last_index = this.page * this.items_by_page;
                let first_index = last_index - this.items_by_page;
                let els = {};

                for (let i = first_index; i < last_index; i++) {
                    if( this.printed_items ){
                        els[i] = this.printed_items[i];
                    }
                }
                return els;
            }
            return [];
        },
        only_values() {
            if (this.items.length) {

                let rows = {};
                for (let key in this.items_on_page) {

                    if( this.items_on_page[key] !== undefined ){
                        let index = this.items_on_page[key].id;
                        rows[index] = {};
                        for (let key_col in this.items_on_page[key]) {
                            if (key_col !== 'id' && key_col !== 'name') {;
                                rows[index][key_col] = this.items_on_page[key][key_col];
                            }
                        }
                    }
                }
                return rows;
            }
        },
        colums() {
            if (this.items.length) {

                let cols = [];

                for (let key in this.items[0]) {
                    if (key !== 'name' && key !== 'id') {
                        cols.push(key);
                    }
                }

                return cols;

            }

            return [];
        },
        printed_items(){

            let els = [];

            if( this.search_string !== ''){
               for (let i = 0; i < this.items.length; i++) {
                    if (this.items[i].name.indexOf(this.search_string) !== -1) {
                        els.push(this.items[i]);
                    }
                } 
            }else{
                els = this.items;
            }

            return els;
        }

    },
    methods: {
        change_table_cell(evt){
            let changed_value = evt.target.getAttribute('data-changed-value');
            let row_id = evt.target.getAttribute('data-id');
            
            for( let i = 0; i < this.items.length; i++ ){
                if(this.items[i].id == row_id){
                    this.items[i][changed_value] = evt.target.value;
                    break;
                }
            }
        },
        change_num_items(evt) {
            this.page = 1;
            this.items_by_page = evt.target.value;
        },
        change_page(evt) {
            this.page = parseInt(evt.target.getAttribute('data-page'));
        },
        select_row(evt) {
            if (evt.target.checked) {
                this.selected_rows.push(parseInt(evt.target.value));
            } else {
                for (let i = 0; i < this.selected_rows.length; i++) {
                    if (this.selected_rows[i] == evt.target.value) {
                        delete this.selected_rows.[i];
                        break;
                    }
                }
            }
        },
        check_in_selected_row(index) {
            for (let key in this.selected_rows) {
                if (this.selected_rows[key] == index) {
                    return true;
                }
            }
            return false;
        },
        add_el(){

            let el = {};
            let length = this.items.length;
            this.search_string = '';

            for( let key in this.items[this.items.length-1] ){
                if( key == 'id' ){
                    el[key] = this.items[this.items.length-1][key] + 1;
                    continue;
                }
                el[key] = '';
            }

            this.page = this.page_nums; 
            this.items.push(el);
            set([el]);
        },
        remove_row(id){
            for( let i = 0; i < this.items.length; i++ ){
                if( this.items[i].id == id ){
                    this.items.splice(i,1);
                    break;
                }
            }
            
        },
        delete_rows() {
            remove( this.selected_rows );
            for (let i = 0; i < this.selected_rows.length; i++) {
                this.remove_row(this.selected_rows[i]);
            }
            this.selected_rows = [];
        },
        change_table_data( evt ){
            let id = parseInt(evt.target.getAttribute('data-id'));
            let row = [];
            for (let i = 0; i < this.items.length; i++) {
                if( this.items[i]['id'] == id ){
                    row.push(this.items[i]);
                }
            }
            update(row);
        }
    }
}
</script>

<style lang='scss' scoped>
.table {

    background-color: #133458;
    padding: 10px;
    border-radius: 5px;

    &-body {
        display: flex;
        flex-wrap: wrap;
    }

    &-aside {
        flex: 0 0 300px;
    }

    &-content {
        flex: 0 0 calc(100% - 300px);
        overflow-x: scroll;
        min-height: 280px;
    }

    &-scrollable {}

    &-footer {
        padding: 10px;
        flex: 0 0 100%;
    }

    &-search-input {
        @extend .basic-input;
    }

}



.cell {
    display: flex;
    align-items: center;
    padding: 0 15px;
    height: 45px;
    border: 1px solid #ddd;

    &.-content-center {
        justify-content: center;
    }

    &.-type-1 {
        background-color: #005bff;

    }

    &.-type-2 {
        background-color: #418054;
    }

    &.-type-3 {
        background-color: transparent;
    }

    &.-full-width {
        flex: 0 0 100%;
    }

}



.columns {

    &-row {
        display: flex;
        border-radius: 5px;

        &.-wrap-items {
            flex-wrap: wrap;
        }
    }

    &-item {
        @extend .cell;
        flex: 0 0 200px;

        &-checkbox {
            margin-right: 10px;
            cursor: pointer;
        }
    }

    &-input {
        @extend .basic-input;
        @extend .basic-input,
        .-tiny;
        padding: 2px 3px;
    }
}

.table-pages {
    display: flex;

    &-item {
        flex: 0 0 auto;
        padding: 3px 5px;
        cursor: pointer;
        background-color: #0f2742;
        margin: 0 5px
    }
}

.controll-table {



    &-paging {
        margin-right: 15px;
    }

    &-num{
        margin-right: 15px;  
    }

    &-to-show{
        margin-right: 15px;
    }

    &-remove-items{
        max-width: 300px;
    }

    &-add-item{
        max-width: 200px;
        margin-right: 15px;
    }

    &-btns{
        display: flex;
    }

    &-info{
        display: flex;
        margin-bottom: 20px;
    }
}
</style>
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ef02640"],{"4ce5":function(e,t,n){"use strict";n.r(t);n("b0c0");var a=n("7a23");Object(a["A"])("data-v-a7ec8e84");var s={class:"table"},i={class:"table-body"},r={class:"table-aside"},c={class:"columns table-head"},u={class:"columns-row -wrap-items"},l={class:"columns-item -type-1 -full-width"},o={class:"columns"},b={class:"columns-row"},h={key:0,class:"columns-item -type-1 -full-width"},d=["checked","value"],g=["data-id","name","value"],p={class:"table-content"},m={class:"table-scrollable"},f={class:"columns table-head"},_={class:"columns-row"},v={class:"columns-item -type-1 -content-center"},O={class:"columns table-rows"},j={class:"columns-row"},w={class:"columns-item -type-2 -content-center"},x=["data-id","data-changed-value","value","name"],y={class:"table-footer controll-table"},k={class:"controll-table-info"},R={key:0,class:"controll-table-paging table-pages"},I=["data-page"],A={key:1,class:"controll-table-num"},C=Object(a["h"])(" Всего записей: "),D={key:2,class:"controll-table-to-show"},H=Object(a["g"])("span",null," Показать на странице: ",-1),J=Object(a["g"])("option",{value:"5"},"5",-1),B=Object(a["g"])("option",{value:"10"},"10",-1),M=Object(a["g"])("option",{value:"15"},"15",-1),F=Object(a["g"])("option",{value:"20"},"20",-1),S=[J,B,M,F],U={class:"controll-table-btns"},V={class:"controll-table-add-item"},q={class:"controll-table-remove-items"};function z(e,t,n,J,B,M){return Object(a["x"])(),Object(a["f"])("div",s,[Object(a["g"])("div",i,[Object(a["g"])("div",r,[Object(a["g"])("div",c,[Object(a["g"])("div",u,[Object(a["g"])("div",l,[Object(a["M"])(Object(a["g"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return B.search_string=e}),class:"table-search-input",type:"text",placeholder:"Найти по названию"},null,512),[[a["J"],B.search_string]])])])]),Object(a["g"])("div",o,[M.items_on_page?(Object(a["x"])(!0),Object(a["f"])(a["a"],{key:0},Object(a["D"])(M.items_on_page,(function(e){return Object(a["x"])(),Object(a["f"])("div",b,[e?(Object(a["x"])(),Object(a["f"])("div",h,[Object(a["g"])("input",{class:"columns-item-checkbox",type:"checkbox",onChange:t[1]||(t[1]=function(e){return M.select_row(e)}),checked:M.check_in_selected_row(e.id),value:e.id},null,40,d),Object(a["g"])("input",{class:"columns-input",type:"text",onInput:t[2]||(t[2]=function(e){return M.change_table_cell(e)}),onBlur:t[3]||(t[3]=function(e){return M.change_table_data(e)}),"data-id":e.id,"data-changed-value":"name",name:"row_name_for"+e.id,value:e.name},null,40,g)])):Object(a["e"])("",!0)])})),256)):Object(a["e"])("",!0)])]),Object(a["g"])("div",p,[Object(a["g"])("div",m,[Object(a["g"])("div",f,[Object(a["g"])("div",_,[(Object(a["x"])(!0),Object(a["f"])(a["a"],null,Object(a["D"])(M.colums,(function(e){return Object(a["x"])(),Object(a["f"])("div",v,Object(a["H"])(e),1)})),256))])]),Object(a["g"])("div",O,[M.only_values?(Object(a["x"])(!0),Object(a["f"])(a["a"],{key:0},Object(a["D"])(M.only_values,(function(e,n){return Object(a["x"])(),Object(a["f"])("div",j,[(Object(a["x"])(!0),Object(a["f"])(a["a"],null,Object(a["D"])(e,(function(e,s){return Object(a["x"])(),Object(a["f"])("div",w,[Object(a["g"])("input",{"data-id":n,"data-changed-value":s,class:"columns-input",type:"text",value:e,onInput:t[4]||(t[4]=function(e){return M.change_table_cell(e)}),onBlur:t[5]||(t[5]=function(e){return M.change_table_data(e)}),name:s+"_for_"+n},null,40,x)])})),256))])})),256)):Object(a["e"])("",!0)])])]),Object(a["g"])("div",y,[Object(a["g"])("div",k,[M.pagination.length?(Object(a["x"])(),Object(a["f"])("div",R,[(Object(a["x"])(!0),Object(a["f"])(a["a"],null,Object(a["D"])(M.pagination,(function(e){return Object(a["x"])(),Object(a["f"])("div",{"data-page":e,onClick:t[6]||(t[6]=function(e){M.change_page(e)}),class:"controll-table-item table-pages-item"},Object(a["H"])(e),9,I)})),256))])):Object(a["e"])("",!0),M.printed_items.length?(Object(a["x"])(),Object(a["f"])("div",A,[C,Object(a["g"])("span",null,Object(a["H"])(M.printed_items.length),1)])):Object(a["e"])("",!0),M.printed_items.length?(Object(a["x"])(),Object(a["f"])("div",D,[H,Object(a["g"])("select",{onChange:t[7]||(t[7]=function(e){M.change_num_items(e)})},S,32)])):Object(a["e"])("",!0)]),Object(a["g"])("div",U,[Object(a["g"])("div",V,[Object(a["g"])("button",{class:"btn",onClick:t[8]||(t[8]=function(e){return M.add_el()})}," Добавить элемент ")]),Object(a["g"])("div",q,[Object(a["g"])("button",{class:"btn",onClick:t[9]||(t[9]=function(e){return M.delete_rows()})}," Удалить выбранные элементы ")])])])])])}Object(a["y"])();var E=n("1da1"),G=(n("a434"),n("96cf"),n("ab3e"));function K(e){return L.apply(this,arguments)}function L(){return L=Object(E["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(G["a"])("/",{action:"table_items_set",rows:t});case 2:if(n=e.sent,!n.success){e.next=7;break}return e.abrupt("return",n.data);case 7:return e.abrupt("return",!1);case 8:case"end":return e.stop()}}),e)}))),L.apply(this,arguments)}function N(e){return P.apply(this,arguments)}function P(){return P=Object(E["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(G["a"])("/",{action:"table_items",items_ids:t});case 2:if(n=e.sent,!n.success){e.next=7;break}return e.abrupt("return",n.data);case 7:return e.abrupt("return",!1);case 8:case"end":return e.stop()}}),e)}))),P.apply(this,arguments)}function Q(e){return T.apply(this,arguments)}function T(){return T=Object(E["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(G["a"])("/",{action:"table_items_update",rows:t});case 2:if(n=e.sent,!n.success){e.next=7;break}return e.abrupt("return",n.data);case 7:return e.abrupt("return",!1);case 8:case"end":return e.stop()}}),e)}))),T.apply(this,arguments)}function W(e){return X.apply(this,arguments)}function X(){return X=Object(E["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(G["a"])("/",{action:"table_items_remove",items_ids:t});case 2:if(n=e.sent,!n.success){e.next=7;break}return e.abrupt("return",n.data);case 7:return e.abrupt("return",!1);case 8:case"end":return e.stop()}}),e)}))),X.apply(this,arguments)}var Y={data:function(){return{items:[],items_by_page:5,page:1,search_string:"",selected_rows:[]}},mounted:function(){var e=Object(E["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,N("*");case 2:this.items=e.sent;case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),computed:{page_nums:function(){if(this.items.length)return Math.ceil(this.printed_items.length/this.items_by_page)},pagination:function(){for(var e=[],t=this.page+5,n=this.page-1;n<t;n++){if(n>this.page_nums)break;n<=0||e.push(n)}return e},items_on_page:function(){if(this.items.length){for(var e=this.page*this.items_by_page,t=e-this.items_by_page,n={},a=t;a<e;a++)this.printed_items&&(n[a]=this.printed_items[a]);return n}return[]},only_values:function(){if(this.items.length){var e={};for(var t in this.items_on_page)if(void 0!==this.items_on_page[t]){var n=this.items_on_page[t].id;for(var a in e[n]={},this.items_on_page[t])"id"!==a&&"name"!==a&&(e[n][a]=this.items_on_page[t][a])}return e}},colums:function(){if(this.items.length){var e=[];for(var t in this.items[0])"name"!==t&&"id"!==t&&e.push(t);return e}return[]},printed_items:function(){var e=[];if(""!==this.search_string)for(var t=0;t<this.items.length;t++)-1!==this.items[t].name.indexOf(this.search_string)&&e.push(this.items[t]);else e=this.items;return e}},methods:{change_table_cell:function(e){for(var t=e.target.getAttribute("data-changed-value"),n=e.target.getAttribute("data-id"),a=0;a<this.items.length;a++)if(this.items[a].id==n){this.items[a][t]=e.target.value;break}},change_num_items:function(e){this.page=1,this.items_by_page=e.target.value},change_page:function(e){this.page=parseInt(e.target.getAttribute("data-page"))},select_row:function(e){if(e.target.checked)this.selected_rows.push(parseInt(e.target.value));else for(var t=0;t<this.selected_rows.length;t++)if(this.selected_rows[t]==e.target.value){delete this.selected_rows[t];break}},check_in_selected_row:function(e){for(var t in this.selected_rows)if(this.selected_rows[t]==e)return!0;return!1},add_el:function(){var e={};this.items.length;for(var t in this.search_string="",this.items[this.items.length-1])e[t]="id"!=t?"":this.items[this.items.length-1][t]+1;this.page=this.page_nums,this.items.push(e),K([e])},remove_row:function(e){for(var t=0;t<this.items.length;t++)if(this.items[t].id==e){this.items.splice(t,1);break}},delete_rows:function(){W(this.selected_rows);for(var e=0;e<this.selected_rows.length;e++)this.remove_row(this.selected_rows[e]);this.selected_rows=[]},change_table_data:function(e){for(var t=parseInt(e.target.getAttribute("data-id")),n=[],a=0;a<this.items.length;a++)this.items[a]["id"]==t&&n.push(this.items[a]);Q(n)}}};n("50c2");Y.render=z,Y.__scopeId="data-v-a7ec8e84";t["default"]=Y},"50c2":function(e,t,n){"use strict";n("65f7")},"65f7":function(e,t,n){},b0c0:function(e,t,n){var a=n("83ab"),s=n("9bf2").f,i=Function.prototype,r=i.toString,c=/^\s*function ([^ (]*)/,u="name";a&&!(u in i)&&s(i,u,{configurable:!0,get:function(){try{return r.call(this).match(c)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-6ef02640.3ddae5ad.js.map
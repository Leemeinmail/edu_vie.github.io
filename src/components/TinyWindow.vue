<template>
    <div 
    	:id='prop_id'
    	ref='fixedHeader' 
    	class='fixed-modal' 
    	:style='{left:x,top:y}' 
    	:class='[{"-hidden":!show},{"-active":active}]'
    >
    	<div
    		@mousedown='move_on($event)' 
    		@mouseup='move_off($event)' 
    		class='fixed-modal-head'
    	>
    		
    		<div class='fixed-modal-title'>
    			{{title}}
    		</div>

    		<div @click='closed()' class='fixed-modal-closed' >
    			&#10006;
    		</div>

    	</div>

    	<div class='fixed-modal-body'>
    		<div v-if='prop_content.type == "html"' v-html='prop_content.body'></div>
    		<component
				v-else-if='prop_content.type == "component"'
				:is='currentComponent'
				v-bind='prop_content.body' />
    		<div v-else >
    			Ошибка.
    		</div>
    	</div>

    </div>
</template>

<script>

import { defineAsyncComponent } from 'vue';

export default {
	props:[
		'prop_x',
		'prop_y',
		'prop_title',
		'prop_content',
		'prop_id'
	],
    data() {
        return {
        	title: (this.prop_title) ? this.prop_title : 'Заголовок',
        	content: (this.prop_content) ? this.prop_content : 'Контент',
        	x: ( this.prop_x ) ? this.prop_x + 'px' : 0,
        	y: ( this.prop_y ) ? this.prop_y + 'px' : 0, 
        	offset_x: 0, offset_y: 0, 
        	moved: false,
        	show: true,
        	active: false
        }
    },
    mounted: function(){
    	let self = this;
    	document.addEventListener('mousemove', function( evt ){
    		self.move( evt );
    	});
    	this.$refs.fixedHeader.addEventListener('mouseover', function( evt ){
    		self.active = true;
    	});
    	this.$refs.fixedHeader.addEventListener('mouseout', function( evt ){
    		self.active = false;
    	});
    },
    methods:{
    	move( evt ){
    		if( this.moved ){
    			this.x = evt.clientX + this.offset_x + 'px';
    			this.y = evt.clientY + this.offset_y + 'px';
    		}	
    	},
    	move_on(evt){
    		this.offset_x = parseInt(this.$refs.fixedHeader.getBoundingClientRect().left) - evt.clientX;
	    	this.offset_y = parseInt(this.$refs.fixedHeader.getBoundingClientRect().top) - evt.clientY;
	    	document.body.style.userSelect = 'none'; 
    		this.moved = true;
    	},
    	move_off(evt){
    		document.body.style.userSelect = 'auto'; 
    		this.moved = false;
    	},
    	closed(){
    		this.show = false;
    		this.$store.commit( 'removeTinyWindow', this.prop_id );
    	}
    },
    computed:{
    	currentComponent(){
    		return defineAsyncComponent(() =>
                import('@/components/' + this.prop_content.component + '.vue')
            );
    	}
    }
}
</script>

<style lang='scss' scoped>

.fixed-modal{
	position: fixed;
	min-width: 280px;
	max-width: 600px;
	box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.7);
	border: 1px solid #0f2742;
	border-radius: 5px;
	overflow: hidden;
	z-index: 999;
	opacity: .9;
	transition: opacity .3s;

	&.-active{
		z-index: 9991;	
		opacity: 1;
	}

	&.-hidden{
		display: none;
	}

	&-head{
		@extend .modal-with-header-head;
		cursor: move;
	}

	&-title{
		@extend .modal-with-header-title;
	}

	&-closed{
		@extend .modal-with-header-closed;
	}

	&-body{
		@extend .modal-with-header-body;
		max-height: 500px;
		overflow-y: scroll;
	}
}

</style>
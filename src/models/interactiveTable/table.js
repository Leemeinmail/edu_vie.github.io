import {send_post_request} from '@/utils/ajax.js';

export async function set(rows){
	let response = await send_post_request('/',{
		action: 'table_items_set',
		rows: rows
	});

	if( response.success ){
		return response.data;
	}else{
		return false;
	}
}

export async function get( ids ){

	let response = await send_post_request('/',{
		action: 'table_items',
		items_ids: ids
	});

	if( response.success ){
		return response.data;
	}else{
		return false;
	}

}

export async function update( rows ){
	let response = await send_post_request('/',{
		action: 'table_items_update',
		rows: rows
	});

	if( response.success ){
		return response.data;
	}else{
		return false;
	}	
}

export async function remove(ids){
	let response = await send_post_request('/',{
		action: 'table_items_remove',
		items_ids: ids
	});

	if( response.success ){
		return response.data;
	}else{
		return false;
	}
}
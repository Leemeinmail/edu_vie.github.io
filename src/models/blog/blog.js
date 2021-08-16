import {send_post_request} from '@/utils/ajax.js';

export async function get_posts_list( num, page_num ) {
	
	let response = await send_post_request(
		'/', 
		{
			action: 'blog_list',
	        num: num,
	        page: page_num
		} 
	);

	if( response.success ){
		return response.data;
	}else{
		return false;
	}

}



export async function get_single_post( id ) {
	
	let response = await send_post_request(
		'/', 
		{
			action: 'get_post',
	        id: id
		} 
	);

	if( response.success ){
		return response.data;
	}else{
		return false;
	}

}



export async function get_page_pagination( items_on_page ) {
	
	let response = await send_post_request(
		'/', 
		{
			action: 'get_pagination_pages',
            items_on_page: items_on_page
		} 
	);

	if( response.success ){
		return response.data;
	}else{
		return false;
	}

}
import {send_post_request} from '@/utils/ajax.js';

export async function get_page( page_name ) {

    let response = await send_post_request( '/', {
            action: 'get_page',
            page_name: page_name
        }
    );

    if( response.success ){
        return response.data;
    }else{
        return false;
    }
}
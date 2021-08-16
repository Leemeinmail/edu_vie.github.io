import {send_post_request} from '@/utils/ajax.js';

export async function get_menu_points() {

    let response = await send_post_request( '/', {
            action: 'get_menu_points'
        }
    );

    if( response.success ){
        return response.data;
    }else{
        return false;
    }
}
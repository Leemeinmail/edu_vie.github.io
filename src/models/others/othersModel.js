import {send_post_request} from '@/utils/ajax.js';

export async function get_accordion_data() {

    let response = await send_post_request( '/', {
            action: 'get_accordion_data'
        }
    );

    if( response.success ){
        return response.data;
    }else{
        return false;
    }
}
import axios from 'axios';

let axs = axios.create({
    baseURL: ( process.env.NODE_ENV === 'production' ) ? 
        'http://test.eclipse-studio.ru/api/' : 
        'http://localhost:8080/api/',
    timeout: 5000,
    headers: {
        'Content-type': 'application/x-www-form-urlencoded'
    }
});

export async function send_get_request( url ){
    
    let response_data = {
        success: false,
        data: ''
    }

    await axs.get(url)
    .then( response =>{
        response_data.success = true;
        response_data.data = response.data;
    }).catch( errors => {
        response_data.success = false;
        //response_data.data = response.data;
    });

    return response_data;
}

export async function send_post_request( url, data ){
    
    let response_data = {
        success: false,
        data: ''
    }

    await axs.post(url,{
        body: JSON.stringify( data )
    }).then( response =>{
        response_data.success = true;
        response_data.data = response.data;
    }).catch( errors => {
        response_data.success = false;
        //response_data.data = response.data;
    });

    return response_data;
}
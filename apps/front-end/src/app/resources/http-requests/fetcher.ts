import { getItem } from '../local-storage.resource';


const accessToken = getItem('access_token');

export const fetcher = async (url: string)=>{
    const res = await fetch(url,{
        headers:{
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        }
    });
    console.log('res',res);
    if(!res.ok){
        const info : { statusCode: number; message: string} = await res.json();
        const error = {
            message: 'An error has occured while fetching data',
            info: info,
            status: res.status
        };
     
        throw error
    }
   
    return res.json()

};
//@ts-nocheck
import { PUBLIC_API_END } from '$env/static/public';
import axios from 'axios';

export const load = async ({params})=>{
    let id = params.slug;
    const res = await axios.get(`${PUBLIC_API_END}/anime-details/${id}`)
    return {
        id: id,
        anime: res.data
    }
}
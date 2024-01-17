// @ts-nocheck
import {ANIME} from '@consumet/extensions'
export async function load({fetch,url}) {
    const gogoanime = new ANIME.Gogoanime()
    let page,type;
    if(url.searchParams.get('page')){
        page = url.searchParams.get('page');
        type = url.searchParams.get('type');
    }else{
        page = 1;
        type = 1;
    }
    const data = await gogoanime.fetchRecentEpisodes(page,type).then((data)=>{
        return data
    })
    // console.log(data);
    return {
            animes: data.results,
            currentPage: data.currentPage,
            hasNextPage: data.hasNextPage,
            totalpages: data.totalPages,
            type: type 
        }
}
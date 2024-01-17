// @ts-nocheck
import {ANIME} from '@consumet/extensions'
export async function load({fetch,url}) {
    const gogoanime = new ANIME.Gogoanime()
    let page = 1;
    let type = 1;
    if(url.searchParams.get('page')){
        page = url.searchParams.get('page');
        type = url.searchParams.get('type');
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
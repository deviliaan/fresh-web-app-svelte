import {ANIME} from '@consumet/extensions'
export async function load({fetch}) {
    const gogoanime = new ANIME.Gogoanime()
    
    const data = await gogoanime.fetchRecentEpisodes().then((data)=>{
        return data
    })
    return {
            animes: data.results,
            currentPage: data.currentPage,
            hasNextPage: data.hasNextPage,
            totalpages: data.totalPages 
        }
}
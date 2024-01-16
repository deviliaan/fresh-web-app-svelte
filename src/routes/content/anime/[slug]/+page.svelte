<script>
    // @ts-nocheck
    import { onMount } from 'svelte';
    import {episode} from '$lib/store.js'
    export let data;
    import Player from '../../../../components/Player.svelte'
    const {anime,id} = data;

    onMount(()=>{
        $episode = anime.episodesList.length;
    })
</script>

<div class="bg-slate-300">
    <div id="info" class="pl-2">
        <h2>Title: <span>{anime.animeTitle}</span></h2>
        <h1>Type: <span>{anime.type}</span></h1>
        <h1>Year: <span>{anime.releasedDate}</span></h1>
        <h1>Episode: {$episode}</h1>
        <div class="flex gap-1 flex-wrap">
            Genres:
            {#each anime.genres as genre}
                <span class="rounded-3xl bg-orange-300 px-2">{genre}</span>
            {/each}
        </div>  
    </div>
    <!-- player -->
    {#key $episode}
        <Player episode={$episode} id={id}/>
    {/key}


    <div class="flex gap-2 pt-2 px-2 justify-between">
        <button on:click={()=> $episode -= 1} class="{$episode > 1? '': 'hidden'} bg-orange-300 px-4 hover:cursor-pointer rounded-3xl">{$episode -1}</button>
        <button on:click={()=> $episode += 1} class="{anime.episodesList.length > $episode? '': 'hidden'} hover:cursor-pointer bg-orange-300 px-4 rounded-3xl">{$episode + 1}</button>
    </div>
</div>
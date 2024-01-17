<script>
    // @ts-nocheck
    import { api_end,page,type,isLoading } from "$lib/store";
    import axios from "axios";
    import { onMount } from "svelte";
    import Card from "./Card.svelte";
    import {ANIME} from '@consumet/extensions';
    $: animes = []
    onMount(async ()=> {
        $isLoading = true;
        // const res = await axios.get(`${$api_end}/recent-release?page=${$page}&type=${$type}`)
        // animes = res.data;
        const gogoanime = new ANIME.Gogoanime();
        gogoanime.fetchRecentEpisodes().then((data)=>{
            console.log(data)
            animes = data.results
        })
        $isLoading = false;
    })
</script>

<div id="content" class="grid grid-cols-2 md:grid-cols-5 sm:grid-cols-3 lg:grid-cols-6 mt-2 gap-2 px-2">
    
    <!-- {#key animes}
        {#each animes as anime}
            <Card anime={anime}/>
        {/each}
    {/key} -->
</div>
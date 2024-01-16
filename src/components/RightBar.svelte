<script>
    //@ts-nocheck
    import { api_end } from "$lib/store";
    import axios from "axios";
    import { onMount } from "svelte";
    import Card from "./Card.svelte";


    $: animes = []
    onMount(async ()=>{
        const res = await axios.get(`${$api_end}/top-airing`)
        animes = res.data;
    })
</script>

<div class="w-full h-fit border border-slate-900">
    <div class="bg-orange-300 w-full h-6">
        <p class="uppercase pl-2">popular</p>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-2 gap-1 pt-2 px-2">
        
        {#each animes as anime}
            <Card anime={anime}/>
        {/each}
    </div>
</div>
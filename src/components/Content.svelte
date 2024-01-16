<script>
    // @ts-nocheck
    import { api_end } from "$lib/store";
    import axios from "axios";
    import { onMount } from "svelte";
    import Card from "./Card.svelte";

    $: animes = []
    onMount(async ()=> {
        const res = await axios.get(`${$api_end}/recent-release`)
        animes = res.data;
    })
</script>

<div id="content" class="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 mt-2 gap-2 px-2">
    {#key animes}
        {#each animes as anime}
            <Card anime={anime}/>
        {/each}
    {/key}
</div>
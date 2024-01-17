<script>
    // @ts-nocheck
    import { api_end,page,type,isLoading } from "$lib/store";
    import { onMount } from "svelte";
    import Card from "./Card.svelte";

    export let animes;
    onMount(async ()=> {
        $isLoading = false;
        
    })
</script>

<div id="content" class="grid grid-cols-2 md:grid-cols-5 sm:grid-cols-3 lg:grid-cols-6 mt-2 gap-2 px-2">
    

    {#each animes as anime}
        <Card anime={anime}/>
    {/each}

    <!-- {#key animes}
        {#each animes as anime}
            <Card anime={anime}/>
        {/each}
    {/key} -->
</div>
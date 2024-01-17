<script>
    // @ts-nocheck
	import { api_end,isLoading } from '$lib/store';
    import axios from "axios";
    import { onMount } from "svelte";
    export let episode,id;
 
    $: embed = [];
    
    
    onMount(async ()=>{
        $isLoading = true;
        const res = await axios.get(`${$api_end}/vidcdn/watch/${id}-episode-${episode}`)
        embed = res.data.sources;
        $isLoading = false;
        
    })
    
</script>

<div class="flex justify-center items-center pt-2 flex-col">
    {#if $isLoading}
        <div class="bg-slate-600 w-[80%] h-32">
            
        </div>
    {:else}
        <div class="w-[80%] flex justify-center">
            <!-- Later to be decided -->
            <video controls>
                <source src={embed[0]?.file} track={embed[0]?.file}>
                <track kind="captions">
            </video>
        </div>
    {/if}
    
</div>
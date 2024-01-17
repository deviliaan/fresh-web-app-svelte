<script>
    // @ts-nocheck
	import { api_end,isLoading } from '$lib/store';
    import axios from "axios";
    import { onMount } from "svelte";
    export let episode,id;

    $: embed = '';
    $: sources = [];
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
        <div class="w-[80%]">
            <!-- svelte-ignore a11y-media-has-caption -->
            <video class="video-js" controls preload="auto">
                {#each embed as video}
                    <source src="{video.file}" type="video/mp4">
                {/each}
            </video>
        </div>
    {/if}
    
</div>
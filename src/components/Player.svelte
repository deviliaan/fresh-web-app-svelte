<script>
    // @ts-nocheck
	import { api_end,isLoading } from '$lib/store';
    import axios from "axios";
    import { onMount } from "svelte";
    export let episode,id;
    import VideoPlayer from 'svelte-video-player';

    $: embed = '';
    onMount(async ()=>{
        $isLoading = true;
        const res = await axios.get(`${$api_end}/vidcdn/watch/${id}-episode-${episode}`)
        embed = res.data.sources[0]
        $isLoading = false;
    })
</script>

<div class="flex justify-center pt-2 ">
    {#if $isLoading}
        <div class="bg-slate-600 w-[80%] h-32">

        </div>
    {:else}
        <div class="w-[80%]">
            <VideoPlayer source={embed.file}/>
        </div>
        
    {/if}
    
</div>
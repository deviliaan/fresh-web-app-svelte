<script>
    // @ts-nocheck
	import { api_end,isLoading } from '$lib/store';
    import axios from "axios";
    import { onMount } from "svelte";
    export let episode,id;
    import VideoPlayer from 'svelte-video-player';

    $: embed = '';
    $: sources = [];
    let selected_id = 0;
    onMount(async ()=>{
        $isLoading = true;
        const res = await axios.get(`${$api_end}/vidcdn/watch/${id}-episode-${episode}`)
        embed = res.data;
        for(let i = 0;i<res.data.sources.length; i++){
            sources.push(res.data.sources[i].file);
        }
        $isLoading = false;
    })
    const handleSelect =()=>{
        if(selected_id ==2) {
            sources = embed.sources_bk.file
        }
    }
</script>

<div class="flex justify-center items-center pt-2 flex-col">
    {JSON.stringify(sources)}
    <select class="select select-accent max-w-xs mb-2" name="" id="" bind:value={selected_id} on:select={handleSelect}>
        <option disabled selected>Pick Your Source</option>
        <option value={1}>VidCDN</option>
        <option value={2}>Backup Server</option>
    </select>
    {#if $isLoading}
        <div class="bg-slate-600 w-[80%] h-32">
            
        </div>
    {:else}
        <div class="w-[80%]">
            {#key sources}
                <VideoPlayer 
                chunkBars="true" source={sources}/>
            {/key}
        </div>
        
    {/if}
    
</div>
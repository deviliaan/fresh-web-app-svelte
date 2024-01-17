<script>
    // @ts-nocheck
	import { api_end,isLoading } from '$lib/store';
    import axios from "axios";
    import { onMount } from "svelte";
    export let episode,id;

    let isPlaying = false;
    let selectedQuality = 0
    const qualityOptions = [0,1,2]    
    $: embed = '';
    $: sources = [];
    const togglePlay=()=>{
        isPlaying = !isPlaying;
        const video = document.getElementById('v-player');
        if(isPlaying){
            video.play
        }else{
            video.pause()
        }
    }
    function changeQuality(newQuality) {
        selectedQuality = newQuality;
        const video = document.getElementById('v-player');
        const currentPlaybackTime = video.currentTime;
        video.src = getVideoSource();
        video.load();
        video.currentTime = currentPlaybackTime;
        video.play()
    }
    function getVideoSource() {
        return embed[selectedQuality]
    }
    onMount(async ()=>{
        $isLoading = true;
        const res = await axios.get(`${$api_end}/vidcdn/watch/${id}-episode-${episode}`)
        embed = res.data;
        $isLoading = false;
        
    })
    
</script>

<div class="flex justify-center items-center pt-2 flex-col">
    {#if $isLoading}
        <div class="bg-slate-600 w-[80%] h-32">
            
        </div>
    {:else}
        <div class="w-[80%]">
            
        </div>
    {/if}
    
</div>
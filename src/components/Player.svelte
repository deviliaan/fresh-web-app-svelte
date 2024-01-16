<script>
    // @ts-nocheck
	import { api_end,isLoading } from '$lib/store';
    import axios from "axios";
    import { onMount } from "svelte";
    export let episode,id;

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
        <div class="bg-slate-600 w-[90%] h-32">

        </div>
    {:else}
        <!-- svelte-ignore a11y-missing-attribute -->
        <iframe src="{embed.file}" allowfullscreen frameborder="0" sandbox="allow-forms allow-modals" allow="geolocation"></iframe>
    {/if}
    
</div>
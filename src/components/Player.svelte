<script>
    // @ts-nocheck
	import { api_end } from '$lib/store';
    import axios from "axios";
    import { onMount } from "svelte";
    export let episode,id;

    $: embed = '';
    onMount(async ()=>{
        const res = await axios.get(`${$api_end}/vidcdn/watch/${id}-episode-${episode}`)
        embed = res.data.sources[0]
    })
</script>

<div class="flex justify-center pt-2">
    <iframe src="{embed.file}" frameborder="0"></iframe>
</div>
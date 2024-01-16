<script>
    // @ts-nocheck
    import { api_end } from "$lib/store";
    import axios from "axios";
    import { onMount } from "svelte";

    $: animes = []
    onMount(async ()=> {
        const res = await axios.get(`${$api_end}/recent-release`)
        animes = res.data;
    })
</script>

<div id="content">
    {JSON.stringify(animes)}
</div>
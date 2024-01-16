<script>
    import Content from '../components/Content.svelte'
    import Pgainator from '../components/Pgainator.svelte';
    import {page, type} from '$lib/store';
    
</script>

<div id="content" class="bg-slate-600 grid sm:grid-cols-1 md:grid-cols-2"> 
    {#key $page}
        {#key $type}
            <Content />
            <Pgainator />
        {/key}
        
    {/key}
</div>
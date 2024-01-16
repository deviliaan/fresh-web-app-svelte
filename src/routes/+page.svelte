<script>
    import Content from '../components/Content.svelte'
    import Pgainator from '../components/Pgainator.svelte';
    import {page, type, isLoading} from '$lib/store';
    
</script>

<div id="content" class="bg-slate-600 grid sm:grid-cols-1 md:grid-cols-2"> 
    {#if $isLoading}
        <div class="w-full h-[100vh] flex items-center justify-center">
            Loading..
        </div>
    {:else}
        {#key $page}
            {#key $type}
                <Content />
                <Pgainator />
            {/key}
            
        {/key}
    {/if}
    
</div>
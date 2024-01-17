<script>
    export let data;
	import RightBar from './../components/RightBar.svelte';
    import Content from '../components/Content.svelte'
    import Pgainator from '../components/Pgainator.svelte';
    import {page, type, isLoading} from '$lib/store';
    
</script>

<div id="content" class="bg-slate-600 flex flex-col"> 
    
    
    <div class="grid grid-cols-4">
        <div class="col-span-4 md:col-span-3 flex flex-col">
            {#if $isLoading}
                <div class="w-full h-[100vh] flex justify-center mt-8">
                    Loading...
                </div>
            {/if} 
            <Content animes={data.animes}/>
            <Pgainator />
        </div>
        <div class="sm:hidden hidden md:block mt-2 mr-2">
            <RightBar />
        </div>
    </div>            
                
</div>
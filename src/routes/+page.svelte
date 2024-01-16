<script>
	import RightBar from './../components/RightBar.svelte';
    import Content from '../components/Content.svelte'
    import Pgainator from '../components/Pgainator.svelte';
    import {page, type, isLoading} from '$lib/store';
    
</script>

<div id="content" class="bg-slate-600 flex flex-col"> 
    
    
    <div class="grid grid-cols-4">
        <div class="col-span-3"> 
            {#key $page}
                {#key $type}
                    <Content />
                    <Pgainator />
                {/key}
            {/key}
                    
        </div>
        <div class="sm:hidden md:block mt-2 mr-2">
            <RightBar />
        </div>
    </div>            
                
</div>
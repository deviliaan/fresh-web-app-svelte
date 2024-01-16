<script>
    //@ts-nocheck;
    import {page} from '$lib/store';
</script>

<div class="w-full flex justify-center gap-1 pt-2 pb-4 h-16">
    {#if $page > 1 && $page > 2}
        <button on:click={()=> $page = $page - 2} class="bg-orange-300 font-bold rounded-lg px-4 hover:cursor-pointer">{$page - 2}</button>
    {/if}
    {#if $page > 1}
        <button on:click={()=> $page = $page - 1} class="bg-orange-300 font-bold rounded-lg px-4 hover:cursor-pointer">{$page - 1}</button>
    {/if}
    <button class="bg-orange-100 font-bold rounded-lg px-4 hover:cursor-pointer">{$page}</button>
    <button class="bg-orange-300 font-bold rounded-lg px-4 hover:cursor-pointer" on:click={()=> $page = $page + 1}>{$page + 1}</button>
    <button on:click={()=> $page = $page + 2} class="bg-orange-300 font-bold rounded-lg px-4 hover:cursor-pointer">{$page + 2}</button>
</div>
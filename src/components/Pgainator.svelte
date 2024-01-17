<script>
    // @ts-nocheck
    export let page;
    import {type} from '$lib/store'
</script>

<div class="w-full flex justify-center items-center gap-1 pt-2 mb-4 h-16">
    {#if page > 1 && page > 2}
        <a href="/?page={page - 2}&type={$type}" class="bg-orange-300 font-bold rounded-lg px-4 hover:cursor-pointer">{page - 2}</a>
    {/if}
    {#if page > 1}
        <a href="/?page={page - 1}&type={$type}" class="bg-orange-300 font-bold rounded-lg px-4 hover:cursor-pointer">{page - 1}</a>
    {/if}
    <a href="/?page={page}" class="bg-orange-100 font-bold rounded-lg px-4 hover:cursor-pointer">{page}</a>
    <a href="?page={page + 1}&type={$type}" class="bg-orange-300 font-bold rounded-lg px-4 hover:cursor-pointer" on:click={()=> page = page + 1}>{page + 1}</a>
    <a href="?page={page + 2}&type={$type}" class="bg-orange-300 font-bold rounded-lg px-4 hover:cursor-pointer">{page + 2}</a>
</div>
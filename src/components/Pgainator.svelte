<script>
    // @ts-nocheck
    export let page,type;
    
</script>

<div class="w-full flex justify-center items-center gap-1 pt-2 mb-4 h-16">
    <div class="join">
        {#if page != 1 && page != 2}
            <a href="#" class="join-item btn btn-md">{page - 2}</a>
        {/if}
        {#if page != 1}
            <a href="#" class="join-item btn btn-md">{page - 1}</a>
        {/if}
        <a href="#" class="join-item btn btn-md btn-active">{page}</a>
        <a href="#" class="join-item btn btn-md">{page + 1}</a>
        <a href="#" class="join-item btn btn-md">{page + 2}</a>
    </div>
</div>
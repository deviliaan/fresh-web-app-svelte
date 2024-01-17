<script>
    //@ts-nocheck
    export let anime;
    import {type} from '$lib/store'
    import {useLazyImage as lazyImage} from "svelte-lazy-image";
    
</script>

<a href="/content/anime/{anime.id}" class="relative w-[100%] border border-[black] pb-2 hover:curosor-pointer">
    <img class="object-cover h-[92%]" use:lazyImage data-src="{anime.image}" alt="{anime.title}" srcset="">
    <div class="w-full h-10">
        <h2 class="pl-2 text-white font-bold truncate">{anime.title}</h2>
    </div>
    {#if anime.episodeNumber}
        <div class="absolute top-0 left-0">
            <span class="bg-orange-300 px-2 mx-1 rounded-xl">Episode {anime.episodeNumber}</span>
        </div>
    {/if}
    {#if $type }
        <div class="absolute right-0 bottom-[12%]">
            <span class="bg-orange-300 px-2 mx-1 rounded-xl">{$type == 1? 'sub': $type == 2? 'dub': 'ona'}</span>
        </div>
    {/if}
</a>
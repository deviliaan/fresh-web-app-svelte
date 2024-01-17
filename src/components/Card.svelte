<script>
    //@ts-nocheck
    export let anime,type;
    import {useLazyImage as lazyImage} from "svelte-lazy-image";
    
</script>

<a href="#" class="flex w-auto flex-col bg-base-100 shadow-xl">
    <img class="w-full object-cover h-[90%]" src="{anime.image}" alt="" srcset="">
    <div class="w-full">
        <p class="truncate pl-2">{anime.title}</p>
        <div class="flex flex-wrap gap-1 p-3">
            <div class="badge badge-accent">Episode {anime.episodeNumber}</div>
            <div class="badge badge-warning">{type == 1? 'SUB': type ==2? 'DUB': 'ONA'}</div>
        </div>
    </div>
</a>
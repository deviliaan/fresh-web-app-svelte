<script>
    //@ts-nocheck
    export let anime;
</script>

<a href="#" class="relative w-fit border border-[black] pb-2 hover:curosor-pointer">
    <img class="object-cover h-[240px]" src="{anime.animeImg}" alt="{anime.animeTitle}" srcset="">
    <div class="">
        <h2 class="pl-2 text-white font-bold truncate">{anime.animeTitle}</h2>
    </div>
    <div class="absolute top-0 left-0">
        <span class="bg-orange-300 px-2 mx-1 rounded-xl">Episode {anime.episodeNum}</span>
    </div>
    <div class="absolute right-0 bottom-8">
        <span class="bg-orange-300 px-2 mx-1 rounded-xl">{anime.subOrDub}</span>
    </div>
</a>
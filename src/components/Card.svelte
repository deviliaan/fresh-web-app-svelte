<script>
    //@ts-nocheck
    export let anime;
</script>

<a href="#" class="relative w-[100%] border border-[black] pb-2 hover:curosor-pointer">
    <img class="object-cover h-[92%]" src="{anime.animeImg}" alt="{anime.animeTitle}" srcset="">
    <div class="w-full h-10">
        <h2 class="pl-2 text-white font-bold truncate">{anime.animeTitle}</h2>
    </div>
    <div class="absolute top-0 left-0">
        <span class="bg-orange-300 px-2 mx-1 rounded-xl">Episode {anime.episodeNum}</span>
    </div>
    <div class="absolute right-0 bottom-[10%]">
        <span class="bg-orange-300 px-2 mx-1 rounded-xl">{anime.subOrDub}</span>
    </div>
</a>
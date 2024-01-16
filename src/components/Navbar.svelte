<script>
    // @ts-nocheck

import {type,page,currentUrl} from '$lib/store';

const handleClick =()=>{
    let mobileMenu = document.getElementById('mobile-menu')
    mobileMenu?.classList.toggle('hidden')
}
const hadnleChinese =()=> {
    type.set(3)
    page.set(1)
    if($currentUrl == 'episode'){
        location.href = '/'
    }
}
const handleSub =()=>{
    type.set(1)
    page.set(1)
    if($currentUrl == 'episode'){
        window.location.href = '/'
    }
}
const handleDub =()=>{
    type.set(2)
    page.set(1)
    if($currentUrl == 'episode'){
        location.href = '/'
    }
}
</script>

<nav class="bg-slate-800 p-4">
    <div class="mx:auto flex items-center">
        <button class="text-white font-bold text-lg hover:cursor-pointer">
            <img src="/logo.png" class="h-10" alt="Logo" srcset="">
        </button>
        <div class="hidden md:flex space-x-4 ml-auto">
            <button on:click={handleSub} class="text-white hover:text-gray-300 uppercase">Subbed</button>
            <button on:click={handleDub} class="text-white hover:text-gray-300 uppercase">Dubbed</button>
            <button on:click={hadnleChinese} class="text-white hover:text-gray-300 uppercase">Chinese</button>
        </div>
        <!-- Mobile Menu Button -->
        <div class="md:hidden ml-auto pr-2">
            <button on:click={handleClick} class="text-white">
                <span class="material-icons md-48">tune</span>
            </button>
        </div>
    </div>
    <!-- Mobile Menu -->
    <div id="mobile-menu" class="hidden md:hidden mt-4 w-full flex flex-col">
        <button on:click={handleSub} class="block text-white py-2 px-4 hover:bg-slate-600 rounded-lg uppercase">Subbed</button>
        <button on:click={handleDub} class="block text-white py-2 px-4 hover:bg-slate-600 rounded-lg uppercase">Dubbed</button>
        <button on:click={hadnleChinese} class="block text-white py-2 px-4 
        hover:bg-slate-600 rounded-lg uppercase">Chinese</button>
    </div>
</nav>
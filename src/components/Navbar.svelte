<script>
import {type,page} from '$lib/store';

const handleClick =()=>{
    let mobileMenu = document.getElementById('mobile-menu')
    mobileMenu?.classList.toggle('hidden')
}
const hadnleChinese =()=> {
    type.set(3)
    page.set(1)
}
const handleSub =()=>{
    type.set(1)
    page.set(1)
}
const handleDub =()=>{
    type.set(2)
    page.set(1)
}
</script>

<nav class="bg-slate-800 p-4">
    <div class="container mx:auto flex justify-between items-center">
        <a href="#" class="text-white font-bold text-lg">
            <img src="https://picsum.photos/200" class="w-10 h-10 rounded-full" alt="" srcset="">
        </a>
        <div class="hidden md:flex space-x-4">
            <a href="#" class="text-white hover:text-gray-300 uppercase">Subbed</a>
            <a href="#" class="text-white hover:text-gray-300 uppercase">Dubbed</a>
            <a href="#" class="text-white hover:text-gray-300 uppercase">Chinese</a>
        </div>
        <!-- Mobile Menu Button -->
        <div class="md:hidden">
            <button on:click={handleClick} class="text-white">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-76h7"></path>
                </svg>
            </button>
        </div>
    </div>
    <!-- Mobile Menu -->
    <div id="mobile-menu" class="hidden md:hidden mt-4">
        <button on:click={handleSub} class="block text-white py-2 px-4 border-b border-gray-300 uppercase">Subbed</button>
        <button on:click={handleDub} class="block text-white py-2 px-4 border-b border-gray-300 uppercase">Dubbed</button>
        <button on:click={hadnleChinese} class="block text-white py-2 px-4 border-b border-gray-300 uppercase">Chinese</button>
    </div>
</nav>
<script>
    // @ts-nocheck

const handleClick =()=>{
    let mobileMenu = document.getElementById('mobile-menu')
    mobileMenu?.classList.toggle('hidden')
}


</script>

<nav class="bg-slate-800 p-4">
    <div class="mx:auto flex items-center">
        <button class="text-white font-bold text-lg hover:cursor-pointer">
            <img src="/logo.png" class="h-10" alt="Logo" srcset="">
        </button>
        <div class="hidden md:flex space-x-4 ml-auto">
            <a  href="/?page=1&type=1"  class="text-white hover:text-gray-300 uppercase">Dubbed</a>
            <a  href="/?page=1&type=2" class="text-white hover:text-gray-300 uppercase">Subbed</a>
            <a  href="/?page=1&type=3" class="text-white hover:text-gray-300 uppercase">Chinese</a>
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
        <a href="/?page=1&type=1" class="block text-white py-2 px-4 hover:bg-slate-600 rounded-lg uppercase">Subbed</a>
        <a href="/?page=1&type=2"  class="block text-white py-2 px-4 hover:bg-slate-600 rounded-lg uppercase">Dubbed</a>
        <a href="/?page=1&type=3"  class="block text-white py-2 px-4 
        hover:bg-slate-600 rounded-lg uppercase">Chinese</a>
    </div>
</nav>
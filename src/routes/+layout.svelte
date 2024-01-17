<script>
    export let data;
	import { onMount } from 'svelte';
    import '../app.css';
    import {type} from '$lib/store'
    import Navbar from '../components/Navbar.svelte';

onMount(()=>{
    type.set(data.type)
})
</script>

<section>
    <div class="h-[100vh]">
        <Navbar />
        <slot />
    </div>
</section>
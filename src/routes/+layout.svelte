<script>
    import '../app.css';
    import Navbar from '../components/Navbar.svelte';
</script>

<section>
    <div class="h-[100vh]">
        <Navbar />
        <slot />
    </div>
</section>
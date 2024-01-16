<script>
    import '../app.css';
    import Navbar from '../components/Navbar.svelte';
</script>

<section>
    <div class="">
        <Navbar />
        <slot />
    </div>
</section>
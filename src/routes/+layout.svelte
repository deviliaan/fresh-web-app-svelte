<script>
    import '../app.css';
    import Navbar from '../components/Navbar.svelte';
</script>
<svelte:head>
    <link rel="stylesheet" href="https://unpkg.com/css.gg@2.0.0/icons/css/options.css">
</svelte:head>
<section>
    <div class="">
        <Navbar />
        <slot />
    </div>
</section>
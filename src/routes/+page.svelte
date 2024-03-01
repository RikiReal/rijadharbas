<script lang="ts">
	import HeroSection from '$lib/components/HeroSection.svelte';
	import AboutMeSection from '$lib/components/AboutMeSection.svelte';
	import ServicesOfferedSection from '$lib/components/ServicesOfferedSection.svelte';
	import ContactMeSection from '$lib/components/ContactMeSection.svelte';
</script>

<HeroSection />
<main class="mx-5 lg:mx-80 my-8">
	<AboutMeSection />
	<ServicesOfferedSection />
	<ContactMeSection />
</main>

<script lang="ts">
	import HeroSection from '$lib/components/HeroSection.svelte';
	import AboutMeSection from '$lib/components/AboutMeSection.svelte';
	import ServicesOfferedSection from '$lib/components/ServicesOfferedSection.svelte';
	import ContactMeSection from '$lib/components/ContactMeSection.svelte';
</script>

<HeroSection />
<main class="my-10 flex flex-col space-y-52 lg:space-y-96">
	<AboutMeSection />
	<ServicesOfferedSection />
	<ContactMeSection />
</main>

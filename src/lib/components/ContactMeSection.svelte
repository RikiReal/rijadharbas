<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		var d = document,
			w = 'https://tally.so/widgets/embed.js',
			v = function () {
				'undefined' != typeof Tally
					? Tally.loadEmbeds()
					: d.querySelectorAll('iframe[data-tally-src]:not([src])').forEach(function (e) {
							e.src = e.dataset.tallySrc;
						});
			};
		if ('undefined' != typeof Tally) v();
		else if (d.querySelector('script[src="' + w + '"]') == null) {
			var s = d.createElement('script');
			(s.src = w), (s.onload = v), (s.onerror = v), d.body.appendChild(s);
		}

		const twitterContainer = document.getElementById('twitter-container')!;
		const twitterScript = document.createElement('script');
		twitterScript.async = true;
		twitterScript.src = 'https://platform.twitter.com/widgets.js';
		twitterContainer.appendChild(twitterScript);
	});
</script>

<section id="contact-me" aria-labelledby="contact-heading" class="px-5">
	<div class="flex flex-col items-center justify-start gap-20 md:mx-20 2xl:gap-56">
		<div class="grid grid-cols-1 lg:grid-cols-2">
			<div class="prose flex flex-col space-y-7 lg:prose-lg xl:prose-xl">
				<h2 id="contact-heading" class="mb-8 text-4xl font-bold">Let's have a talk</h2>
				<!-- Contact invitation text -->
				<p>
					Got a project in mind or just want to say hi? Let's make something amazing together. Reach
					out and let the collaboration begin!
				</p>

				<!-- Social media links -->
				<h3 class="text-xl font-semibold">Follow me!</h3>
				<div class="flex items-center justify-between lg:justify-start lg:gap-20">
					<span id="twitter-container">
						<a
							href="https://twitter.com/RijadICP?ref_src=twsrc%5Etfw"
							class="twitter-follow-button"
							data-size="large"
							data-show-screen-name="false"
							data-dnt="true"
							aria-label="Follow @RijadICP on X"
							data-show-count="false">Follow @RijadICP</a
						>
					</span>

					<a
						href="https://www.linkedin.com/in/rijad-harbas-198279260"
						aria-label="Follow me on LinkedIn"
						target="_blank"
					>
						<img class="h-10 w-10" src="/LI-In-Bug.png" alt="LinkedIn Logo" />
					</a>
					<a href="https://github.com/RikiReal" aria-label="Follow me on GitHub" target="_blank">
						<img class="h-10 w-10" src="/github-mark.svg" alt="GitHub logo" />
					</a>
				</div>
				<!-- ICP Banner (add link to canister around it) -->
				<div class="flex items-center justify-center md:justify-start">
					<img
						src="/banner.svg"
						alt="100% On-Chain ICP Banner"
						class="max-w-xs object-cover lg:max-w-sm"
					/>
				</div>
			</div>
			<div id="tallyform-container">
				<iframe
					data-tally-src="https://tally.so/embed/3EXq9o?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
					loading="lazy"
					width="100%"
					height="531"
					frameborder="0"
					marginheight="0"
					marginwidth="0"
					title="Contact Me!"
				></iframe>
			</div>
		</div>
	</div>
</section>

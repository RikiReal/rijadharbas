<script>
	import '../app.css';
</script>

<header class="sticky top-0 z-50 bg-transparent">
	<nav aria-labelledby="primary-navigation" class="navbar">
		<div class="navbar-start">
			<a href="/" class="flex-none">
				<img src="/logo.svg" alt="Website logo" class="h-10 w-10 lg:h-20 lg:w-20" />
			</a>
		</div>

		<div class="navbar-end">
			<div aria-hidden="true" class="dropdown dropdown-end">
				<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
					<svg
						viewBox="0 0 26 26"
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						stroke="rgb(0, 0, 0)"
					>
						<path
							d="M 1 23 L 25 23 M 1 1 L 25 1 M 1 12 L 25 12"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<!-- We can't use <button> here because Safari has a bug that prevents the button from being focused. -->
				<ul
					tabindex="0"
					class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
				>
					<li><a href="/#about-me">About Me</a></li>
					<li><a href="/#services">Services</a></li>
					<li><a href="/#contact-me">Contact</a></li>
				</ul>
			</div>
			<ul id="primary-navigation" class="menu menu-horizontal hidden gap-5 lg:flex">
				<li><a href="/#about-me" class="btn btn-outline">About Me</a></li>
				<li><a href="/#services" class="btn btn-outline">Services</a></li>
				<li><a href="/#contact-me" class="btn btn-outline">Contact</a></li>
			</ul>
		</div>
	</nav>
</header>

<slot />

<footer class="footer justify-around bg-neutral p-10 text-neutral-content">
	<nav>
		<h6 class="footer-title">Legal</h6>
		<a class="link-hover link" href="legal">Legal Notice</a>
		<a class="link-hover link" href="https://www.svgrepo.com" target="_blank"
			>Modified code brackets icon by SVG Repo</a
		>
		<!-- https://creativecommons.org/licenses/by/4.0/ -->
	</nav>
	<nav>
		<h6 class="footer-title">Company</h6>
		<a
			class="link-hover link"
			href="https://firmen.wko.at/rijad-harbas-rijad-harbas/wien/?firmaid=941629d1-79b4-4c04-a19c-6024d58c623c&suchbegriff=rijad%20harbas"
			target="_blank">WKO Firmen A-Z</a
		>
		<a
			class="link-hover link"
			href="https://www.wkoecg.at/Ecg.aspx?FirmaID=2d2056f8-ea9b-478b-96d6-7fa6c348d5ee"
			target="_blank"
		>
			<img src="/ecg.jpg" alt="WKO ECG Banner" />
		</a>
	</nav>
	<aside>
		<p>Copyright © 2024 - All right reserved by Rijad Harbas</p>
	</aside>
</footer>

<script>
	import '../app.css';
</script>

<header class="sticky top-0 z-50 bg-transparent">
	<nav aria-labelledby="primary-navigation" class="navbar absolute">
		<div class="navbar-start">
			<a href="/" class="flex-none">
				<img src="" alt="Logo" />
			</a>
		</div>

		<div class="navbar-end">
			<div class="dropdown dropdown-end">
				<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h8m-8 6h16"
						/></svg
					>
				</div>
				<ul
					class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
				>
					<li><a href="#about-me">About Me</a></li>
					<li><a href="#services">Services</a></li>
					<li><a href="#contact-me">Contact</a></li>
				</ul>
			</div>
			<ul id="primary-navigation" class="menu menu-horizontal hidden lg:flex">
				<li><a href="#about-me">About Me</a></li>
				<li><a href="#services">Services</a></li>
				<li><a href="#contact-me">Contact</a></li>
			</ul>
		</div>
	</nav>
</header>

<slot />

<footer>
	<nav class="footer">
		<a href="legal-notice.html">Legal Notice</a>
		<a href="data-privacy.html">Data Privacy</a>
		Vectors and icons by <a href="https://www.svgrepo.com" target="_blank">SVG Repo</a>
		Modified code icon by https://creativecommons.org/licenses/by/4.0/
	</nav>
</footer>

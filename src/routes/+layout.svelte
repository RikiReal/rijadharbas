<script>
	import '../app.css';
</script>

<header>
	<nav aria-labelledby="primary-navigation">
		<a href="/">
			<img src="" alt="Logo" />
		</a>
		<ul id="primary-navigation">
			<li><a href="#about-me">About Me</a></li>
			<li><a href="#services">Services</a></li>
			<li><a href="#contact-me">Contact</a></li>
		</ul>
	</nav>
</header>

<slot />

<footer>
	<nav>
		<a href="legal-notice.html">Legal Notice</a>
		<a href="data-privacy.html">Data Privacy</a>
	</nav>
</footer>

<script>
</script>

<style>
	@media screen and (max-width: 768px) {
		main {
			position: relative;
			max-width: 100vw;
			max-height: 100vh;
			padding: 0.5vw;
			margin: 0 auto;
			box-sizing: border-box;
			margin-bottom: 100px;
		}
	}
	@media screen and (min-width: 1024px) {
		main {
			position: relative;
			max-width: 75vw;
			max-height: 100vh;
			padding: 0.5vw;
			margin: 0 auto;
			box-sizing: border-box;
			margin-bottom: 100px;
		}
	}
</style>

<main>
	<slot></slot>
</main>

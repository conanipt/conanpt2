<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<style>
</style>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<div>
	<h1>{status}</h1>
</div>

{#if dev && error.stack}
	<p>{error.message}</p>
	<pre >
		{error.stack}
	</pre>
{:else if !error.stack}
	<h2>{error.message}</h2>
{/if}
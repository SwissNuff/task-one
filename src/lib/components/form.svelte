<script>
	let { children } = $props();
</script>

<div class="container">
	{@render children()}
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		background: white;
		border: 1px solid #eeeeee;
		border-radius: 6px;
		padding: 10px 0;
		max-width: 370px;
	}
</style>

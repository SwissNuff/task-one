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
		width: fit-content;
	}
</style>

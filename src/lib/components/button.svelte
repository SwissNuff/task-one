<script lang="ts">
	let { children }: { children?: any } = $props();
</script>

<button>
	{@render children()}
</button>

<style>
	button {
		padding: 10px 20px;
		width: 340px;
		height: 40px;
		gap: 10px;
		font-size: 14px;
		font-weight: 400;
		border-radius: 4px;
		cursor: pointer;
		line-height: 130%;
		background-color: #ffce22;
	}

	button:hover {
		background-color: #ffd84d;
	}

	button:active {
		background-color: #ffce22;
	}
</style>

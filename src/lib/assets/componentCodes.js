export let buttonCode = `<script lang="ts">
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
		border: none;
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
</style>`;

export let formCode = `<script>
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
`;

export let checkBoxCode = `<script lang="ts">
	let { children }: { children?: any } = $props();
</script>

{#if children}
	<label class="checkbox-container">
		{@render children?.()}

		<label class="checkbox-wrapper">
			<input type="checkbox" checked />
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-check-icon lucide-check checkmark">
				<path d="M20 6 9 17l-5-5" /></svg
			>
		</label>
	</label>
{:else}
	<label class="checkbox-wrapper">
		<input type="checkbox" checked />
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="lucide lucide-check-icon lucide-check checkmark">
			<path d="M20 6 9 17l-5-5" /></svg
		>
	</label>
{/if}

<style>
	.checkbox-container {
		display: flex;
		background: white;
		padding: 8px 15px 8px 22px;
		justify-content: space-between;
		max-width: 370px;
		height: 42px;
		flex-grow: 1;
	}

	.checkmark {
		position: absolute;
		top: 0;
		left: 0;
		height: 25px;
		width: 25px;
		color: white;
		background-color: white;
		border-radius: 6px;
		border: 1px solid #cdcdcd;
	}

	.checkbox-container:hover input ~ .checkmark {
		border: 1px solid #bdbdbd;
		color: #e3e3e3;
	}

	.checkbox-wrapper {
		display: block;
		position: relative;
		padding-left: 40px;
		margin-bottom: 20px;
		cursor: pointer;
		user-select: none;
	}

	.checkbox-wrapper input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
		height: 0;
		width: 0;
	}

	.checkbox-wrapper input:active ~ .checkmark {
		outline-offset: 2px;
		box-shadow: 0 0 0 3px #246af62b;
		border: 1px solid #bdbdbd;
	}

	.checkbox-wrapper input:checked ~ .checkmark {
		background-color: #2469f6;
		border-color: #2469f6;
		color: white;
	}

	.checkbox-wrapper input:checked ~ .checkmark:hover {
		background-color: #5087f8;
		border-color: #5087f8;
		color: white;
	}

	.checkbox-wrapper input:checked:active ~ .checkmark {
		box-shadow: 0 0 0 3px #246af62b;
	}

	.checkbox-wrapper input:disabled ~ .checkmark {
		background-color: #f5f5f5;
		border-color: #e0e0e0;
		cursor: not-allowed;
		opacity: 0.6;
	}

	.checkbox-wrapper input:disabled {
		cursor: not-allowed;
	}
</style>
`;

export let checkBoxCodeExample = `<Checkbox>Task 1</Checkbox>`;

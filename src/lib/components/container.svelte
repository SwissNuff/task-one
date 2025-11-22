<script lang="ts">
	import Button from './button.svelte';

	let { children, codeContent } = $props();

	let active = $state('preview');
</script>

<div class="flex">
	<button
		class="px-2 transition
			{active === 'preview' ? ' font-semibold' : 'border-transparent text-gray-500 hover:text-black'}"
		onclick={() => (active = 'preview')}
	>
		Preview
	</button>

	<button
		class="px-2 transition
			{active === 'code' ? ' font-semibold' : 'border-transparent text-gray-500 hover:text-black'}"
		onclick={() => (active = 'code')}
	>
		Code
	</button>
</div>

{#if active === 'preview'}
	<div
		class="min-h-40 rounded-lg p-6 border border-gray-200 bg-gray-50 flex justify-center items-center"
	>
		{@render children()}
	</div>
{:else}
	<pre class="rounded-lg border border-gray-200 bg-gray-50 px-8 py-5"><code>{codeContent}</code
		></pre>
{/if}

<script>
	import Button from '$lib/components/button.svelte';
	import Checkbox from '$lib/components/checkbox.svelte';
	import Container from '$lib/components/container.svelte';
	import Form from '$lib/components/form.svelte';
	import Separator from '$lib/components/separator.svelte';
	import {
		buttonCode,
		checkBoxCode,
		checkBoxCodeExample,
		formCode
	} from '$lib/assets/componentCodes.js';
</script>

<section class=" max-w-5xl p-18 m-auto space-y-4">
	<h1 class="font-bold text-5xl">Form Styling</h1>
	<p class="text-gray-500">
		This exam was built using the <span class="text-gray-900">Svelte framework</span>. I chose
		Svelte because
		<span class="text-gray-900">it stays very close to plain HTML, CSS, and JavaScript</span>,
		making the code easy to read and review (almost like going through a regular HTML/CSS file)
		while still giving me the ability to create reusable components.
		<br />
		<br />
		I normally work with Tailwind, but to stay aligned with the technologies requested for this exam,
		I used pure CSS for all main components.

		<br />
		<br />

		I also did not abstract the font colors to names so that it can be easily seen what colors I've
		used.

		<br />
		<br />
		Had fun taking this exam. Took a bit longer than expected but happy to be challenged.

		<br />
		<br />
		Hope you like what I've made. - Arian Rey (@swissnuff)
	</p>
	<h2 class="font-bold text-2xl">Form</h2>
	<Container codeContent={formCode}>
		<Form>
			<Checkbox>All pages</Checkbox>
			<Separator />
			<Checkbox>Page 1</Checkbox>
			<Checkbox>Page 2</Checkbox>
			<Checkbox>Page 3</Checkbox>
			<Checkbox>Page 4</Checkbox>
			<Separator />
			<div class="flex justify-center py-2.5 px-[15px]">
				<Button>Done</Button>
			</div>
		</Form>
	</Container>

	<h2 class="font-bold text-2xl">Button</h2>
	<Container codeContent={buttonCode}>
		<Button>Done</Button>
	</Container>

	<h2 class="font-bold text-2xl">Checkbox</h2>
	<p class="text-gray-500">
		I used a Lucide icon for the checkmark because it closely matches the one in Figma and gives me
		full control over the SVG’s appearance. When the checkbox has no child props, like <code
			>{`<Checkbox />`}</code
		>, it displays its default look. But if child props are provided, such as
		<code>{`<Checkbox>Task 1</Checkbox>`}</code>, it displays the styled version shown in
		<code>Checkbox with children values</code>.
	</p>
	<Container codeContent={checkBoxCode}>
		<Checkbox />
	</Container>

	<h2 class="font-bold text-2xl">Checkbox with children values</h2>
	<Container codeContent={checkBoxCodeExample}>
		<Checkbox>Task 1</Checkbox>
	</Container>
</section>

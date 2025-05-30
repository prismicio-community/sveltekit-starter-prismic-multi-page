<script lang="ts">
	import { SliceSimulator } from '@slicemachine/adapter-sveltekit/simulator';
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';

	const { slices } = $props();
</script>

<SliceSimulator let:slices>
	<SliceZone {slices} {components} />
</SliceSimulator>

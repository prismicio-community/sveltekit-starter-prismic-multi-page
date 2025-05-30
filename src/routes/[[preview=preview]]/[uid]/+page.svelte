<script lang="ts">
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';

	const { data } = $props();
</script>

<SliceZone slices={data.page.data.slices} {components} />

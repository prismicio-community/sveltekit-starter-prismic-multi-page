<script lang="ts">
	import { SliceZone } from '@prismicio/svelte';

	import { components } from '$lib/slices';

	let { data } = $props();
</script>

<SliceZone slices={data.page.data.slices} {components} />

<script lang="ts">
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
</script>

<SliceZone slices={data.page.data.slices} {components} />

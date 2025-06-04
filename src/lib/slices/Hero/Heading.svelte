<script lang="ts">
	import type { Snippet } from 'svelte';
	import Heading from '$lib/components/Heading.svelte';

	type Props = {
		children: Snippet;
	};

	const { children }: Props = $props();
</script>

<Heading as="h2" size="xl" className="mb-4 mt-12 first:mt-0 last:mb-0">
	{@render children()}
</Heading>

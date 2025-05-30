<script lang="ts">
	import type { Snippet } from 'svelte';
	import Heading from '../Heading.svelte';

	type Props = {
		children: Snippet;
	};

	const { children }: Props = $props();
</script>

<Heading tag="h1" class="mb-7 mt-12 first:mt-0 last:mb-0">
	{@render children()}
</Heading>

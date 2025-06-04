<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { RTLinkNode } from '@prismicio/client';
	import { PrismicLink } from '@prismicio/svelte';

	type Props = {
		node: RTLinkNode;
		children: Snippet;
	};

	const { node, children }: Props = $props();
</script>

<PrismicLink field={node.data} class="underline decoration-1 underline-offset-2">
	{@render children()}
</PrismicLink>

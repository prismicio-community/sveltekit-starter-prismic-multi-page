<script lang="ts">
	import type { RTLinkNode } from '@prismicio/client';
	import { PrismicLink } from '@prismicio/svelte';

	interface Props {
		node: RTLinkNode;
		children: import('svelte').Snippet;
	}

	let { node, children }: Props = $props()
</script>

<PrismicLink field={node.data} class="underline decoration-1 underline-offset-2">
	{@render children?.()}
</PrismicLink>

<script lang="ts">
	import type { RTLinkNode } from '@prismicio/client';
	import { PrismicLink } from '@prismicio/svelte';

	export let node: RTLinkNode;
</script>

<PrismicLink field={node.data} class="underline decoration-1 underline-offset-2">
	<slot />
</PrismicLink>

<script>
	import { PrismicLink } from '@prismicio/svelte';

	/** @type {import("@prismicio/client").RTLinkNode} */
	export let node;
</script>

<PrismicLink field={node.data} class="underline decoration-1 underline-offset-2">
	<slot />
</PrismicLink>

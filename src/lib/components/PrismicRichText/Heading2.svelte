<script lang="ts">
	import Heading from '../Heading.svelte';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<Heading tag="h2" size="md" class="mb-7 mt-12 first:mt-0 last:mb-0">
	{@render children?.()}
</Heading>

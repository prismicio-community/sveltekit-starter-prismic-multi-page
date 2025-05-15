<script lang="ts">
	import Heading from '$lib/components/Heading.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<Heading tag="h2" size="xl" class="mb-4 mt-12 first:mt-0 last:mb-0">
	{@render children?.()}
</Heading>

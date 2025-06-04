<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};

	const { children }: Props = $props();
</script>

<li class="mb-1 list-disc pl-1 last:mb-0 md:pl-2">{@render children()}</li>

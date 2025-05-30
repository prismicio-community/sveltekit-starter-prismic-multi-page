<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};

	const { children }: Props = $props();
</script>

<ul class="mb-7 pl-4 last:mb-0 md:pl-6">{@render children()}</ul>

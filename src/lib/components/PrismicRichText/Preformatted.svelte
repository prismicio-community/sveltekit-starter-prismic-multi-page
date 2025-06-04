<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};

	const { children }: Props = $props();
</script>

<pre class="mb-7 rounded-sm bg-slate-100 p-4 text-sm last:mb-0 md:p-8 md:text-lg">
	<code>{@render children()}</code>
</pre>

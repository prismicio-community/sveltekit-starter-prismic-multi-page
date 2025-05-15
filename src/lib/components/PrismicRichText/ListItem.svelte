<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<li class="mb-1 list-disc pl-1 last:mb-0 md:pl-2">{@render children?.()}</li>

<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<ul class="mb-7 pl-4 last:mb-0 md:pl-6">{@render children?.()}</ul>

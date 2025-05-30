<script lang="ts">
	import type { Snippet } from 'svelte';
	import clsx from 'clsx';

	type Props = {
		tag?: string;
		yPadding?: 'sm' | 'base' | 'lg';
		collapsible?: boolean;
		class?: string;
		children: Snippet;
	};

	const {
		tag = 'section',
		yPadding = 'base',
		collapsible = true,
		class: className,
		children,
		...restProps
	}: Props = $props();
</script>

<svelte:element
	this={tag}
	data-collapsible={collapsible}
	{...restProps}
	class={clsx(
		'px-6',
		yPadding === 'sm' && 'py-8 md:py-10',
		yPadding === 'base' && 'py-20 md:py-28',
		yPadding === 'lg' && 'py-32 md:py-48',
		className
	)}
>
	<div class="mx-auto w-full max-w-6xl">{@render children()}</div>
</svelte:element>

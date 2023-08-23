<script>
	import clsx from 'clsx';

	export let tag = 'section';
	export let yPadding = 'base';
	export let collapsible = true;
</script>

<svelte:element
	this={tag}
	data-collapsible={collapsible}
	{...$$restProps}
	class={clsx(
		'px-6',
		yPadding === 'sm' && 'py-8 md:py-10',
		yPadding === 'base' && 'py-20 md:py-28',
		yPadding === 'lg' && 'py-32 md:py-48',
		$$props.class
	)}
>
	<div class="mx-auto w-full max-w-6xl"><slot /></div>
</svelte:element>

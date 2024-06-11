<script lang="ts">
	import clsx from 'clsx';

	export let tag = 'h1';
	export let size: 'sm' | 'md' | 'lg' | 'xl' = 'lg';
</script>

<svelte:element
	this={tag}
	class={clsx(
		'font-semibold leading-tight tracking-tight md:leading-tight',
		size === 'xl' && 'text-5xl md:text-7xl',
		size === 'lg' && 'text-4xl md:text-5xl',
		size === 'md' && 'text-3xl md:text-4xl',
		size === 'sm' && 'text-xl md:text-2xl',
		$$props.class
	)}
>
	<slot />
</svelte:element>

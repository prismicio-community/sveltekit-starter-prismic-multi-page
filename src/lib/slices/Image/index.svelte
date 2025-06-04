<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import { PrismicImage } from '@prismicio/svelte';
	import clsx from 'clsx';
	import Bounded from '$lib/components/Bounded.svelte';

	type Props = {
		slice: Content.ImageSlice;
		index: number;
	};

	const { slice, index }: Props = $props();
</script>

<Bounded tag="section" class={clsx('bg-white', index === 0 && 'pt-0 md:pt-0')}>
	{#if isFilled.image(slice.primary.image)}
		<div class="bg-gray-100">
			<PrismicImage field={slice.primary.image} sizes="100vw" class="w-full" />
		</div>
	{/if}
</Bounded>

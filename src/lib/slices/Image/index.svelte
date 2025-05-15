<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import { PrismicImage } from '@prismicio/svelte';
	import clsx from 'clsx';

	import Bounded from '$lib/components/Bounded.svelte';

	interface Props {
		slice: Content.ImageSlice;
		index: number;
	}

	let { slice, index }: Props = $props();
</script>

<Bounded
	tag="section"
	class={clsx('bg-white', index === 0 && 'pt-0 md:pt-0')}
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	{#if isFilled.image(slice.primary.image)}
		<div class="bg-gray-100">
			<PrismicImage field={slice.primary.image} sizes="100vw" class="w-full" />
		</div>
	{/if}
</Bounded>

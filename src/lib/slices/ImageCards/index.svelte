<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import { PrismicText } from '@prismicio/svelte';
	import Bounded from '$lib/components/Bounded.svelte';
	import ImageCard from './ImageCard.svelte';
	import Heading from '$lib/components/Heading.svelte';

	type Props = {
		slice: Content.ImageCardsSlice;
	};

	const { slice }: Props = $props();
</script>

<Bounded tag="section" class="bg-white">
	<div class="grid gap-12">
		{#if isFilled.richText(slice.primary.heading)}
			<Heading class="text-center">
				<PrismicText field={slice.primary.heading} />
			</Heading>
		{/if}
		<ul class="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
			{#each slice.primary.cards as card (card.image.url)}
				<ImageCard {card} />
			{/each}
		</ul>
	</div>
</Bounded>

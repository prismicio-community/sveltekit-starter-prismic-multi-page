<script>
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';
	import * as prismic from '@prismicio/client';

	import PrismicRichText from '$lib/components/PrismicRichText.svelte';

	/** @type {import("@prismicio/client").Content.ImageCardsSliceDefaultPrimaryCardsItem} */
	export let card;
</script>

<li class="grid gap-8">
	{#if prismic.isFilled.image(card.image)}
		<div class="bg-gray-100">
			{#if prismic.isFilled.link(card.buttonLink)}
				<PrismicLink field={card.buttonLink} tabindex={-1}>
					<PrismicImage field={card.image} sizes="100vw" class="w-full" />
				</PrismicLink>
			{:else}
				<PrismicImage field={card.image} sizes="100vw" class="w-full" />
			{/if}
		</div>
	{/if}
	<div class="leading-relaxed">
		<PrismicRichText field={card.text} />
	</div>
	{#if prismic.isFilled.link(card.buttonLink)}
		<div>
			<PrismicLink field={card.buttonLink} class="font-semibold">
				{card.buttonText || 'More Info'}
			</PrismicLink>
		</div>
	{/if}
</li>

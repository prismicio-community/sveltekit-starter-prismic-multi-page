<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';

	import PrismicRichText from '$lib/components/PrismicRichText.svelte';

	export let card: Content.ImageCardsSliceDefaultPrimaryCardsItem;
</script>

<li class="grid gap-8">
	{#if isFilled.image(card.image)}
		<div class="bg-gray-100">
			{#if isFilled.link(card.buttonLink)}
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
	{#if isFilled.link(card.buttonLink)}
		<div>
			<PrismicLink field={card.buttonLink} class="font-semibold">
				{card.buttonText || 'More Info'}
			</PrismicLink>
		</div>
	{/if}
</li>

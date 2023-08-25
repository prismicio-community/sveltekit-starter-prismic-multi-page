<script>
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';
	import * as prismic from '@prismicio/client';

	import PrismicRichText from '$lib/components/PrismicRichText.svelte';

	/** @type {import("@prismicio/client").Content.ImageCardsSliceDefaultItem} */
	export let item;
</script>

<li class="grid gap-8">
	{#if prismic.isFilled.image(item.image)}
		<div class="bg-gray-100">
			{#if prismic.isFilled.link(item.buttonLink)}
				<PrismicLink field={item.buttonLink} tabindex={-1}>
					<PrismicImage field={item.image} sizes="100vw" class="w-full" />
				</PrismicLink>
			{:else}
				<PrismicImage field={item.image} sizes="100vw" class="w-full" />
			{/if}
		</div>
	{/if}
	<div class="leading-relaxed">
		<PrismicRichText field={item.text} />
	</div>
	{#if prismic.isFilled.link(item.buttonLink)}
		<div>
			<PrismicLink field={item.buttonLink} class="font-semibold">
				{item.buttonText || 'More Info'}
			</PrismicLink>
		</div>
	{/if}
</li>

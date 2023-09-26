<script>
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';
	import * as prismic from '@prismicio/client';

	import Bounded from '$lib/components/Bounded.svelte';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';

	/** @type {import("@prismicio/client").Content.TextWithImageSliceWithButton} */
	export let slice;
</script>

<Bounded as="section" class="bg-slate-900 text-teal-50" data-slice-variation={slice.variation}>
	<div class="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
		<div>
			<PrismicRichText field={slice.primary.text} />
			{#if prismic.isFilled.link(slice.primary.buttonLink)}
				<PrismicLink field={slice.primary.buttonLink}>
					{slice.primary.buttonText}
				</PrismicLink>
			{/if}
		</div>
		<div>
			{#if prismic.isFilled.image(slice.primary.image)}
				<div class="bg-gray-100">
					<PrismicImage field={slice.primary.image} sizes="100vw" class="w-full" />
				</div>
			{/if}
		</div>
	</div>
</Bounded>

<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import { PrismicImage } from '@prismicio/svelte';

	import Bounded from '$lib/components/Bounded.svelte';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';

	export let slice: Content.TextWithImageSlice;
</script>

<Bounded
	as="section"
	class="bg-white"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
		<div>
			<PrismicRichText field={slice.primary.text} />
		</div>
		<div>
			{#if isFilled.image(slice.primary.image)}
				<div class="bg-gray-100">
					<PrismicImage field={slice.primary.image} sizes="100vw" class="w-full" />
				</div>
			{/if}
		</div>
	</div>
</Bounded>

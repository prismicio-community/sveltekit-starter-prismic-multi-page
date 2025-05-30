<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import { PrismicImage } from '@prismicio/svelte';
	import Bounded from '$lib/components/Bounded.svelte';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';

	type Props = {
		slice: Content.TextWithImageSlice;
	};

	const { slice }: Props = $props();
</script>

<Bounded tag="section" class="bg-white">
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

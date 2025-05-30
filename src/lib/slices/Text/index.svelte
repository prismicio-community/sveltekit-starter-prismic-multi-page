<script lang="ts">
	import type { Content } from '@prismicio/client';
	import clsx from 'clsx';
	import Bounded from '$lib/components/Bounded.svelte';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';

	type Props = {
		slice: Content.TextSlice;
	};

	const { slice }: Props = $props();
</script>

<Bounded tag="section" class="bg-white leading-relaxed">
	<div class={clsx(slice.variation === 'twoColumns' && 'md:columns-2 md:gap-6')}>
		<PrismicRichText field={slice.primary.text} />
	</div>
</Bounded>

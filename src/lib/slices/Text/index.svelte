<script>
	import clsx from 'clsx';

	import Bounded from '$lib/components/Bounded.svelte';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';

	/** @type {import("@prismicio/client").Content.TextSlice} */
	export let slice;
</script>

<Bounded
	as="section"
	class="bg-white leading-relaxed"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class={clsx(slice.variation === 'twoColumns' && 'md:columns-2 md:gap-6')}>
		<PrismicRichText field={slice.primary.text} />
	</div>
</Bounded>

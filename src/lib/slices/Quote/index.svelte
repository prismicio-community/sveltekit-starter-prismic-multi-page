<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import { PrismicText } from '@prismicio/svelte';
	import clsx from 'clsx';

	import Bounded from '$lib/components/Bounded.svelte';

	export let slice: Content.QuoteSlice;
</script>

<Bounded
	as="section"
	class="bg-white"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	{#if isFilled.richText(slice.primary.quote)}
		<figure class="grid gap-6">
			<blockquote>
				<p
					class={clsx(
						'text-4xl font-medium leading-tight md:text-5xl md:leading-tight',
						!isFilled.keyText(slice.primary.source) && 'text-center'
					)}
				>
					<span class="-ml-3.5 select-none text-slate-400 md:-ml-5"> &ldquo; </span>
					<PrismicText field={slice.primary.quote} />
					<span class="select-none text-slate-400">&rdquo;</span>
				</p>
			</blockquote>
			{#if isFilled.keyText(slice.primary.source)}
				<figcaption class="text-right">
					&mdash; {slice.primary.source}
				</figcaption>
			{/if}
		</figure>
	{/if}
</Bounded>

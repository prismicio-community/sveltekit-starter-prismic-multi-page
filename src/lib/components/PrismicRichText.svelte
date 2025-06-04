<script lang="ts">
	import type { RichTextField } from '@prismicio/client';
	import { PrismicRichText, type RichTextComponents } from '@prismicio/svelte';
	import Heading1 from './PrismicRichText/Heading1.svelte';
	import Heading2 from './PrismicRichText/Heading2.svelte';
	import Heading3 from './PrismicRichText/Heading3.svelte';
	import Paragraph from './PrismicRichText/Paragraph.svelte';
	import OList from './PrismicRichText/OList.svelte';
	import OListItem from './PrismicRichText/OListItem.svelte';
	import List from './PrismicRichText/List.svelte';
	import ListItem from './PrismicRichText/ListItem.svelte';
	import Preformatted from './PrismicRichText/Preformatted.svelte';
	import Strong from './PrismicRichText/Strong.svelte';
	import Hyperlink from './PrismicRichText/Hyperlink.svelte';

	type Props = {
		field: RichTextField;
		components?: RichTextComponents;
	};

	const { field, components = {} }: Props = $props();
</script>

<PrismicRichText
	{field}
	components={{
		heading1: Heading1,
		heading2: Heading2,
		heading3: Heading3,
		paragraph: Paragraph,
		oList: OList,
		oListItem: OListItem,
		list: List,
		listItem: ListItem,
		preformatted: Preformatted,
		strong: Strong,
		hyperlink: Hyperlink,
		...components
	}}
/>

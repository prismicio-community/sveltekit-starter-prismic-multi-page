<script lang="ts">
	import '../app.css';
	import { PrismicPreview } from '@prismicio/svelte/kit';
	import { page } from '$app/state';
	import { repositoryName } from '$lib/prismicio';
	import Header from '$lib/components/Header.svelte';
	import type { LayoutProps } from './$types';

	const { data, children }: LayoutProps = $props();
</script>

<svelte:head>
	<title>{page.data.title}</title>
	{#if page.data.meta_description}
		<meta name="description" content={page.data.meta_description} />
	{/if}
	{#if page.data.meta_title}
		<meta name="og:title" content={page.data.meta_title} />
	{/if}
	{#if page.data.meta_image}
		<meta name="og:image" content={page.data.meta_image.url} />
		<meta name="twitter:card" content="summary_large_image" />
	{/if}
</svelte:head>
<div class="text-slate-800">
	<Header navigation={data.navigation} settings={data.settings} />
	<main>{@render children()}</main>
</div>
<PrismicPreview {repositoryName} />

<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicLink, PrismicText } from '@prismicio/svelte';
	import Bounded from './Bounded.svelte';

	type Props = {
		settings: Content.SettingsDocument;
		navigation: Content.NavigationDocument;
	};

	const { settings, navigation }: Props = $props();
</script>

<Bounded tag="header" yPadding="sm">
	<div class="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 leading-none">
		<a href="/" class="text-xl font-semibold tracking-tight">
			<PrismicText field={settings.data.siteTitle} />
		</a>
		<nav>
			<ul class="flex flex-wrap gap-6 md:gap-10">
				{#each navigation.data?.links as item (item.label)}
					<li class="font-semibold tracking-tight text-slate-800">
						<PrismicLink field={item.link}>
							<PrismicText field={item.label} />
						</PrismicLink>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</Bounded>

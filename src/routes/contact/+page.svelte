<script lang="ts">
	import { accentColor } from '$lib';
</script>

<svelte:head>
	<title>S ✺ Contact</title>
</svelte:head>

{#snippet link(text: string, url?: string)}
	{#if url}
		<a style="color: {$accentColor};" href={url}>{text}</a>
	{:else}
		<span style="color: {$accentColor};">{text}</span>
	{/if}
{/snippet}

<p class="font-sans text-neutral-4 text-lg tracking-wider w-full my-12 text-center">
	whatever it is, <br /> for {@render link('projects', '/projects')}, for {@render link('collaboration')}, <br /> or for even talking {@render link(
		'tech over tea'
	)}, <br /> feel free to reach out to me!
</p>

<div class="font-display text-neutral-2 text-3xl line-height-loose w-full text-center flex flex-col items-center">
	<p class="">contact me at</p>
	<button onclick={() => (window.location.href = 'tel:+919500088697')} class="my-4 text-4xl cursor-pointer">☎️</button>
	<button
		onclick={() => (window.location.href = 'tel:+919500088697')}
		style="text-decoration-color: {$accentColor};"
		class="font-display text-4xl cursor-pointer underline underline-2 underline-wavy underline-offset-4">9500088697</button
	>
	<!-- <span class="text-2xl py-4 w-fit">( &#x361;&#x275B;&#x202F;&#x35C;&#x296; &#x361;&#x275B;)</span> -->

	<button
		onclick={() => (window.location.href = 'mailto:freelance.schidster@gmail.com?subject="I really need to talk about something."')}
		class="mb-2 mt-4 text-4xl cursor-pointer">📧</button
	>
	<button
		onclick={() => (window.location.href = 'mailto:freelance.schidster@gmail.com?subject="I really need to talk about something"')}
		style="text-decoration-color: {$accentColor};"
		class="font-display text-3xl cursor-pointer underline underline-2 underline-wavy underline-offset-4"
		>freelance.schidster@gmail.com</button
	>
	<!-- <span class="text-2xl py-4 w-fit">( &#x361;&#x275B;&#x202F;&#x35C;&#x296; &#x361;&#x275B;)</span> -->
</div>

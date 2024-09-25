<script lang="ts">
	import { goto } from '$app/navigation';
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
	whatever it is, <br /> for your {@render link('projects', '/projects')}, for {@render link('collaboration')}, <br /> for even for {@render link(
		'tech over tea'
	)}, <br /> feel free to reach out to me!
</p>

<div class="font-display text-neutral-2 text-3xl line-height-loose w-full text-center flex flex-col items-center">
	<p class="">call, message or whatsapp</p>
	<button onclick={() => (window.location.href = 'tel:+919500088697')} class="my-4 text-4xl cursor-pointer">☎️</button>
	<button
		onclick={() => (window.location.href = 'tel:+919500088697')}
		style="text-decoration-color: {$accentColor};"
		class="font-display text-4xl cursor-pointer underline underline-dotted underline-offset-4">9500088697</button
	>
	<!-- <span class="text-2xl py-4 w-fit">( &#x361;&#x275B;&#x202F;&#x35C;&#x296; &#x361;&#x275B;)</span> -->
</div>

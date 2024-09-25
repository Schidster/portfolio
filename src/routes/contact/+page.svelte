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

<p class="font-sans text-neutral-4 text-lg tracking-wider w-full text-center">
	whatever it is, <br /> for your {@render link('projects', '/projects')}, for {@render link('collaboration')}, <br /> for even for {@render link(
		'tech over tea'
	)}, <br /> feel free to reach out to me!
</p>

<div class="font-display text-neutral-2 text-3xl line-height-loose w-full text-center mt-20 flex flex-col items-center">
	<p class="my-0">call, message or whatsapp</p>
	<button onclick={() => (window.location.href = 'tel:+919500088697')} class="bg-transparent my-4 border-0 text-4xl cursor-pointer"
		>☎️</button
	>
	<button
		onclick={() => (window.location.href = 'tel:+919500088697')}
		class="bg-transparent font-display text-4xl decoration-none text-white b-0 cursor-pointer">9500088697</button
	>
	<p class="tracking-tight text-2xl">( ͡❛ ͜ʖ ͡❛)</p>
</div>

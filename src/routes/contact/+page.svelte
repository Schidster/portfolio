<script lang="ts">
	import { accentColor } from '$lib';
</script>

<svelte:head>
	<title>S ✺ Contact</title>
	<script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
</svelte:head>

{#snippet link(text: string, url?: string)}
	{#if url}
		<a style="color: {$accentColor};" href={url}>{text}</a>
	{:else}
		<span style="color: {$accentColor};">{text}</span>
	{/if}
{/snippet}

<p class="font-sans text-neutral-4 text-lg tracking-wider w-full my-6 pl-5">
	whatever it is, <br /> for {@render link('projects', '/projects')}, for {@render link('collaboration')}, <br /> or for even talking {@render link(
		'tech over tea'
	)}, <br /> feel free to reach out to me!
</p>

<div class="font-display text-neutral-2 text-3xl line-height-loose pl-5 pb-6 pt-3">
	<p class="text-4xl">contact me at</p>
	<div>
		<button onclick={() => (window.location.href = 'tel:+919500088697')} class="text-2xl cursor-pointer">☎️</button>
		<button
			onclick={() => (window.location.href = 'tel:+919500088697')}
			style="text-decoration-color: {$accentColor};"
			class="font-display text-2xl cursor-pointer underline underline-2 underline-wavy underline-offset-4">9500088697</button
		>
	</div>
	<!-- <span class="text-2xl py-4 w-fit">( &#x361;&#x275B;&#x202F;&#x35C;&#x296; &#x361;&#x275B;)</span> -->
	<div>
		<button
			onclick={() => (window.location.href = 'mailto:freelance.schidster@gmail.com?subject="I really need to talk about something."')}
			class="text-2xl cursor-pointer">📧</button
		>
		<button
			onclick={() => (window.location.href = 'mailto:freelance.schidster@gmail.com?subject="I really need to talk about something"')}
			style="text-decoration-color: {$accentColor};"
			class="font-display text-2xl cursor-pointer underline underline-2 underline-wavy underline-offset-4"
			>freelance.schidster@gmail.com</button
		>
	</div>
	<!-- <span class="text-2xl py-4 w-fit">( &#x361;&#x275B;&#x202F;&#x35C;&#x296; &#x361;&#x275B;)</span> -->
</div>

<section class="pl-5 pb-6">
	<div
		class="badge-base LI-profile-badge"
		data-locale="en_US"
		data-size="medium"
		data-theme="dark"
		data-type="VERTICAL"
		data-vanity="siddarth-s-59a21231b"
		data-version="v1"
	>
		<a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/siddarth-s-59a21231b?trk=profile-badge"></a>
	</div>
</section>

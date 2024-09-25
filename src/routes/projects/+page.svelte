<script lang="ts">
	import { accentColor } from '$lib';
	import Tech from '../tech.svelte';
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<svelte:head>
	<script
		src="https://emgithub.com/embed-v2.js?target=https%3A%2F%2Fgithub.com%2FSchidster%2Fhomespan%2Fblob%2Fmain%2Fhomespan.ino%23L6-L18&style=mono-blue&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on"
	></script>
	<title>S ✺ Projects</title>
</svelte:head>

{#snippet title(text: string, emoji: string, url: string)}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
	<h2 onclick={() => (window.location.href = url)} class="font-sans text-4xl px-6 mb-4 text-neutral-200 w-fit">
		{emoji}
		<span class="underline underline-dotted underline-3 underline-offset-4" style="text-decoration-color: {$accentColor};">{text}</span>
	</h2>
{/snippet}
{#snippet description(text: string)}
	<p class="font-sans text-sm px-6 text-neutral-400 tracking-wider line-height-relaxed">
		{@html text}
	</p>
{/snippet}
{#snippet techUsed(techs: string[])}
	<div class="px-5 mt-2 mb-4 flex flex-wrap">
		<!-- <p class="font-bold text-neutral-2 pb-2">Tech Stack</p> -->
		{#each techs as tech}
			<Tech {tech} />
		{/each}
	</div>
{/snippet}
{#snippet viewButton(url: string)}
	<button
		onclick={() => (window.location.href = url)}
		class="font-mono text-xs font-bold ml-6 px-2 py-1 mb-6 mt-3 b-4 text-neutral-2 rounded-md bg-dark-5"
		style="border-color: {$accentColor}">VIEW PROJECT</button
	>
{/snippet}

{@render title('Cholai', '🥬', 'https://velli.pages.dev/919999999999/shop?n=stranger&s=MGPREAST&new')}
{@render techUsed(['svelte-kit', 'supabase', 'postgres', 'nodejs', 'cloudflare', 'unocss'])}
{@render description('A vegetable ordering platform, accessed primarily through WhatsApp chatbot.')}
{@render viewButton('https://velli.pages.dev/919999999999/shop?n=stranger&s=MGPREAST&new')}
<embed src="https://velli.pages.dev/919999999999/shop?n=stranger&s=MGPREAST&new" class="w-full overflow-x-clip h-100" />
<div class="h-12"></div>

{@render title('Complaints', '💥', 'https://complaints.vercel.app/')}
{@render techUsed(['svelte-kit', 'supabase', 'vercel', 'sql'])}
{@render description("An anonymous platform where people can complain about what they don't like and others can rant about it!")}
{@render viewButton('https://complaints.vercel.app')}
<embed src="https://complaints.vercel.app/feed/all" class="w-full overflow-x-clip h-100" />
<div class="h-12"></div>

{@render title('DeCalculaè', '🧮', 'https://decalculae.vercel.app/')}
{@render techUsed(['svelte', 'tailwind css', 'vercel'])}
{@render description('A really good looking calculator.')}
{@render viewButton('https://decalculae.vercel.app')}
<embed src="https://decalculae.vercel.app" class="w-full overflow-x-clip h-110" />
<div class="h-12"></div>

{@render title('HomeSpan', '🤖', 'https://github.com/Schidster/homespan')}
{@render techUsed(['arduino', 'esp-32', 'homekit'])}
<p class="font-sans px-6 text-neutral-400 tracking-wider line-height-relaxed">
	Home Automation using <a href="https://github.com/HomeSpan/HomeSpan" style="color: {$accentColor};">HomeSpan</a>, Apple HomeKit and an
	<b>esp-32</b>
	board. Can extend to multiple fans, lights and any other device using drivers.<br />
	<span class="text-xs line-height-snug"> I was motivated by my laziness to switch off the fan while in bed :) </span>
</p>
{@render viewButton('https://github.com/Schidster/homespan')}
<iframe
	title="homespan.ino"
	frameborder="0"
	scrolling="no"
	style="width:100%; height:352px;"
	allow="clipboard-write"
	src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2FSchidster%2Fhomespan%2Fblob%2Fmain%2Fhomespan.ino%23L6-L18&style=mono-blue&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on"
></iframe>
<div class="h-12"></div>

{@render title('Colors', '🎨', 'https://suchi-colors.netlify.ap')}
{@render techUsed(['svelte', 'tailwind css', 'vercel'])}
{@render description(
	'Tired of scrolling videos all day? Get more tired by scrolling infinite colors! <b>Try scolling and tapping below...</b>'
)}
{@render viewButton('https://suchi-colors.netlify.ap')}
<embed src="https://suchi-colors.netlify.app" class="w-full overflow-x-clip h-60" />
<div class="h-6"></div>

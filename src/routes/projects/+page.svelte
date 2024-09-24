<script>
	import { accentColor } from '$lib';
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<svelte:head>
	<script
		src="https://emgithub.com/embed-v2.js?target=https%3A%2F%2Fgithub.com%2FSchidster%2Fhomespan%2Fblob%2Fmain%2Fhomespan.ino%23L6-L18&style=mono-blue&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on"
	></script>
</svelte:head>
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<h2 onclick={() => (window.location.href = 'https://decalculae.vercel.app')} class="font-sans px-6 text-neutral-200 w-fit">
	🧮 <span class="underline underline-dotted underline-3 underline-offset-4" style="text-decoration-color: {$accentColor};">DeCalculaè</span
	>
</h2>
<p class="font-sans px-6 text-neutral-400 tracking-wider line-height-relaxed">A really good looking calculator.</p>
<button
	onclick={() => (window.location.href = 'https://decalculae.vercel.app')}
	class="font-mono font-bold ml-6 px-2 py-1 mb-4 b-4 text-neutral-2 rounded-md bg-dark-5"
	style="border-color: {$accentColor}">VIEW PROJECT</button
>
<embed src="https://decalculae.vercel.app" class="w-full overflow-x-clip h-110" />
<div class="h-6"></div>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<h2 onclick={() => (window.location.href = 'https://github.com/Schidster/homespan')} class="font-sans px-6 text-neutral-200 w-fit">
	🤖 <span class="underline underline-dotted underline-3 underline-offset-4" style="text-decoration-color: {$accentColor};">HomeSpan</span>
</h2>
<p class="font-sans px-6 text-neutral-400 tracking-wider line-height-relaxed">
	Home Automation using <a href="https://github.com/HomeSpan/HomeSpan" style="color: {$accentColor};">Homespan</a>, Apple HomeKit and an
	<b>esp-32</b>
	board. Can extend to multiple fans, lights and any other device using drivers.<br />
	<span class="text-xs line-height-snug"> I was motivated by my laziness to switch off the fan while in bed :) </span>
</p>
<button
	onclick={() => (window.location.href = 'https://github.com/Schidster/homespan')}
	class="font-mono font-bold ml-6 px-2 py-1 mb-4 b-3 text-neutral-2 rounded-md bg-dark-5"
	style="border-color: {$accentColor}">VIEW PROJECT</button
>
<iframe
	title="homespan.ino"
	frameborder="0"
	scrolling="no"
	style="width:100%; height:352px;"
	allow="clipboard-write"
	src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2FSchidster%2Fhomespan%2Fblob%2Fmain%2Fhomespan.ino%23L6-L18&style=mono-blue&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on"
></iframe>
<div class="h-6"></div>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<h2 onclick={() => (window.location.href = 'https://suchi-colors.netlify.app')} class="font-sans px-6 text-neutral-200 w-fit">
	🎨 <span class="underline underline-dotted underline-3 underline-offset-4" style="text-decoration-color: {$accentColor};"
		>Color Scroll</span
	>
</h2>
<p class="font-sans px-6 text-neutral-400 tracking-wider line-height-relaxed">
	Tired of scrolling videos all day? Get more tired by scrolling infinite colors! <b>Try scolling and tapping below...</b>
</p>
<button
	onclick={() => (window.location.href = 'https://suchi-colors.netlify.app')}
	class="font-mono font-bold ml-6 px-2 py-1 mb-4 b-3 text-neutral-2 rounded-md bg-dark-5"
	style="border-color: {$accentColor}">VIEW PROJECT</button
>
<embed src="https://suchi-colors.netlify.app" class="w-full overflow-x-clip" />
<div class="h-6"></div>

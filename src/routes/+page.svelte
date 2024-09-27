<script lang="ts">
	import { goto } from '$app/navigation';
	import { accentColor, getTypewriter } from '$lib';
	import { get } from 'svelte/store';
	import { onMount } from 'svelte';
	import Tech from './tech.svelte';

	const names = ['Siddarth.', 'Schidster.', 'a Programmer.', 'a Developer.'];
	const timePerLetter = 100;
	const name = getTypewriter('Siddarth.', timePerLetter);

	async function startTyping() {
		while (true) {
			const nextName = names[Math.round(Math.random() * names.length - 1)];
			const totalLength = get(name).length + nextName.length;
			name.set(nextName);
			await new Promise((r) => setTimeout(r, timePerLetter * totalLength + 1400));
		}
	}

	onMount(() => startTyping());
</script>

<svelte:head>
	<title>S ✺ Portfolio</title>
	<link rel="prefetch" href="/projects" />
	<link rel="prefetch" href="/contact" />
	<link rel="preconnect" href="https://velli.pages.dev" />
</svelte:head>

<section class="font-mono text-lg pl-8 text-neutral-2 w-full bg-dark-7 py-4">
	<p>
		<span class="opacity-30 text-sm">1 &nbsp</span>i am <span class="font-bold text-xl">{$name}</span><span
			class="text-3xl input-cursor"
			style="color: {$accentColor};">▮</span
		>
	</p>
	<p><span class="opacity-30 text-sm">2 &nbsp;</span>i code sometimes.</p>
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<p>
		<span class="opacity-30 text-sm">3 &nbsp;</span>for myself and
		<span style="color: {$accentColor}" onclick={() => goto('/projects')}>others</span>.
	</p>
</section>

<section class="font-sans tracking-wider line-height-relaxed text-neutral-4 px-5 my-8">
	<p>I specialize in solutions for small and medium-sized startups. I can make</p>
	<ul class="pl-6 py-2">
		<li>• Websites</li>
		<li>• AI Integration</li>
		<li>• Mobile apps</li>
		<li>• Admin apps</li>
		<li>• Database Management</li>
	</ul>
	<h3 class="mt-4 mb-2 text-xl text-neutral-2">Technologies I Use</h3>
	<div class="flex flex-wrap">
		{#each ['javascript', 'svelte', 'firebase', 'docker', 'aws', 'typescript', 'nodejs', 'sql', 'postgres', 'python', 'cloudflare', 'supabase', 'tailwind css', 'dns', 'terraform', 'sst', 'unocss', 'svelte-kit'] as tech (tech)}
			<Tech {tech} />
		{/each}
	</div>
	<br />
	<p>I prioritize using latest frameworks and technologies, to ensure speed and reliability.</p>
</section>

<style>
	@keyframes blink {
		0% {
			opacity: 1;
		}
		40% {
			opacity: 1;
		}
		60% {
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}
	.input-cursor {
		animation: blink 0.6s linear infinite alternate;
	}
</style>

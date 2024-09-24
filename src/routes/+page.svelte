<script lang="ts">
	import { goto } from '$app/navigation';
	import { accentColor, getTypewriter } from '$lib';
	import { get } from 'svelte/store';
	import { onMount } from 'svelte';

	const names = ['Siddarth.', 'Schidster.', 'a Programmer.', 'a Developer.'];
	const timePerLetter = 100;
	const name = getTypewriter('Siddarth.', timePerLetter);

	async function startTyping() {
		while (true) {
			const nextName = names[Math.round(Math.random() * names.length)];
			const totalLength = get(name).length + nextName.length;
			name.set(nextName);
			await new Promise((r) => setTimeout(r, timePerLetter * totalLength + 1400));
		}
	}

	onMount(() => startTyping());
</script>

<section class="font-mono text-lg pl-8 text-neutral-200 w-full bg-dark-7 py-4">
	<p>
		<span class="opacity-30 text-sm">1 &nbsp</span>I am <span class="font-bold text-xl">{$name}</span><span
			class="text-3xl input-cursor"
			style="color: {$accentColor};">▮</span
		>
	</p>
	<p><span class="opacity-30 text-sm">2 &nbsp;</span>I code.</p>
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<p>
		<span class="opacity-30 text-sm">3 &nbsp;</span>For myself and
		<span style="color: {$accentColor}" onclick={() => goto('/projects')}>others</span>.
	</p>
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

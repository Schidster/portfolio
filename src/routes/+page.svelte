<script lang="ts">
	import { goto } from '$app/navigation';
	import { accentColor, getTypewriter } from '$lib';
	import { get } from 'svelte/store';
	import { onMount } from 'svelte';

	const names = ['Siddarth.', 'Sidhu.', 'Schidster.', 'Programmer.', 'Musician.'];
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

<section class="font-mono text-lg pl-12 text-neutral-200 w-full shadow-white">
	<p>I am {$name}<span class="text-3xl input-cursor" style="color: {$accentColor};">▮</span></p>
	<p>I code.</p>
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<p>For myself and <span style="color: {$accentColor}" onclick={() => goto('/projects')}>others</span>.</p>
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

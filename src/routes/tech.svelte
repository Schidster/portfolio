<script lang="ts">
	import { accentColor } from '$lib';
	const { tech }: { tech: string } = $props();
</script>

<p class="px-2.5 py-1.5 mx-1.5 w-fit inline my-1.5 bg-dark-5 rounded-lg text-white text-xs" style="box-shadow: 0px 0px 5px {$accentColor}">
	{tech}
</p>

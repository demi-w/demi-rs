<script>
	import Modal from './Modal.svelte';
	import { chosenProject } from '$lib/stores';
	import SvelteMarkdown from 'svelte-markdown';
	import Badge from "./Badge.svelte";
	import Hline from './Hline.svelte';
	import { Svroller } from 'svrollbar';
	let showModal = false;
	export let project;
</script>
<Modal bind:showModal={project}>
	<img slot="image" src={"projects/"+project.url+"/banner.png"} alt="" class="absolute inset-0 w-full h-full object-cover" loading="lazy" />
	<h2 class="text-2xl font-semibold" slot="header">{project.name}</h2>
	
	<div class="flex justify-between flex-wrap">
		<div class="flex items-center flex-wrap">
			Done for <Badge item={project.location} isTool = {false}/>
		</div>
		<div>
			{project.dateStr}
		</div>
	</div>
	<div class="flex items-center justify-start flex-wrap">
		Made using 
		{#each project.tools as tool}
			<Badge item={tool} isTool = {true}/>
		{/each}
	</div>
	<Hline />
	<div class="markdown">
		<SvelteMarkdown source={project.markdown}/>
	</div>
</Modal>
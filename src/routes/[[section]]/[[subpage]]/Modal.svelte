<script>
	export let showModal; // boolean

	import { Svroller } from 'svrollbar';

	let dialog; // HTMLDialogElement

	import { chosenProject } from '$lib/stores';
    import { goto } from '$app/navigation';

	$: if (dialog && showModal == $chosenProject) {
		dialog.showModal() 
	} else if (dialog && showModal != $chosenProject) {
		dialog.close()
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (goto("/", {noScroll : true}))}
	on:click|self={() => {dialog.close()}}
	class="rounded-3xl bg-gradient-to-r from-slate-900/50 to-slate-950/50 text-slate-50 w-full"
	>

	
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation class="flex flex-col lg:flex-row lg:overflow-hidden">
		<div class="flex-none max-lg:h-48 lg:w-1/4 relative">
			<slot name = "image"/>
		</div>
		
		<div class="flex-grow max-h-[36rem] pt-4 sm:px-4 box-border">
			<div class = "flex justify-between flex-nowrap px-3 -mt-1 pb-2">
				<slot name="header" />
				<!-- svelte-ignore a11y-autofocus -->
				<button class="font-semibold text-xl" autofocus on:click={() => dialog.close()}>X</button>
			</div>
		<Svroller height="95%" width="100%">
			<div class="mx-4 pb-3 overflow-scroll">

			<slot />
		</div>
		</Svroller>
	</div>
	</div>
</dialog>

<style>
	dialog {
		border-radius: 0.2em;
		border: none;
		padding: 0;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		display: block;
	}
</style>

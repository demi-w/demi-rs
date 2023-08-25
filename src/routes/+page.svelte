<script>
    import AboutMe from "./AboutMe.svelte";
    import {chosenProject, subpages} from "$lib/stores.ts";
    import InView from "$lib/InView.svelte";
    import ProjectView from "./ProjectView.svelte";
    import { Svrollbar } from 'svrollbar';
    import Highlights from "./Highlights.svelte";
    import { scrollto } from "svelte-scrollto";
    import Timeline from "./Timeline.svelte";
    import { scale } from "svelte/transition";

    let headerInView = false;
    let screenWidth;
    let screenHeight;
    $: vMode = screenHeight > screenWidth;

</script>
<svelte:window bind:innerWidth={screenWidth} bind:innerHeight={screenHeight} />
<Svrollbar />
<!--containg the whole page in this div for modal scroll lock-->
<div transition:scale class="text-center m-top-8">
    <h1 class="text-center text-6xl">Demi Willison</h1>
    <InView bind:isInViewProp={headerInView}>
        <h2>did you know I work on the computer? </h2>
    </InView>
</div> 
<div class="p-2 flex items-center justify-center bg-slate-950" class:sticky={!headerInView} class:top-0={!headerInView} class:z-50={!headerInView}>
{#each subpages as subpage}
    <a use:scrollto={"#"+subpage.toLowerCase().replace(/\s/g, '')} class = "p-1 hover:text-white text-slate-200">
        {subpage}
    </a>
    {#if subpage != subpages[subpages.length - 1]}
        <span class="select-none p-1"> &bull;</span>
    {/if}
{/each}
</div>

<Highlights />
<Timeline />
<AboutMe />

<ProjectView />
<!--
    wouldn't it have been really cool if this worked ? :(
    oh well. prolly another way to do it, but not worth the convienence imo
{#each subpages as subpage}
    <{subpage.replace(/\s/g, '')} />
{/each}
-->
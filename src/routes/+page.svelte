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
    import TestTimeline from "./Timeline.svelte";

    let headerInView = false;
    /*
    chosenProject.subscribe((value) =>
    {
        if(value != null) {
            document.body.style.position = 'fixed';
            document.body.style.top = `-${window.scrollY}px`;
        } else {
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
    })*/
</script>
<Svrollbar />
<svelte:body style={"position:fixed"} />
<!--containg the whole page in this div for modal scroll lock-->
<div transition:scale class="text-center m-top-8">
    <h1 class="text-center text-6xl">Demi Willison</h1>
    <InView bind:isInViewProp={headerInView}>
        <h2>Contact me at <span>dem</span>iwi<span>llison@g</span>mail.com </h2>
    </InView>
</div> 
<div class="p-2 flex items-center justify-center bg-black" class:sticky={!headerInView} class:top-0={!headerInView} class:z-50={!headerInView}>
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
<AboutMe />
<Timeline />
<ProjectView />
<!--
    wouldn't it have been really cool if this worked ? :(
    oh well. prolly another way to do it, but not worth the convienence imo
{#each subpages as subpage}
    <{subpage.replace(/\s/g, '')} />
{/each}
-->
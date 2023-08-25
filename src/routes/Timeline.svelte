<script>
    import { Icon } from 'flowbite-svelte-icons';
    import Hline from "./Hline.svelte";
    import { chosenLocation, chosenProject, chosenTool, locationWheel } from "$lib/stores";
    import {fly, fade, slide } from "svelte/transition";
    import SvelteMarkdown from 'svelte-markdown';
    
    let wheelPos = 0;
    let lastDecreasing = false;
</script>
<div id="timeline" class="max-sm:h-8 h-4 mt-2 bg-gradient-to-b from-transparent to-cyan-950/40"></div>

<div class="w-full flex flex-row max-sm:flex-col sm:h-64">
    <!--image and gradient-->
    <div class="flex-none max-sm:h-48 sm:w-1/4 relative grid overflow-hidden">
        <!--{"banners/"+wheel[wheelPos].url +".png"}-->
        {#key wheelPos}
        <img in:fly={{ x:lastDecreasing ? "-100%" : "100%", duration: 800, opacity : 1 }}
        
        out:fly={{ x: lastDecreasing ? "100%" : "-100%", duration: 800 , opacity : 1}} src={"locations/"+locationWheel[wheelPos].url+"/banner.png"} alt="" class="relative inset-0 w-full h-full object-cover inline-block min-h-0" style="grid-row:1/2; grid-column:1/2;" loading="lazy" />
        {/key}
        <div class="that-one-gradient">
        </div>
        <div class="that-other-gradient"></div>
    </div>
    <!--text body-->
    <div class="flex flex-col px-6 py-3 w-full bg-gradient-to-b from-cyan-950/40 to-blue-950/40">
        <!--title and buttons-->
        <div class="flex w-full justify-between">
            <button on:click={()=>{wheelPos -= 1; if (wheelPos == -1) {wheelPos=locationWheel.length-1};lastDecreasing = true}} class="block z-10">
            <svg class="h-8 flex-shrink-0 aspect-square p-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"/>
              </svg>
            </button>
            <div class ="grid max-sm:overflow-hidden mr-auto">
                {#key wheelPos}
                
                <div in:fly={{  x: lastDecreasing ? "-4rem" : "4rem", duration: 300, delay: 300 }}
            
                out:fly={{  x: lastDecreasing ? "4rem" : "-4rem", duration: 300 }} class="mx-2" style="grid-row:1/2; grid-column:1/2">
                    <span class="text-3xl">
                        {locationWheel[wheelPos].name}
                    </span>
                    
                    <span class="ml-2 whitespace-nowrap">{locationWheel[wheelPos].dateStr}</span>
                </div>
            {/key}
            </div>
            <button on:click={()=>{wheelPos = (wheelPos + 1) % locationWheel.length; lastDecreasing = false} } class="block ">
            <svg class="h-8 flex-shrink-0 aspect-square p-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
              </svg>
            </button>
        </div>
        <Hline />
        <!--markdown-->
        <div class="grid overflow-hidden">
            {#key wheelPos}
            <div transition:fade={{duration : 300}} style="grid-row:1/2; grid-column:1/2" class="markdown">
                <SvelteMarkdown source={locationWheel[wheelPos].markdown}></SvelteMarkdown>
            </div>
            {/key}
        </div>
        <!--link-->
        <Hline />
        <div class="text-center">
            <a on:click={() => {chosenLocation.set(locationWheel[wheelPos]); chosenTool.set(null)}}> Check out all projects done for {locationWheel[wheelPos].name} ></a>
        </div>

        
    </div>

</div>
<div class="h-4 bg-gradient-to-t from-transparent to-blue-950/40"></div>
<!--
<div class="flex md:flex-col" id="timeline">
{#each Object.values(locations) as location, i}
    <div class="w-12 h-24 rounded-xl bg-teal-900 m-4">
        {location.name}
    </div>
    
{/each}
</div>
-->
<script>
    import { Icon } from 'flowbite-svelte-icons';
    import Hline from "./Hline.svelte";
    import { chosenLocation, chosenProject, chosenTool, locationWheel, locations } from "$lib/stores";
    import {fly, fade, slide } from "svelte/transition";
    import SvelteMarkdown from 'svelte-markdown';
    import * as animateScroll from "svelte-scrollto";
    let wheelPos = 0;
    let lastDecreasing = false;
    //Notable -- Spacing is based on the largest element. Currently SSU is the largest for both name and body
  </script>
  <div class="grid">
    <div class="max-md:h-8 h-4 mt-2 bg-gradient-to-b from-transparent to-cyan-950/40" style="grid-row:1/1; grid-column:1/1"></div>
    <div class="max-md:h-8 h-4 mt-2 bg-black -z-[5]" style="grid-row:1/1; grid-column:1/1"></div>
  </div>
  
  <div id="timeline" class="flex max-lg:flex-col font-sans w-full my rounded-md">
      <div class="flex-none relative lg:w-1/4 max-lg:h-48 overflow-x-hidden">
        {#key wheelPos}
        <img in:fly={{ x:lastDecreasing ? "-100%" : "100%", duration: 800, opacity : 1 }}
        out:fly={{ x: lastDecreasing ? "100%" : "-100%", duration: 800 , opacity : 1}}
        src={"/locations/"+locationWheel[wheelPos].url+"/banner.png"} alt="" class="absolute w-full h-full object-cover -z-20" loading="lazy" />
        {/key}
        <div class="that-one-gradient"></div>
        <div class="that-other-gradient"></div>
    </div>
    <div class="grid">
        <div class="bg-black -z-[5]" style="grid-row:1/1; grid-column:1/1"></div>
        <div class="flex-auto max-lg:py-2 lg:pt-4 lg:pb-6 px-6 items-center bg-gradient-to-b from-cyan-950/40 to-blue-950/40" style="grid-row:1/1; grid-column:1/1">
            <div class="flex flex-col flex-wrap">
                <div class="flex w-full justify-between">
                    <button on:click={()=>{wheelPos -= 1; if (wheelPos == -1) {wheelPos=locationWheel.length-1};lastDecreasing = true}} class="block z-10">
                    <svg class="h-8 flex-shrink-0 aspect-square px-2 py-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"/>
                      </svg>
                    </button>
                    <div class ="grid max-md:overflow-hidden max-md:ml-auto max-md:text-center items-center mr-auto">
                        {#key wheelPos}
                        
                        <div in:fly={{  x: lastDecreasing ? "-4rem" : "4rem", duration: 300, delay: 300 }}
                    
                        out:fly={{  x: lastDecreasing ? "4rem" : "-4rem", duration: 300 }} class="mx-2" style="grid-row:1/1; grid-column:1/1">
                            <span class="max-sm:text-2xl sm:text-3xl">
                                {locationWheel[wheelPos].name}
                            </span>
                            <span class="mx-1"></span>
                            <span class="whitespace-nowrap">{locationWheel[wheelPos].dateStr}</span>
                        </div>
                        {/key}
                        <div class="mx-2 invisible" style="grid-row:1/1; grid-column:1/1">
                            <span class="max-sm:text-2xl sm:text-3xl">
                                {locationWheel[1].name}
                            </span>
                            <span class="mx-1"></span>
                            <span class="whitespace-nowrap">{locationWheel[1].dateStr}</span>
                        </div>
                    </div>
                    <button on:click={()=>{wheelPos = (wheelPos + 1) % locationWheel.length; lastDecreasing = false} } class="block ">
                    <svg class="h-8 flex-shrink-0 aspect-square px-2 py-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                      </svg>
                    </button>
                </div>
            <Hline />
            <div class="grid">
                {#each locationWheel as invisLocation}
                <div class="markdown max-md:text-center invisible" style="grid-area: 1 / 1 / 1 / 1">
                    <SvelteMarkdown source={invisLocation.markdown}/>
                </div>
                {/each}
                {#key wheelPos}
                <div transition:fade={{duration : 100}} style="grid-row:1/1; grid-column:1/1" class="markdown max-md:text-center">
                    <SvelteMarkdown source={locationWheel[wheelPos].markdown}></SvelteMarkdown>
                </div>
                {/key}
            </div>
            <Hline />
            <div class="text-center grid">
                {#key wheelPos}
                <a style="grid-area: 1 / 1 / 1 / 1" transition:fade={{duration : 100}} on:click={() => {chosenLocation.set(locationWheel[wheelPos]); chosenTool.set(null); animateScroll.scrollTo({element : "#projects"});}}> Check out all projects done for {locationWheel[wheelPos].name} ></a>
                {/key}
            </div>
        </div>
        </div>
    </div>
  </div>
  <div class="h-4 bg-gradient-to-t from-transparent to-blue-950/40"></div>
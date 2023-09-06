<script>
    import { tools , knownLanguages, chosenProject, chosenTool, chosenLocation, projects, locations } from "$lib/stores";
    import Icon from "./Icon.svelte";
    import HighlightPanel from "./HighlightPanel.svelte";
    import * as animateScroll from "svelte-scrollto";
</script>
<div class="flex flex-col sm:flex-row max-xl:items-center justify-center text-center pt-2 basis-full max-xl:flex-wrap" id="highlights">
    <HighlightPanel>
        <span slot ="title">
            Profcient with {knownLanguages} Languages
        </span>
        <div slot ="body" class = "flex flex-wrap items-center justify-evenly min-w-fit">
            {#each Object.keys(tools) as tool} 
            {#if tools[tool].isLanguage}
            <div class="w-1/6 lg:w-1/5 ml-1/8 aspect-square min-w-0 -my-1">     
                <Icon item={tools[tool]} isTool={true} />
            </div>
            {/if}
            {/each}
        </div>
        <a data-sveltekit-noscroll href="/projects" on:click={() => {chosenTool.set(null); chosenLocation.set(null);}} slot ="link">
            Explore a list of all my projects >
        </a>
    </HighlightPanel>
    <HighlightPanel>
        <span slot = "title">
            College Curriculum Development
        </span>
        <div slot="body"> 
            As freshmen, my colleague and I co-created 2 units of curriculum for Sonoma State University's Computer Applications for Scientists (PHYS 381). PHYS 381 is currently a mandatory upper-division class for Physics majors.
        </div>
        <a data-sveltekit-noscroll href="/projects/newkirk" slot ="link">
            Read more about the grant >
        </a>
    </HighlightPanel>
    <HighlightPanel>
        <span slot = "title">
            Working on Research
        </span>
        <span slot="body"> Developed a polynomial-time solution to a previously exponential problem. Originally created as my senior capstone, Dr. Ravikumar and I have continued to pursue it and plan to submit the work to conferences. </span>
        <a data-sveltekit-noscroll href="projects/dfaresearch" slot ="link">
            Read more about our research >
        </a>
    </HighlightPanel>
    <HighlightPanel>
        <span slot = "title">
            {new Date(new Date() - locations["lsa"].date).getFullYear() - 1970} Years of Work Experience
        </span>
        <span slot="body"> Working in the field since 2018 at three positions.  </span>
        <a data-sveltekit-noscroll href="/timeline" slot ="link">
            Explore my work timeline >
        </a>
    </HighlightPanel>

</div>
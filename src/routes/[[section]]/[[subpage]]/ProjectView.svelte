<script>

    import { tools , locations , projects , chosenLocation, chosenTool, chosenProject } from "$lib/stores";
    
    import { fade, scale } from 'svelte/transition';
    import InlineDropdown from "./InlineDropdown.svelte";
    import ProjectModal from "./ProjectModal.svelte";
    import {flip} from 'svelte/animate';

    let relevantProjects = Object.values(projects);

    function filterProjects() {
        relevantProjects = Object.values(projects).filter((project) => ($chosenTool == null || project.tools.includes($chosenTool))  && ($chosenLocation == null || project.location == $chosenLocation));
    }
    chosenLocation.subscribe(filterProjects);
    chosenTool.subscribe(filterProjects);

</script>

<div class="text-center mt-8" id="projects">
    <h1 class="text-center text-4xl">
        Showing projects made using 
        <InlineDropdown bind:selectedObject={$chosenTool} defaultName="Any tool" objectList={tools} />
         for 
         <InlineDropdown bind:selectedObject={$chosenLocation} defaultName="Any group" objectList={locations} />
    </h1>
    <div class="text-center italic"><span class="font-semibold">NOTE:</span> This is by no means my complete backlog! Check back in 1-2 weeks to see the complete list (and demos 👀)</div>
</div>
<div class="w-full grid">
    <div class="w-full flex flex-wrap align-top items-start" style="grid-row:1/1; grid-column:1/1">
    {#each relevantProjects as project (project.url)}
        <button animate:flip={{duration:400}} transition:fade on:click={() => {chosenProject.set(project)}} class="rounded-xl max-md:w-1/3 md:w-1/6 text-center text-xl max-sm:px-2 sm:px-5  sm:py-5">
            <img class="rounded-3xl sm:mb-2 max-w-full w-full align-middle border-none aspect-square object-cover" src={"\\projects\\"+ project.url + "\\icon.png"} alt={project.name} loading="lazy"/>
            {project.name}
        </button>
    {/each}
    </div>
    <div class="w-full flex flex-wrap align-top invisible" style="grid-row:1/1; grid-column:1/1">
        {#each Object.values(projects) as project (project.url)}
            <button animate:flip={{duration:400}} transition:fade on:click={() => {chosenProject.set(project)}} class="rounded-xl max-md:w-1/3 md:w-1/6 text-center text-xl max-sm:px-2 sm:px-5 my-1 sm:py-5">
                <img class="rounded-3xl sm:mb-2 max-w-full w-full align-middle border-none aspect-square object-cover" src={"\\projects\\"+ project.url + "\\icon.png"} alt={project.name} loading="lazy"/>
                {project.name}
            </button>
        {/each}
    </div>
</div>
{#each Object.values(projects) as project}
<ProjectModal project={project} />
{/each}
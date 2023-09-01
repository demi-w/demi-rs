<script>
  import SvelteMarkdown from "svelte-markdown";
  import { locations } from "$lib/stores";
  import InView from "$lib/InView.svelte";
</script>
<div class="w-full flex m-0 justify-center">
<div id="aboutme" class="flex font-sans sm:w-4/5 md:3/5 m-8 bg-gradient-to-tl to-sky-950/40 via-teal-900/20  from-indigo-950/40 rounded-md sm:min-h-[12rem]">
    <div class="flex-none relative landscape:w-1/4">
      <img src="locations/me/banner.png" alt="" class="absolute w-full h-full object-cover" loading="lazy" />
    </div>
    <div class="flex-auto p-6 items-center">
      <div class="flex flex-wrap">
        <h1 class="flex-auto text-2xl font-semibold">
          About Me
        </h1>
        <p>
            <SvelteMarkdown source={locations["me"].markdown}/>
        </p>
    </div>
  </div>
</div>
</div>
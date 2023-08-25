<script>
  import SvelteMarkdown from "svelte-markdown";
  import { locations } from "$lib/stores";
</script>
<div id="aboutme" class="flex font-sans w-9/10 m-8 bg-gradient-to-tl to-sky-950/40 via-teal-900/20  from-indigo-950/40 rounded-md">
    <div class="flex-none relative landscape:w-1/4">
      <img src="locations/me/banner.png" alt="" class="absolute w-full h-full object-cover" loading="lazy" />
    </div>
    <div class="flex-auto p-6">
      <div class="flex flex-wrap">
        <h1 class="flex-auto text-lg font-semibold">
          About Me
        </h1>
        <p class="text-sm">
            <SvelteMarkdown source={locations["me"].markdown}/>
        </p>
    </div>
  </div>
</div>
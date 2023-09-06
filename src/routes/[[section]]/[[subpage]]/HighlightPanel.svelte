<script>
    import Hline from "./Hline.svelte";
</script>
<div class= "max-sm:w-[calc(100%-2rem)] sm:w-[calc(50%-2rem)] 2xl:w-1/4 flex flex-col rounded-xl shadow-xl bg-gradient-to-br from-teal-800/50 to-slate-800/50 mx-4 my-4 px-3 py-4 max-sm:box-border">
    <div class = "text-3xl flex-shrink">
        <slot name="title"/>
    </div>
    <Hline />
    <div class="flex flex-grow flex-shrink text-lg items-center">
    <slot name="body"/>
    </div>
    <Hline />
    <div class="select-none flex-shrink">
        <slot name="link"/>
    </div>
</div>
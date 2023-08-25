<script>
    import Hline from "./Hline.svelte";
</script>
<div class= "sm:w-2/5 lg:w-1/4 rounded-xl shadow-xl bg-gradient-to-br from-teal-800/50 to-slate-800/50 m-4 px-3  py-4">
    <div class = "text-3xl">
        <slot name="title"/>
    </div>
    <Hline />
    <slot name="body"/>
    <Hline />
    <div class="select-none">
        <slot name="link"/>
    </div>
</div>
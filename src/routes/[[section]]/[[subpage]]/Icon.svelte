<script>
    export let item;
    export let isTool;
    import { chosenTool, chosenLocation} from "$lib/stores";
    import * as animateScroll from "svelte-scrollto";
    function onClick() {
        if (isTool) {
            chosenTool.set(item);
            chosenLocation.set(null);
            animateScroll.scrollTo({element : "#projects"});
            
        } else {
            chosenTool.set(null);
            chosenLocation.set(item);
            animateScroll.scrollTo({element : "#projects"});
        }
    }
</script>

<button on:click={onClick} class="rounded-full ring-slate-300 flex m-2 items-center">
    <img title={item.name} class="aspect-square" src={isTool ? ("\\tools\\images\\"+item.url + ".svg") : "\\locations\\" +item.url + "\\icon.png"} alt ={item.name}>
</button>
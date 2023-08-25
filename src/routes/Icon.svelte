<script>
    export let item;
    export let isTool;
    import { chosenTool, chosenLocation} from "$lib/stores";
    function onClick() {
        if (isTool) {
            chosenTool.set(item);
        } else {
            chosenLocation.set(item);
        }
    }
</script>

<button on:click={onClick} class="rounded-full ring-slate-300 flex  m-2 items-center">
    <img class="aspect-square" src={isTool ? ("tools\\images\\"+item.url + ".svg") : "locations\\" +item.url + "\\icon.png"} alt ={item.name}>
</button>
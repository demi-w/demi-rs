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

<button on:click={onClick} class="m-2 rounded-full  ring-slate-300 flex bg-sky-900/20 pr-2 items-center">
    <img class="rounded-full aspect-square object-cover h-6 flex-shrink mr-2" src={isTool ? ("tools\\images\\"+item.url + ".svg") : "locations\\" +item.url + "\\icon.png"}>
    <div class="line">
        {item.name}
    </div>
    
</button>
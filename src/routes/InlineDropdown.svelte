<script>
    import Modal from "./Modal.svelte";
    import { Button, Dropdown, DropdownItem } from 'flowbite-svelte';
    import { Svroller } from "svrollbar";
    export let defaultName;
    export let selectedObject;
    export let objectList;
    let currentName;
    let dropdownOpen = false;
    $: {
        if (selectedObject != null) {
            currentName = selectedObject.name;
        } else {
            currentName = defaultName.toLowerCase();
        }
    }
</script>
<Button class="text-4xl ring-1 ring-slate-100 px-2.5 pb-2.5 pt-1 bg-slate-950">{currentName}</Button>
<Dropdown class="overflow-y-auto h-48" bind:open={dropdownOpen}>
    <Svroller height="100%" width="12rem">
    <DropdownItem class="text-xl rounded" on:click={() => {dropdownOpen = false; selectedObject=null}}>{defaultName}</DropdownItem>
    {#each Object.keys(objectList).sort() as objectKey}
    <DropdownItem class="text-xl rounded" on:click={() => {dropdownOpen = false; selectedObject=objectList[objectKey]}}>{objectList[objectKey].name}</DropdownItem>
    {/each}
    </Svroller>
</Dropdown>

<!--

<div class="relative inline-block text-center">
    <div>
      <button on:click={() => (showDropdown = true)} type="button" class="items-center inline-flex w-full justify-center gap-x-1.5 rounded-md bg-black px-3 p-2 font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-slate-900 hover:ring-2" id="menu-button" aria-expanded="true" aria-haspopup="true">
        <a class="text-white -mt-2">{currentName} </a>
        <svg class="-mr-1 h-10 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
</div>
<Modal bind:showModal={showDropdown}> 

    <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
        <div class="py-1" role="none">

          {#each Object.keys(objectList) as object}
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
            {/each}
        </div>
      </div>
</Modal>-->

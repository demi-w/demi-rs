<script>
    import { onMount } from "svelte";
  
    export let root = undefined;
    export let isInViewProp = false;
  
    let isInView = false;
    let observer;
    let element;
  
    $: isInView, (isInViewProp = isInView);
  
    const onChangeVisibility = (e) => {
      isInView = e[0].isIntersecting;
      console.log("it changed to",isInView);
    };
  
    onMount(() => {
      let options = {
        root: root,
      };
  
      observer = new IntersectionObserver(onChangeVisibility, options);
      observer.observe(element);
    });
  </script>
  
  <div class="c" bind:this={element}>
    <slot {isInView} />
  </div>
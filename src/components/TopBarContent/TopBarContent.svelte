<!-- TopBarContent.svelte -->
<script>
    import "./TopBarContent.css";
    import { goForward, goBackward } from "./topBarContentController.ts";
</script>

<style>
</style>

<div class="arrows-container">
  <a on:click={goBackward} href={"#"}>
    <img src="./static/assets/images/icons/set-iconly2/6 - Svg/Bold/Arrow - Left.svg" alt="todo"/>
  </a>
  <a on:click={goForward} href={"#"}>
    <img src="./static/assets/images/icons/set-iconly2/6 - Svg/Bold/Arrow - Right.svg" alt="todo"/>
  </a>
</div>
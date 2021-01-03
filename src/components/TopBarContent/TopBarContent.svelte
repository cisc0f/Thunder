<!-- TopBarContent.svelte -->
<script>
    import "./TopBarContent.css";
    import { goForward, goBackward, reloadPage } from "./topBarContentController.ts";
    import { faSyncAlt, faArrowLeft, faArrowRight, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
    import TopOptionButton from '../TopOptionButton/TopOptionButton.svelte';
</script>

<style>
</style>

<!-- Left Options -->
<div class="left-options-container">
  <!-- Nav Options -->
  <TopOptionButton icon={faArrowLeft} on:click={goBackward}/>
  <TopOptionButton icon={faArrowRight} on:click={goForward}/>

  <!-- Refresh Page -->
  <TopOptionButton icon={faSyncAlt} on:click={reloadPage}/>
</div>


<!-- Tabs Space -->
<div class="tabs-container">
    
  <!-- Add Tab -->
  <TopOptionButton icon={faPlus}/>
  <div>
    Tab
  </div>
</div>


<!-- Right Options -->
<div class="right-options-container">
  <!-- Extensions -->
  <TopOptionButton icon={faSearch} />
</div>

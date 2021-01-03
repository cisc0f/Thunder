<script>
    import "./SideIconButton.css";
    import IconButton from "../IconButton/IconButton.svelte";
    import { setState } from "./sideIconButtonController.ts";
    export let webid;
    export let image_url;
</script>

<style>
</style>

<div class="side-icon-button" on:click="{setState}">
    <IconButton webid={webid} image_url={image_url}/>
</div>
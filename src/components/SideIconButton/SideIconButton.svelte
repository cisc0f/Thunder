<script>
    import "./SideIconButton.css";
    import IconButton from "../IconButton/IconButton.svelte";
    import { setState } from "./sideIconButtonController.ts";
    export let webid;
    export let icon;
</script>

<style>
</style>

<div class="side-icon-button" on:click="{setState}">
    <IconButton webid={webid} icon={icon}/>
</div>
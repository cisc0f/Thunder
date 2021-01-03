<script lang="ts">
    import "./SideIconButton.css";
    import IconButton from "../IconButton/IconButton.svelte";
    import { setState } from "./sideIconButtonController";
    export let webid: string;
</script>

<style>
</style>

<div class="side-icon-button" on:click="{setState}">
    <IconButton webid={webid} />
</div>
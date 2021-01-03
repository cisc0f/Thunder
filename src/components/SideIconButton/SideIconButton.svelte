<script lang="ts">
    import "./SideIconButton.css";
    import IconButton from "../IconButton/IconButton.svelte";
    import { setState } from "./sideIconButtonController";
    export let webid: string;
    export let image_url: string = "../../public/static/assets/images/icons/icon_default.svg";
    let state: string = ""
    export { state as class }
</script>

<style>
</style>

<div class="side-icon-button {state}" on:click="{setState}">
    <IconButton webid={webid} image_url={image_url}/>
</div>
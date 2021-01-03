<script lang="ts">
    import "./SideIconButton.css";
    import IconButton from "../IconButton/IconButton.svelte";
<<<<<<< HEAD
    import { setState } from "./sideIconButtonController";
    export let webid: string;
=======
    import { setState } from "./sideIconButtonController.ts";
    export let webid;
    export let image_url = "../../public/static/assets/images/icons/icon_default.svg";
>>>>>>> e8bc40e85ee4fb5054fbaae60c4ab1f260e458b1
</script>

<style>
</style>

<div class="side-icon-button" on:click="{setState}">
    <IconButton webid={webid} image_url={image_url}/>
</div>
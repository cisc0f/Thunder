<script lang="ts">
    import "./TopOptionButton.css";
    import OptionButton from "../OptionButton/OptionButton.svelte";
    import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
    export let icon: IconDefinition;
    export let size: number;
</script>

<style>
</style>

<div class="top-option-button" on:click>
    <OptionButton icon={icon} size={size}/>
</div>
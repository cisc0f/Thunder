<script>
    import "./TopOptionButton.css";
    import OptionButton from "../OptionButton/OptionButton.svelte";
    export let icon;
</script>

<style>
</style>

<div class="top-option-button" on:click>
    <OptionButton icon={icon}/>
</div>
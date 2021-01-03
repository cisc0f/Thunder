<!-- SettingsViewContent.svelte -->
<script>
    import "./SettingsViewContent.css";
    import Grid from '../Grid/Grid.svelte';
    export let webid;
</script>

<style>
</style>

<div class="settingsview" id="settingsview" web-id="{webid}">
    <Grid />
</div>

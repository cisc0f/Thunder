<!-- SettingsViewContent.svelte -->
<script lang="ts">
    import "./SettingsViewContent.css";
    import Grid from '../Grid/Grid.svelte';
    export let webid: string;
</script>

<style>
</style>

<div class="settingsview" id="settingsview" web-id="{webid}">
    <Grid />
</div>

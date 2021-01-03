<!-- SettingsView.svelte -->
<script lang="ts">
    import SettingsViewContent from '../SettingsViewContent/SettingsViewContent.svelte';
    import "./SettingsView.css";
    let state: string = ""
    export { state as class }
    export let webid: string;
</script>

<style>
</style>

<div class="settingsview-container {state}">
    <SettingsViewContent webid="{webid}"/>
</div>
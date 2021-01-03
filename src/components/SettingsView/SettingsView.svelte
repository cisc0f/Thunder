<!-- SettingsView.svelte -->
<script>
    import SettingsViewContent from '../SettingsViewContent/SettingsViewContent.svelte';
    import "./SettingsView.css";
    let state = ""
    export { state as class }
    export let webid;
    
</script>

<style>
</style>

<div class="settingsview-container {state}">
    <SettingsViewContent webid="{webid}"/>
</div>
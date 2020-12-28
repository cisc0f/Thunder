<!-- WebView.svelte -->
<script lang="ts">
    import "./WebView.css";
</script>

<style>
</style>

<div class="webview-container">
    <webview class="webview" id="webview" src="https://medium.com" preload="./scripts/tabsManager.js">
        <div class="indicator">
        </div>
    </webview>
</div>
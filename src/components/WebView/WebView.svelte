<!-- WebView.svelte -->
<script>
    import "./WebView.css";
    export let url;
    export let webid;
</script>

<style>
</style>

<div class="webview-container">
    <webview class="webview" web-id="{webid}" src="{url}">
        <div class="indicator">
        </div>
    </webview>
</div>
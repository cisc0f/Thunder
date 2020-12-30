<!-- WebViewContent.svelte -->
<script>
    import "./WebViewContent.css";
    export let url;
    export let subclass;
</script>

<style>
</style>

<webview class="webview" id="webview" src="{url}">
    <div class="indicator">
    </div>
</webview>

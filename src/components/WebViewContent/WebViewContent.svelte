<!-- WebViewContent.svelte -->
<script>
    import "./WebViewContent.css";
    export let url;
    export let webid;
</script>

<style>
</style>

<webview class="webview" id="webview" src="{url}" web-id="{webid}">
    <div class="indicator">
    </div>
</webview>

<!-- WebView.svelte -->
<script>
    import WebViewContent from '../WebViewContent/WebViewContent.svelte';
    import "./WebView.css";
    export let url;
    export let webid;
</script>

<style>
</style>

<div class="webview-container">
    <WebViewContent url={url} webid="{webid}"/>
</div>
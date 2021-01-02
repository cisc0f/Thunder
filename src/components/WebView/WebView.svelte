<!-- WebView.svelte -->
<script>
    import WebViewContent from '../WebViewContent/WebViewContent.svelte';
    import "./WebView.css";
    let state = ""
    export { state as class }
    export let url;
    export let webid;
    
</script>

<style>
</style>

<div class="webview-container {state}">
    <WebViewContent url={url} webid="{webid}"/>
</div>
<!-- WebView.svelte -->
<script lang="ts">
    import WebViewContent from '../WebViewContent/WebViewContent.svelte';
    import "./WebView.css";
    let state: string = ""
    export { state as class }
    export let url: string;
    export let webid: string;
    
</script>

<style>
</style>

<div class="webview-container {state}">
    <WebViewContent url={url} webid="{webid}"/>
</div>
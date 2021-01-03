<!-- WebViewContent.svelte -->
<script lang="ts">
    import "./WebViewContent.css";
    export let url: string;
    export let webid: string;
</script>

<style>
</style>

<webview class="webview" id="webview" src="{url}" web-id="{webid}">
</webview>

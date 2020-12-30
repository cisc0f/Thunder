<script lang="ts">
	import TopBar from "./components/TopBar/TopBar.svelte";
	import SideBar from "./components/SideBar/SideBar.svelte";
	import WebView from "./components/WebView/WebView.svelte";
</script>

<style>
</style>

<!-- Top Bar -->
<TopBar />

<!-- Side Bar -->
<SideBar />

<!-- Web View -->
<WebView url={"https://www.medium.com"} webid={"23d"} />
<WebView url={"https://www.google.com"} webid={"24d"} />
<WebView url={"https://www.youtube.com"} webid={"25d"} />
<WebView url={"https://www.instagram.com"} webid={"26d"} />



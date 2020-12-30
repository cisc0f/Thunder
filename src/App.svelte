<script>
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

<!-- Web Views -->
<main class="content">
	<div class="webviews-container">
		<WebView url={"https://www.medium.com"} />
		<WebView url={"https://www.google.com"} />
		<WebView url={"https://www.youtube.com"} />
		<WebView url={"https://www.instagram.com"} />
	</div>
</main>

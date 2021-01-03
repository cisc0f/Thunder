<script>
	import TopBar from "./components/TopBar/TopBar.svelte";
	import SideBar from "./components/SideBar/SideBar.svelte";
	import WebView from "./components/WebView/WebView.svelte";
	import SettingsView from "./components/SettingsView/SettingsView.svelte";
</script>

<style>
</style>

<!-- Top Bar -->
<TopBar />

<!-- Side Bar -->
<SideBar />

<!-- Views -->
<main class="content">
	<div class="views-container">
		<WebView url={"https://www.medium.com"} webid={"23d"} class="active" />
		<WebView url={"https://www.google.com"} webid={"24d"} class="hidden" />
		<WebView url={"https://www.youtube.com"} webid={"25d"} class="hidden" />
		<WebView url={"https://www.instagram.com"} webid={"26d"} class="hidden" />
		<WebView url={"https://trello.com/login"} webid={"21d"} class="hidden" />
		
		<!-- Settings -->
		<SettingsView webid={"settings"} class="hidden" />
	</div>
</main>

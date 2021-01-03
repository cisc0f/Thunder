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
		<!-- Account Emails -->
		<SettingsView webid={"account_1"} class="hidden" />

		<!-- Web/App Views -->
		<WebView url={"https://www.medium.com"} webid={"23d"} class="active" />
		<WebView url={"https://www.google.com"} webid={"24d"} class="hidden" />
		<WebView url={"https://www.youtube.com"} webid={"25d"} class="hidden" />
		<WebView url={"https://www.instagram.com"} webid={"26d"} class="hidden" />
		<WebView url={"https://trello.com/b/uYI2QjGr/thunder"} webid={"21d"} class="hidden" />
		<WebView url={"https://www.github.com"} webid={"29d"} class="hidden" />
		<WebView url={"https://www.slack.com"} webid={"28d"} class="hidden" />
		<WebView url={"https://www.monday.com"} webid={"27d"} class="hidden" />
		<WebView url={"https://www.facebook.com"} webid={"2d"} class="hidden" />
		<WebView url={"https://www.linkedin.com"} webid={"1d"} class="hidden" />

		<!-- Settings -->
		<SettingsView webid={"settings"} class="hidden" />
	</div>
</main>

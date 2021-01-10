<!-- SideBarContent.svelte -->
<script>
    import "./SideBarContent.css";
    import SideIconButton from "../SideIconButton/SideIconButton.svelte";
</script>

<style>
</style>

<div id="side-bar">
	<!-- Search Button -->
	<div class="top-sidebar">
		<SideIconButton webid={"home"} image_url={"../../public/static/assets/images/icons/icon_logo.svg"} />
		<SideIconButton webid={"account_1"} image_url={"../../public/static/assets/images/icons/icon_account.svg"} />
	</div>

	<!-- Application View Icons -->
	<div class="center-sidebar">
		<SideIconButton webid={"23d"} class="active"/>
		<SideIconButton webid={"24d"} />
		<SideIconButton webid={"25d"} />
		<SideIconButton webid={"26d"} />
		<SideIconButton webid={"21d"} />
		<SideIconButton webid={"29d"} />
		<SideIconButton webid={"28d"} />
		<SideIconButton webid={"27d"} />
		<SideIconButton webid={"2d"} />
		<SideIconButton webid={"1d"} />
	</div>

	<!-- Settings Button -->
	<div class="bottom-sidebar">
		<SideIconButton webid={"settings"} image_url={"../../public/static/assets/images/icons/icon_settings.svg"} />
	</div>
</div>

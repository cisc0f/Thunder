<!-- SideBarContent.svelte -->
<script>
    import "./SideBarContent.css";
    import SideIconButton from "../SideIconButton/SideIconButton.svelte";
</script>

<style>
</style>

<div id="side-bar">
	<!-- Search Button -->
	<SideIconButton webid={"search"} />

	<!-- Application View Icons -->
	<SideIconButton webid={"23d"} />
	<SideIconButton webid={"24d"} />
	<SideIconButton webid={"25d"} />
	<SideIconButton webid={"26d"} />
	<SideIconButton webid={"21d"} />

	<!-- Settings Button -->
	<SideIconButton webid={"settings"} image_url={"../../public/static/assets/images/icons/icon_settings.svg"}/>
</div>

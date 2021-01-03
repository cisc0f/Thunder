<!-- OptionButton.svelte -->
<script lang="ts">
    import "./OptionButton.css";
    import Icon from 'svelte-awesome';
    import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
    export let icon: IconDefinition;
    export let size: number;
</script>

<style>
</style>

<div class="option-button-container">
    <div class="option-button">
        <button class="option-button-icon">
            <Icon data={icon} scale={size}/>
        </button>
    </div>
</div>
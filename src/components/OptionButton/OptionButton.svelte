<!-- OptionButton.svelte -->
<script>
    import "./OptionButton.css";
    import Icon from 'svelte-awesome';
    export let icon;
</script>

<style>
</style>

<div class="option-button-container">
    <div class="option-button">
        <button class="option-button-icon">
            <Icon data={icon} />
        </button>
    </div>
</div>
<script>
    export let webid;
    export let image_url = "../../public/static/assets/images/icons/icon_default.svg";
</script>

<style>
/* Icon Button */
.icon-button {
    display: flex;
    position: relative;
    vertical-align: middle;
    line-height: initial;
    color: inherit;
    border: none;
    outline: none;
    text-decoration: none;
    cursor: pointer;  
    margin: 0 auto;
    /* Icon background */
    background-image: var(--image);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 100%;
}

.icon-button-container {
    width: 60%;
    height: 60%;
    text-align: center;
}
</style>

<div class="icon-button-container">
    <div style="--image: url({image_url});" class="icon-button" web-id="{webid}">
    </div>
</div>

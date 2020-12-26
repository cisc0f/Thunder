<script lang="ts">
	export let name;
</script>

<style lang="scss">
	$color: red;
	h1 {
	  color: $color;
	}
	div {
	  background: green;
	  > p {
		color: #fff;
	  }
	}
</style>
  
  <h1>Hello {name}!</h1>
  
  <div>
	<p>SASS is working!</p>
  </div>

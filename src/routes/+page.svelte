<script>
  import Greet from "$lib/Greet.svelte";
  import { Alert } from 'flowbite-svelte';
</script>

<div class="p-8">
	<Alert>
		<span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
	</Alert>
</div>

<div class="row">
  <Greet />
</div>

<script>
  import { Heading } from 'flowbite-svelte';
  import { settings_store } from "$lib/store/settings";
</script>

<Heading>Func1</Heading>

{$settings_store.count}
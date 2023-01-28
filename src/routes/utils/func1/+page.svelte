<script>
  import { Heading } from 'flowbite-svelte';
  import { settings_store } from "$lib/Settings";
</script>

<Heading>Func1</Heading>

{$settings_store.count}
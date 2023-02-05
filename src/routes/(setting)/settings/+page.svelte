<script>
  import { Heading } from 'flowbite-svelte';
  import { appWindow } from '@tauri-apps/api/window';
  import { onMount } from 'svelte';

  onMount(async () => {
    await appWindow.onCloseRequested(async (event) => {
      console.log("closing");
      event.preventDefault();
      await appWindow.hide();
    });
  });
</script>

<Heading>Setting</Heading>
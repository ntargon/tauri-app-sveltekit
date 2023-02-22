<script lang='ts'>
  import { Heading } from 'flowbite-svelte';
  import { appWindow } from '@tauri-apps/api/window';
  import { onMount, onDestroy } from 'svelte';
  import type { UnlistenFn } from '@tauri-apps/api/event';

  let filename = "";

  let unlisten: UnlistenFn;

  onMount(async ()=> {
      unlisten = await appWindow.onFileDropEvent((event) => {
      if (event.payload.type === 'hover') {
          console.log('User hovering', event.payload.paths);
      } else if (event.payload.type === 'drop') {
          console.log('User dropped', event.payload.paths);
          if (event.payload.paths.length === 1) {
            filename = event.payload.paths[0];
          }
      } else {
          console.log('File drop cancelled');
      }
      });
  })

  onDestroy(async ()=> {
      unlisten();
  })

  onMount(async () => {
    await appWindow.onCloseRequested(async (event) => {
      console.log("closing");
      event.preventDefault();
      await appWindow.hide();
    });
  });
</script>

<Heading>Setting</Heading>

filename: {filename}
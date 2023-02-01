<script>
  import { ask } from '@tauri-apps/api/dialog';
  import { Button, Heading } from 'flowbite-svelte';
  import { open } from '@tauri-apps/api/dialog';
  const hoge = async () => {
    const yes = await ask('Are you sure?', 'Tauri');
    console.log(yes);
    // Open a selection dialog for image files
    const selected = await open({
      multiple: true,
      filters: [{
        name: 'Image',
        extensions: ['png', 'jpeg']
      }]
    });
    console.log(selected);
  }
</script>

<Heading>FS</Heading>

<Button on:click={hoge}>yes</Button>
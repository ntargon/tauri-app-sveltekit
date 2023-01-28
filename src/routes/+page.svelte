<script>
  import { Heading, Button, ButtonGroup, Card } from 'flowbite-svelte';
  import { settings_store } from "$lib/Settings";
</script>

<Heading>Home</Heading>

<Card>
<div>
  <p>count: {$settings_store.count}</p>
</div>
<div>
  <ButtonGroup>
    <Button on:click={() => {$settings_store.count += 1}}>+</Button>
    <Button on:click={() => {$settings_store.count  = 0}}>0</Button>
    <Button on:click={() => {$settings_store.count -= 1}}>-</Button>
  </ButtonGroup>
</div>
</Card>
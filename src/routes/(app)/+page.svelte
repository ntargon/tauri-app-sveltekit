<script>
  import { Heading, Button, ButtonGroup, Card, Checkbox } from 'flowbite-svelte';
  import { settings_store } from "$lib/store/settings";
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
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

<Table hoverable={true}>
  <TableHead>
    <TableHeadCell></TableHeadCell>
    <TableHeadCell>Address</TableHeadCell>
    <TableHeadCell></TableHeadCell>
  </TableHead>
  <TableBody tableBodyClass="divide-y">
{#each $settings_store.regs as reg, i}
    <TableBodyRow>
      <TableBodyCell tdClass="w-10"><Checkbox /></TableBodyCell>
      <TableBodyCell>{reg}</TableBodyCell>
      <TableBodyCell tdClass="w-10">
        <Button
          size="xs" class="w-fit" color="red"
          on:click={() => {$settings_store.regs = $settings_store.regs.filter((_ele, index) => index !== i) }}
        >x</Button>
      </TableBodyCell>
    </TableBodyRow>
{/each}
    <TableBodyRow>
      <TableBodyCell tdClass="w-10"></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell tdClass="w-10">
        <Button
          size="xs" class="w-fit" color="blue"
          on:click={() => {$settings_store.regs = [...$settings_store.regs, $settings_store.count]}}
        >+</Button>
      </TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>

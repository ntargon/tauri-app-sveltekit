<script lang="ts">
    import { Button, Input, ButtonGroup, Span } from 'flowbite-svelte';
    export let onClickR: ((address: string, data: string) => void);
    export let onClickW: ((address: string, data: string) => void);
    export let onClickX: ((address: string, data: string) => void);
    // export let address: string;
    // export let data: string;
    export let item: {address: string, data: string};
</script>
<div class="p-2 m-1 bg-blue-200 rounded-sm">
    <ButtonGroup class="w-full">
        <Span class="w-10"></Span>
        <Input bind:value={item.address} placeholder="address"/>
        <Input bind:value={item.data} placeholder="data"/>
        <Button on:click={() => onClickR(item.address, item.data)} size="xs" color="blue">R</Button>
        <Button on:click={() => onClickW(item.address, item.data)} size="xs" color="blue">W</Button>
        <Button on:click={() => onClickX(item.address, item.data)} size="xs" color="red">X</Button>
    </ButtonGroup>
</div>
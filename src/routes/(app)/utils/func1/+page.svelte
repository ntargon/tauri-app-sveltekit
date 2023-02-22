<script lang="ts">
    import RegReadWrite from "$lib/RegReadWrite.svelte";
	import {dndzone} from 'svelte-dnd-action';
	import {flip} from 'svelte/animate';
    import {Button} from 'flowbite-svelte';
    let itemsData = [
        {
            id: 0,
            address: "hoge",
            data: "fuga",
            onClickR: (address: string, data: string) => console.log(address),
            onClickW: (address: string, data: string) => console.log(data),
            onClickX: (address: string, data: string) => hanndleDelete(0),
        },
        {
            id: 1,
            address: "hoge",
            data: "fuga",
            onClickR: (address: string, data: string) => console.log(address),
            onClickW: (address: string, data: string) => console.log(data),
            onClickX: (address: string, data: string) => hanndleDelete(1),
        },
        {
            id: 2,
            address: "hoge",
            data: "fuga",
            onClickR: (address: string, data: string) => console.log(address),
            onClickW: (address: string, data: string) => console.log(data),
            onClickX: (address: string, data: string) => hanndleDelete(2),
        },
    ]
    let count = itemsData.length;
	let flipDurationMs = 300;

	function handleConsider(e: CustomEvent) {
		itemsData = e.detail.items;
	}
	function handleFinalize(e: CustomEvent) {
		itemsData = e.detail.items;
	}
    function handleAdd() {
        const id = count;
        count += 1;
        const item = {
            id: id,
            address: "asdf",
            data: "",
            onClickR: (address: string, data: string) => console.log(address),
            onClickW: (address: string, data: string) => console.log(data),
            onClickX: (address: string, data: string) => hanndleDelete(id),
        }
        itemsData = [...itemsData, item]
    }
    function hanndleDelete(id: number) {
        itemsData = itemsData.filter(item => item.id != id);
    }
</script>

<Button on:click={handleAdd}>Add</Button>

<div class="p-2 bg-gray-500" use:dndzone={{items: itemsData, flipDurationMs}}  on:finalize={handleFinalize}  on:consider={handleConsider}>
	{#each itemsData as item(item.id)}
		<div animate:flip={{duration: flipDurationMs}}>
            <RegReadWrite onClickR={item.onClickR} onClickW={item.onClickW} onClickX={item.onClickX} item={item}/>
		</div>
	{/each}
</div>
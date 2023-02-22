declare type Item = import('svelte-dnd-action').Item;
declare type DndEvent<Item> = import('svelte-dnd-action').DndEvent<Item>;
declare namespace svelte.JSX {
	interface HTMLAttributes<T> {
		onconsider?: (event: CustomEvent<DndEvent<Item>> & { target: EventTarget & T }) => void;
		onfinalize?: (event: CustomEvent<DndEvent<Item>> & { target: EventTarget & T }) => void;
	}
}

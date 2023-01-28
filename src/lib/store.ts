import { writable } from 'svelte/store';
import { Store } from "tauri-plugin-store-api";

type Settings = {
  count: number;
};
const store = new Store(".settings.dat");

let res = await store.get<Settings>("settings");
if (res === null) {
    res = {count: 0};
} else {
}

export const settings = writable(res);
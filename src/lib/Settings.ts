import { writable } from 'svelte/store'
import { Store } from "tauri-plugin-store-api";

type Settings = {
  count: number;
};

export function createSettingsStore() {
    const { subscribe, set} = writable({count: 0})
    const store = new Store(".settings.dat");

    return {
        subscribe,

        init: async () => {
            const res = await store.get<Settings>("settings");
            console.log(res);

            if(res !== null) {
                set(res);
            }
        },

        set: async (settings: Settings) => {
            await store.set("settings", settings);
            await store.save();
            set(settings);
        }
    }
}

export const settings_store = createSettingsStore();
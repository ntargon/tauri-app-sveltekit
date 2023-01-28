import { writable } from 'svelte/store'
import { Store } from "tauri-plugin-store-api";

type Settings = {
  count: number;
  regs: number[];
};

export function createSettingsStore() {
    const default_settings: Settings = {
        count: 0,
        regs: [],
    };

    const { subscribe, set} = writable<Settings>(default_settings);
    const store = new Store(".settings.dat");

    return {
        subscribe,

        init: async () => {
            const res = await store.get<Settings>("settings");
            console.log(res);

            if(res !== null) {
                if (res.count === undefined) {
                    res.count = 0;
                }
                if (res.regs === undefined) {
                    res.regs = [];
                }

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
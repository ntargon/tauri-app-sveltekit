import { writable } from 'svelte/store'
import { Store } from "tauri-plugin-store-api";
import type { Settings } from './api-types';
import { validateSettings } from './api-types.validator';

function createSettingsStore() {
    const default_settings: Settings = {
        count: 0,
        regs: [],
        hoge: false
    };

    const { subscribe, set} = writable<Settings>(default_settings);
    const store = new Store(".settings.dat");

    return {
        subscribe,

        init: async () => {
            try {
                set(validateSettings(await store.get("settings")));
            } catch {
                set(default_settings)
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
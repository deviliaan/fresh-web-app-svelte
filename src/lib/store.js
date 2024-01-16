import { readable, writable } from "svelte/store";

export const api_end = readable('https://gogoanime-api-production-6223.up.railway.app');
export const page = writable(1);
export const type = writable(1);
export const episode = writable(1);
export const isLoading = writable(true);

import { readable, writable } from "svelte/store";
import {persist, createLocalStorage} from "@macfja/svelte-persistent-store"
export const api_end = readable('https://gogoanime-api-production-6223.up.railway.app');
export const page = persist(writable(1),createLocalStorage(),"page");
export const type = persist(writable(1),createLocalStorage(),"type");
export const episode = writable(1);
export const isLoading = writable(false);
export const currentUrl = writable('Anime');

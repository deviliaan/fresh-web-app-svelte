import { writable } from "svelte/store";
import {persist, createLocalStorage} from "@macfja/svelte-persistent-store"
export const type = persist(writable(1),createLocalStorage(),"type");
export const episode = writable(1);
export const isLoading = writable(false);
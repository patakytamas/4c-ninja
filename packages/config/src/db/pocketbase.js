import PocketBase from 'pocketbase';
import { writable } from 'svelte/store';
import { POCKETBASE_URL, NODE } from '../secrets';

console.log(POCKETBASE_URL, 'kutyi3');
console.log(NODE, 'kutyi3');

export const pb = new PocketBase(POCKETBASE_URL);

export const currentUser = writable(pb.authStore.model);

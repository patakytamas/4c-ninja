<script lang="ts">
  import { Icon } from 'stwui';
  import { accountIcon, homeIcon } from '../../icons';
  import { writable, type Writable } from 'svelte/store';
  import { Menu, Badge, Row, Col } from 'stwui';
  import { page } from '$app/stores';
  import type { MenuItem } from '@repo/config';
  import { createEventDispatcher } from 'svelte';

  import { ListBox, ListBoxItem, Avatar, drawerStore } from '@skeletonlabs/skeleton';

  const dispatch = createEventDispatcher();

  async function logout() {
    drawerClose();
    dispatch('logout');
  }

  $: classesActive = (href: string) =>
    href === $page.url.pathname ? 'bg-primary-active-token' : '';

  export let items: MenuItem[];
  export let user = null;

  let collapsed = false;
  let active = '';
  const storeSingle: Writable<number> = writable(1);

  function toggleCollapse() {
    collapsed = !collapsed;
  }

  function drawerClose(): void {
    drawerStore.close();
  }
</script>

{#each items as item}
  {#if item.children?.length > 0}
    <hr class="!my-6 opacity-50" />
    <div id="base" class="text-primary-700 dark:text-primary-500 font-bold uppercase px-4">
      {item.label}
    </div>
  {/if}
  <nav class="list-nav">
    <ul>
      {#if item.children?.length > 0}
        {#each item.children as child}
          <li class="active" aria-selected="true">
            <a on:click={drawerClose} class={classesActive(child.href)} href={child.href}>
              <!--     <span class="badge bg-primary-500">💀</span>-->
              <span class="flex-auto text-xs">{child.label}</span>
            </a>
          </li>
        {/each}
      {:else}
        <li>
          <a on:click={drawerClose} class={classesActive(item.href)} href={item.href}>
            <!--     <span class="badge bg-primary-500">💀</span> -->
            <span class="flex-auto">{item.label}</span>
          </a>
        </li>
      {/if}
    </ul>
  </nav>
{/each}

<script lang="ts">
  import { AppBar, drawerStore } from '@skeletonlabs/skeleton';
  import { Avatar } from 'stwui';
  import { menuOpen } from '@repo/config/icons/index.ts';

  import { Icon } from 'stwui';

  export let userLogedIn: boolean;
</script>

<AppBar>
  <svelte:fragment slot="lead">
    <a href="/">
      <strong class="text-xl uppercase">Car register</strong>
    </a>
  </svelte:fragment>
  <svelte:fragment slot="trail">
    <div
      on:click={() => ($drawerStore.open = !$drawerStore.open)}
      class="lg:hidden btn btn-sm btn-ghost-surface"
    >
      <Icon data={menuOpen} />
      maci
    </div>

    {#if !userLogedIn}
      <a class="btn btn-sm btn-ghost-surface" href="/login" target="_blank" rel="noreferrer"
        >Login</a
      >
      <a class="btn btn-sm btn-ghost-surface" href="/register" target="_blank" rel="noreferrer"
        >Register</a
      >
    {:else}
      <a class="btn btn-sm btn-ghost-surface" href="/cars/new" rel="noreferrer">Új átírás</a>

      <form action="/logout" method="POST">
        <button type="submit" class="btn btn-sm btn-ghost-surface">Logout</button>
      </form>
    {/if}
  </svelte:fragment>
</AppBar>

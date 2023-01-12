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
      <strong class="text-xl uppercase">4c-Ninja - Roblox course</strong>
    </a>
  </svelte:fragment>
  <svelte:fragment slot="trail">
    <div
      on:click={() => ($drawerStore.open = !$drawerStore.open)}
      class="lg:hidden btn btn-sm btn-ghost-surface"
    >
      <Icon data={menuOpen} />
    </div>
  </svelte:fragment>
</AppBar>

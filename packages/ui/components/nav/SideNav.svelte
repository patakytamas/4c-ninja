<script lang="ts">
  import { Menu, Badge, Row, Col } from 'stwui';
  import type { MenuItem } from '@repo/config';
  import { Avatar, Media } from 'stwui';

  export let items: MenuItem[];

  let collapsed = false;
  let active = '';

  function toggleCollapse() {
    collapsed = !collapsed;
  }
</script>

<Row>
  <Menu {collapsed} {active}>
    {#each items as item}
      {#if item.children && item.children.length > 0}
        {#if item.icon}
          <Menu.Group key={item.key} label={item.label} href={item.href}>
            <Menu.Item.Icon slot="icon" data={item.icon} />
            {#each item.children as child}
              <Menu.Group.Item
                key={child.key}
                label={child.label}
                href={child.href}
                on:click={() => (active = `{item.key}-{child.key}`)}
              />
            {/each}
          </Menu.Group>
        {:else}
          <Menu.Group key={item.key} label={item.label} href={item.href}>
            {#each item.children as child}
              <Menu.Group.Item
                key={child.key}
                label={child.label}
                href={child.href}
                on:click={() => (active = `{item.key}-{child.key}`)}
              />
            {/each}
          </Menu.Group>
        {/if}
      {:else if item.icon && item.badge}
        <Menu.Item
          key={item.key}
          label={item.label}
          href={item.href}
          on:click={() => (active = item.key)}
        >
          <Menu.Item.Icon slot="icon" data={item.icon} />
          <Badge slot="extra" type={item.badgeType}>{item.badge}</Badge>
        </Menu.Item>
      {:else if item.icon}
        <Menu.Item
          key={item.key}
          label={item.label}
          href={item.href}
          on:click={() => (active = item.key)}
        >
          <Menu.Item.Icon slot="icon" data={item.icon} />
        </Menu.Item>
      {:else if item.badge}
        <Menu.Item
          key={item.key}
          label={item.label}
          href={item.href}
          on:click={() => (active = item.key)}
        >
          <Badge slot="extra" type={item.badgeType}>{item.badge}</Badge>
        </Menu.Item>
      {:else}
        <Menu.Item
          key={item.key}
          label={item.label}
          href={item.href}
          on:click={() => (active = item.key)}
        />
      {/if}
    {/each}
  </Menu>
</Row>
<Row>
  <form action="/logout" method="POST">
    <button type="submit" class="btn btn-sm btn-ghost-surface">Logout</button>
  </form>
</Row>

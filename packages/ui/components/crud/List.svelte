<script>
  import { label } from '@repo/config/labels';
  import { Icon } from 'stwui';
  import { view, edit, del, print } from '@repo/config/icons/index.ts';
  import {
    // Utilities
    createDataTableStore,
    dataTableHandler,
    // Svelte Actions
    tableInteraction,
    tableA11y
  } from '@skeletonlabs/skeleton';
  export let data;
  export let title = '';
  export let fields = [];
  export let href = '/cars';
  //const sourceData = data.list;

  const dataTableStore = createDataTableStore(
    // Pass your source data here:
    data,
    // Provide optional settings:
    {
      // The current search term.
      search: '',
      // The current sort key.
      sort: '',
      // Paginator component settings.
      pagination: { offset: 0, limit: 5, size: 0, amounts: [1, 2, 5, 10] }
    }
  );

  // This automatically handles search, sort, etc when the model updates.
  dataTableStore.subscribe((model) => dataTableHandler(model));
</script>

{title}
<input bind:value={$dataTableStore.search} type="search" placeholder="Search..." />
<div class="table-container">
  <table class="table table-hover" use:tableInteraction>
    <thead
      on:click={(e) => {
        dataTableStore.sort(e);
      }}
      on:keypress
    >
      <tr>
        <th
          ><input
            type="checkbox"
            on:click={(e) => {
              dataTableStore.selectAll(e.currentTarget.checked);
            }}
          /></th
        >
        <th> Actions </th>
        {#each fields as field}
          <th data-sort={field}>{label(field)}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each $dataTableStore.filtered as row, rowIndex}
        <tr class:table-row-checked={row.dataTableChecked}>
          <td><input type="checkbox" bind:checked={row.dataTableChecked} /></td>
          <td class="flex">
            <a href={`${href}/${row.id}`}><Icon data={view} /></a>
            <a href={`${href}/${row.id}/edit`}><Icon data={edit} /></a>
            <Icon data={del} />
            <Icon data={print} />
          </td>
          {#each fields as field}
            <td>
              {#if row.expand?.[field]}
                {row.expand[field].name}
              {:else}
                {row[field]}
              {/if}
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>

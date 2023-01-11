<script>
  import { label } from '@repo/config/labels';
  import MyDateComponent from './MyDateComponent.svelte';
  export let options = {};
  export let properties;
  export let value = '';
  export let placeholder = '';
  export let id = properties.name;
  export let title = label(properties.name);
  export let type = properties.type;
  export let disabled = false;
  export let required = false;

  export let errors;
  if (type === 'date' && !value) value = new Date();
</script>

<div class="form-control w-full max-w-lg mb-2">
  <label for={id} class="label font-medium pb-1">
    <span class="label-text">{title}</span>
  </label>
  {#if properties.options.values}
    <select name={id} {id} bind:value>
      {#each properties.options.values as option}
        <option value={option}>{option}</option>
      {/each}
    </select>
  {:else if properties.options.collectionId}
    <select name={id} {id} bind:value>
      {#each options as option}
        <option value={option.id}>{option.name}</option>
      {/each}
    </select>
  {:else}
    <input
      class={type === 'file'
        ? 'file-input file-input-bordered w-full max-w-lg'
        : 'input input-bordered w-full max-w-lg'}
      {type}
      {placeholder}
      {required}
      {disabled}
      {id}
      name={id}
      {value}
    />
  {/if}
  {#if errors}
    {#each errors as error}
      <label for={id} class="label py-0 pt-1">
        <span class="label-text-alt text-error">
          {error}
        </span>
      </label>
    {/each}
  {/if}
</div>

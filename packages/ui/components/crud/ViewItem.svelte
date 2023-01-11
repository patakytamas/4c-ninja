<script>
  import { label } from '@repo/config/labels';
  export let data;
  export let fields;
</script>

{#each fields as field}
  <dl class="list-dl">
    <div>
      <span class="flex-auto">
        <dt class=""><h4>{label(field)}</h4></dt>
        <dd>{data[field]}</dd>
      </span>
    </div>
    <!-- ... -->
  </dl>
{/each}

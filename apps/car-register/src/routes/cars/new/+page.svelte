<script>
	import { enhance } from '$app/forms';
	import { Input } from '@repo/ui/components';
	export let data;
</script>

<div class="flex flex-col w-full h-full p-2">
	<div class="w-full">
		<form
			action="?/create"
			method="POST"
			class="flex flex-col space-y-2 w-full items-center"
			enctype="multipart/form-data"
			use:enhance
		>
			<h3 class="text-3xl font-bold">Átírás</h3>
			<div class="w-full max-w-lg pt-3">
				<button type="submit" class="btn btn-sm btn-filled-secondary  max-w-lg">Mentés</button>
			</div>

			{#each data.schema as properties}
				<Input {properties} options={data.options} />
			{/each}

			<div class="form-control w-full max-w-lg">
				<label for="description" class="label font-medium pb-1">
					<span class="label-text">Project description</span>
				</label>
				<textarea name="description" class="textarea textarea-bordered h-24 resize-none" />
			</div>
			<div class="form-control w-full max-w-lg" />
			<div class="w-full max-w-lg pt-3">
				<button type="submit" class="btn btn-sm btn-filled-secondary  max-w-lg">Mentés</button>
			</div>
		</form>
	</div>
</div>
<pre>{JSON.stringify(data.schema, null, 2)}</pre>

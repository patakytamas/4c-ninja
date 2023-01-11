<script>
	import { List } from '@repo/ui/components';

	export let data;
	const title = 'Átírások';

	const fields = ['id', 'chassis', 'partner'];
</script>

<List data={data.list} {fields} />

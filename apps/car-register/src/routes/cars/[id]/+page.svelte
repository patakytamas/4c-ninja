<script>
	import { Row, Col } from 'stwui';
	import { ViewItem, QrCode } from '@repo/ui/components';

	export let data;

	const left = ['partner', 'model', 'financier'];
	const right = ['k2d', 'chassis', 'date'];
	const left2 = [
		'kw',
		'fee_type',
		'type',
		'subtraction_type',
		'pieces',
		'kw_fee',
		'',
		'fee',
		'traffic',
		'pedigree',
		'plate_fee',
		'deduction',
		'subtraction',
		'cost',
		'sum'
	];
	const right2 = ['note', 'plate_number'];
</script>

<Row gutter={['4', '0']}>
	<Col class="col-12">
		<ViewItem fields={left} data={data.item} />
		<ViewItem fields={left2} data={data.item} />
	</Col>

	<Col class="col-12">
		<QrCode value="cica" />
		<ViewItem fields={right} data={data.item} />
		<ViewItem fields={right2} data={data.item} />
	</Col>
</Row>

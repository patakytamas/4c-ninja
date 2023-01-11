import { serializeNonPOJOs } from '$lib/utils';
import { error } from '@sveltejs/kit';

export const load = ({ locals, params }) => {
	const getItem = async (id) => {
		try {
			const item = serializeNonPOJOs(await locals.pb.collection('cars').getOne(id));
			return item;
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
	};

	return {
		item: getItem(params.id)
	};
};

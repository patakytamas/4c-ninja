import { error, redirect } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';
import { getSchema } from '@repo/config/schema';

export const load = ({ locals }) => {
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/login');
	}

	const getOptions = async (collection) => {
		try {
			const list = serializeNonPOJOs(
				await locals.pb.collection(collection).getFullList(undefined, {
					sort: '-created'
				})
			);

			return list;
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
	};

	return {
		schema: getSchema('cars'),
		// options: { partners: getOptions('partners') }
		options: getOptions('partners')
	};
};

export const actions = {
	create: async ({ request, locals }) => {
		const formData = await request.formData();
		//formData.append('user', locals.user.id);
		console.log('kutyi', formData);
		try {
			await locals.pb.collection('cars').create(formData);
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}

		throw redirect(303, '/cars');
	}
};

import schema from './schema.json';

export const getSchema = (name) => {
	return schema.find((collection) => collection.name === name).schema;
};

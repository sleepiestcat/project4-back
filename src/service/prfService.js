import dataSource from '../config/dataSource.js';

const prfRepository = dataSource.getRepository('prf');

const insertPrf = async (name) => {};

export const getPrfList = async () => {
	try {
		const prfList = await prfRepository.find();
		return prfList;
	} catch (err) {
		console.error(err);
	}
};

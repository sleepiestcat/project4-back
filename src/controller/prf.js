import * as prfService from '../service/prfService.js';

export const getPrfList = async (req, res, next) => {
	try {
		const prfList = await prfService.getPrfList();
		res.status(200).json(prfList);
	} catch (err) {
		next(err);
	}
};

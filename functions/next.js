import { getNext, getRandom } from './common/utils';

/**
 * @param {Request} req
 * @returns {Promise<Response>}
 */
export default async function (req) {
	const origin = req.headers.get('referer');

	if (!origin) {
		console.error('Missing "referer" header');
		return Response.redirect(getRandom().url, 303);
	}

	const site = getNext(origin) ?? getRandom();

	return Response.redirect(site.url, 303);
}

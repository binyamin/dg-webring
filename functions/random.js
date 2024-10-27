import { getRandom } from './common/utils';

/**
 * @param {Request} req
 * @returns {Promise<Response>}
 */
export default async function (req) {
	const origin = req.headers.get('referer');

	const site = getRandom(origin ?? undefined);

	return Response.redirect(site.url, 303);
}

import members from '../../src/_data/members.json' with { type: 'json' };

/**
 * @param {string} url
 */
const sanitizeURL = url => {
	return url.replace(/^https?\:\/\/(www\.)?/, 'https://');
}

/**
 *
 * @param {string} comparison
 * @param {string} base
 */
const isSubPage = (comparison, base) => {
	return sanitizeURL(base).startsWith(sanitizeURL(comparison));
}

/**
 * @param {string} [url]
 */
const getIndex = (url) => {
	return url ? members.findIndex(site => isSubPage(url, site.url)) : -1;
}

/**
 * @param {string} url
 */
export function getNext(url) {
	const index = getIndex(url);

	if (index === -1) {
		console.log('referrer position not found.');
		return null;
	}

	const nextIndex = index < members.length - 1 ? index + 1 : 0;
	return members[nextIndex];
}

/**
 * @param {string} url
 */
export function getPrevious(url) {
	const index = getIndex(url);

	if (index === -1) {
		console.log('referrer position not found.');
		return null;
	}

	const prevIndex = index > 0 ? index - 1 : members.length - 1;
	return members[prevIndex];
}

/**
 * @param {string} [origin]
 */
export function getRandom(origin) {
	const selection = origin
		? members.filter(site => !isSubPage(origin, site.url))
		: members;

	const randomIndex = Math.floor(Math.random() * selection.length);
	return selection[randomIndex];
}

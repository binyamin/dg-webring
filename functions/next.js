const { redirect, getNext, getRandom } = require('./common/utils');

exports.handler = function (event, _context) {
	const { referer } = event.headers
	const site = getNext(referer) || getRandom()

	return redirect(site)
}

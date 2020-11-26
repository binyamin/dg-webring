const { redirect, getPrevious, getRandom } = require('./common/utils');

exports.handler = function(event, _context) {
    const { referer } = event.headers
    const site = getPrevious(referer) || getRandom()

    return redirect(site);
}

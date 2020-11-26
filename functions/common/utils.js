const members = require('../../src/_data/members');

const sanitizeURL = url => {
    return url.replace(/^https?:\/\/(www.){0,1}([\w.]+)\/?/, "https://$2");
}

const isSubPage = (comparison, base) => {
    return sanitizeURL(base).startsWith(sanitizeURL(comparison));
}

const getIndex = (url) => {
    return url ? members.findIndex(site => isSubPage(url, site.url)) : -1;
}

module.exports = {
    redirect: site => {
        const statusMessage = `redirecting to: ${site.url}`
        console.log(statusMessage)

        return {
            statusCode: 303,
            headers: { Location: site.url },
            body: statusMessage
        }
    },
    getNext: url => {
        const index = getIndex(url)
        if (index !== -1) {
            const nextIndex = index < members.length - 1 ? index + 1 : 0
            return members[nextIndex]
        }
        console.log('referrer position not found.')
        return null
    },
    getPrevious: url => {
        const index = getIndex(url)
        if (index !== -1) {
            const prevIndex = index > 0 ? index - 1 : members.length - 1
            return members[prevIndex]
        }
        console.log('referrer position not found.')
        return null
    },
    getRandom: url => {
        const selection = url
            ? members.filter(site => !isSubPage(url, site.url))
            : members
        const randomIndex = Math.floor(Math.random() * selection.length)
        return selection[randomIndex]
    }
}

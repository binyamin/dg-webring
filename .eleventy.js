module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy({ 'static': '.'});

    return {
        dir: {
            input: 'src'
        }
    }
}

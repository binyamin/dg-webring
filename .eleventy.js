module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy("src/assets")
    return {
        dir: {
            input: "src"
        },
        passthroughFileCopy: true
    }
}

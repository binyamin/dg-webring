export default (eleventyConfig) => {
	eleventyConfig.addPassthroughCopy({ 'static': '.' });

	return {
		dir: {
			input: 'src'
		}
	}
}

const postcss = require('postcss');

module.exports = postcss.plugin('postcss-reset-scrollbar', () => {
	return (css) => {
		css.walkRules((rule) => {
			const selector = rule.selector;
			if (selector.indexOf('scrollbar') >= 0) {
				rule.walkDecls((decl) => {
					// eslint-disable-next-line
					decl.value = '';
				});
			}
		});
	};
});

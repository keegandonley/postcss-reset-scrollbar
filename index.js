var postcss = require('postcss');

module.exports = postcss.plugin('postcss-reset-scrollbar', function(options) {
	options = options || {};

	return function (css) {
		css.walkRules(function (r) {
			var selector = r.selector;
			if (selector.indexOf('scrollbar') >= 0) {
				r.removeAll();
			}
		});
	};
});

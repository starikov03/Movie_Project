const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
	alias({
		"@components-layout": "src/components-layout",
		"@pages": "src/pages",
		"@redux": "src/redux",
		"@utilities": "src/utilities",
		"@constants": "src/constants",
	})(config);
	return config;
}
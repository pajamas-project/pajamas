module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
		node: true,
	},
	extends: [
		'xo',
    'prettier'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
	},
	plugins: [
		'@typescript-eslint',
	],
	rules: {
	},
};

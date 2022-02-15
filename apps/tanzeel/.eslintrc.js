require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	extends: [
		'@spa5k/eslint-config/profile/web-app',
		'@spa5k/eslint-config/mixins/friendly-locals',
		'@spa5k/eslint-config/mixins/tsdoc',
	],
	parserOptions: { tsconfigRootDir: __dirname },
	rules: {
		'no-console': 'off',
		'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
		'security-node/detect-crlf': 'off',
		'@typescript-eslint/naming-convention': 'off',
		'@rushstack/no-new-null': 'off',
		'@typescript-eslint/typedef': [
			'error',
			{
				'arrowParameter': false,
				'variableDeclaration': false,
			},
		],
	},
};

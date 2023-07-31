module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:react/jsx-runtime',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'prettier',
	],
	'overrides': [
		{
			'env': {
				'node': true
			},
			'files': [
				'.eslintrc.{js,cjs}'
			],
			'parserOptions': {
				'sourceType': 'script'
			}
		}
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module',
		'project': ["./tsconfig.json"]
	},
	'plugins': [
		'@typescript-eslint',
		'react'
	],
	'rules': {
		"no-multiple-empty-lines": 2,
		"no-trailing-spaces": 2,
		'@typescript-eslint/no-unused-vars': [
			1,
			{ argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' },
		],
		'react/react-in-jsx-scope': [0],
		'react/jsx-curly-brace-presence': [
			1,
			{ props: 'never', children: 'never', propElementValues: 'always' },
		],
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		]
	},
	'root': true
};

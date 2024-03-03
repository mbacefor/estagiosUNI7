module.exports = {
  parser: '@typescript-eslint/parser',

  plugins: ['@typescript-eslint'],

  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-object-literal-type-assertion': 0,
    'sort-imports': [
      'warn',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
  },
};

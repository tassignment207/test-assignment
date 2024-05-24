module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['react', 'jsx-a11y', 'import', 'prettier', '@typescript-eslint'],
  globals: {},
  rules: {
    'prettier/prettier': ['error'],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'react/button-has-type': 0,
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/prop-types': ['off', {}],
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 0,
    'react/function-component-definition': 'off',
    'no-restricted-exports': [
      'error',
      {
        restrictedNamedExports: ['then'],
      },
    ],
    'no-param-reassign': [
      'error',
      { ignorePropertyModificationsFor: ['state'] },
    ],
    'import/prefer-default-export': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
        paths: ['src'],
      },
    },
    'import/extensions': ['.js', '.ts', '.mjs', '.jsx', '.tsx'],
  },
};

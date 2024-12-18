import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tsEslint from 'typescript-eslint';

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default tsEslint.config(
  {
    ignores: ['dist'],
  },
  {
    extends: [
      ...compat.extends('next/core-web-vitals'),
      ...compat.extends('next/typescript'),
      js.configs.recommended,
      ...tsEslint.configs.recommended,
      // 'next/core-web-vitals',
      // 'next/typescript',
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    ignores: ['**/*.css'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      'react-refresh/only-export-components': ['off', { allowConstantExport: true }],
      'linebreak-style': ['error', 'unix'],
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/consistent-type-imports': 'error',
      'import/no-anonymous-default-export': 'off',
      semi: ['error', 'always'],
      eqeqeq: ['error', 'always'],

      'max-len': [
        'error',
        {
          code: 100,
          ignoreComments: true,
        },
      ],

      'no-console': 'error',

      'no-trailing-spaces': [
        'error',
        {
          skipBlankLines: true,
        },
      ],

      'eol-last': ['error', 'always'],
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/display-name': 'off',
    },
  },
);

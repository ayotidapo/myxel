import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      // disable
      '@typescript-eslint/no-explicit-any': 'off',

      // OR warn
      // '@typescript-eslint/no-explicit-any': 'warn',

      // OR keep error but allow rest args
      // '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],
    },
  },
];

export default eslintConfig;

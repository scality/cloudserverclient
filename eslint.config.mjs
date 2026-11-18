import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import scality from '@scality/eslint-config-scality';
import { jest } from '@scality/eslint-config-scality/testing';

export default defineConfig(
    {
        ignores: [
            '**/build/**',
            '**/dist/**',
            '**/node_modules/**',
            '*.js',
            '**/coverage/**',
        ],
    },
    ...scality,
    {
        files: ['**/*.js'],
        languageOptions: {
            sourceType: 'commonjs',
        },
    },
    {
        files: [tseslint.globs.ts],
        extends: [tseslint.configs.recommended],
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unused-vars': ['error', { 
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                caughtErrorsIgnorePattern: '^_'
            }],
            '@typescript-eslint/ban-ts-comment': 'off',
        }
    },
    {
        // Runs as a plain CommonJS consumer of the published package
        files: ['tests/packaging/**/*.js'],
        rules: {
            'no-console': 'off',
        },
    },
    jest(['tests/**/*.ts']),
);

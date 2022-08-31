module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: 'vue-eslint-parser',
  extends: ['plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
  plugins: ['vue', 'prettier', 'import'],
  rules: {
    camelcase: 'error',
    'no-var': 'error',
    allowEmptyCatch: 'off',
    'prettier/prettier': 'error',
    'prefer-const': 'error',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'vue/no-unused-vars': [
      'error',
      {
        ignorePattern: '^_',
      },
    ],
    'vue/multi-word-component-names': 'off',
    'vue/no-parsing-error': [
      'error',
      {
        'control-character-reference': false,
      },
    ],
    'vue/no-v-html': 'off',
    'max-lines': [
      'warn',
      {
        max: 800,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'import/newline-after-import': 'error',
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
    defineAppConfig: 'readonly',
    definePageConfig: 'readonly',
  },
};

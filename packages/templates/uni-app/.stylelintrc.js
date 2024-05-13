module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-html/vue',
    'stylelint-config-recess-order',
  ],
  plugins: ['stylelint-scss', 'stylelint-order', 'stylelint-prettier'],
  overrides: [
    {
      files: ['**/*.(css|html|vue)'],
      customSyntax: 'postcss-html',
    },
    {
      files: ['*.scss', '**/*.scss'],
      customSyntax: 'postcss-scss',
      extends: ['stylelint-config-standard-scss', 'stylelint-config-recommended-vue/scss'],
    },
  ],
  rules: {
    'prettier/prettier': true,
    'selector-class-pattern': null,
    'no-descending-specificity': null,
    'scss/dollar-variable-pattern': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep', 'global'],
      },
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'function',
          'if',
          'each',
          'include',
          'mixin',
          'use',
          'forward',
          'return',
        ],
      },
    ],
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['/map.*/', 'getCssVar', 'boleGetCssVar', 'v-bind', 'constant'],
      },
    ],
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['transitionduration'],
      },
    ],
    'no-empty-source': null,
    'named-grid-areas-no-invalid': null,
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null,
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested'],
      },
    ],
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    'order/order': [
      [
        'dollar-variables',
        'custom-properties',
        'at-rules',
        'declarations',
        {
          type: 'at-rule',
          name: 'supports',
        },
        {
          type: 'at-rule',
          name: 'media',
        },
        'rules',
      ],
      { severity: 'warning' },
    ],
    'import-notation': null,
    'scss/dollar-variable-empty-line-before': null,
    'selector-type-no-unknown': [
      true,
      {
        ignoreTypes: ['page', 'loading-layout'],
      },
    ],
    'function-name-case': [
      'lower',
      {
        ignoreFunctions: ['getCssVar', 'boleGetCssVar'],
      },
    ],
    'scss/at-mixin-pattern': null,
    'scss/at-import-partial-extension': null,
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
};

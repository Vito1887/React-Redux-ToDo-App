module.exports = {
  trailingComma: 'es5',
  singleQuote: true,
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  importOrder: [
    '^src',
    '<THIRD_PARTY_MODULES>',
    '^package.json$',
    '^src/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

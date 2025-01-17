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
    '^(?!src)(.*)\\.css$',
    '^src/styles/(.*)\\.css$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

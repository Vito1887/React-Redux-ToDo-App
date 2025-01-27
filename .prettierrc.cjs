module.exports = {
  trailingComma: 'es5',
  singleQuote: true,
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^package.json$',
    '^(?!src)(.*)\\.css$',
    '^src/styles/(.*)\\.css$',
    '^src/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

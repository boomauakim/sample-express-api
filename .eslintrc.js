module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  rules: {
    "import/no-extraneous-dependencies": ["error", { packageDir: "." }],
    "prettier/prettier": ["error", { singleQuote: true }]
  }
};
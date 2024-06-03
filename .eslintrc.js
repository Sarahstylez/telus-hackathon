module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  plugins: ["react-hooks"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "react-hooks/exhaustive-deps": [
      "warn",
      { additionalHooks: "sumMonthlyCost" },
    ],
    ...(process.env.CI ? {} : { "no-unused-vars": "warn" }),
  },
};

import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["js/**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "script",
      globals: {
        document: "readonly",
        window: "readonly",
        navigator: "readonly",
        fetch: "readonly",
        console: "readonly",
        IntersectionObserver: "readonly"
      }
    },
    rules: {
      // The quality gate: a missing semicolon fails the build.
      semi: ["error", "always"],
      eqeqeq: ["error", "always"],
      "no-var": "error",
      "prefer-const": "error",
      quotes: ["error", "double"]
    }
  }
];

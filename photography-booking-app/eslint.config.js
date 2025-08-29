// eslint.config.js
import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import hooks from "eslint-plugin-react-hooks";
import globals from "globals";

export default [
  { ignores: ["dist/**", "node_modules/**"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: "module",
      globals: { ...globals.browser, ...globals.node }
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": hooks
    },
    settings: { react: { version: "detect" } },
    rules: {
      ...js.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...hooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off"
    }
  }
];

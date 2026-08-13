/** @type {import("stylelint").Config} */
export default {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-clean-order",
    "stylelint-prettier/recommended",
  ],
  rules: {
    // === SCSS ===
    // Enforces kebab-case naming pattern for variables.
    "scss/dollar-variable-pattern": "^_?[a-z][a-z0-9]*(-[a-z0-9]+)*$",

    // Enforces BEM naming pattern for selectors.
    "selector-class-pattern": [
      "^[a-z]([a-z0-9-]+)?(__[a-z0-9-]+)?(--[a-z0-9-]+)?$",
      { resolveNestedSelectors: true },
    ],

    // Selectors may not nest more than three times.
    "max-nesting-depth": 3,

    // Compound selectors may not nest more than three times.
    "selector-max-compound-selectors": 3,

    // Enables unknown rules in CSS, but disables them in SCSS.
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
  },
};

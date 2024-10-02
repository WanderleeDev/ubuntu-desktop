// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");
const ngrx = require("@ngrx/eslint-plugin/v9");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
      ...ngrx.configs.all,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
      "@angular-eslint/no-empty-lifecycle-method": ["error"],
      "@angular-eslint/use-lifecycle-interface": ["error"],
      "@angular-eslint/component-class-suffix": ["error"],
      "@angular-eslint/component-max-inline-declarations": [
        "error",
        {
          template: 70,
          styles: 10,
        },
      ],
      "@angular-eslint/contextual-lifecycle": ["error"],
      "@angular-eslint/sort-lifecycle-methods": ["error"],
      "@angular-eslint/no-duplicates-in-metadata-arrays": ["error"],
      "@angular-eslint/no-pipe-impure": ["error"],
      "@angular-eslint/prefer-on-push-component-change-detection": ["error"],
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        {
          allowedNames: [
            "ngOnInit",
            "ngOnDestroy",
            "ngAfterViewInit",
            "ngAfterViewChecked",
            "ngAfterContentInit",
            "ngAfterContentChecked",
            "ngOnChanges",
            "ngDoCheck",
          ],
        },
      ],
      "@typescript-eslint/no-explicit-any": ["error"],
      "@typescript-eslint/no-empty-function": ["error"],
      "@typescript-eslint/no-useless-constructor": ["error"],
      "prettier/prettier": [
        "error",
        { endOfLine: "auto", singleQuote: false, quoteProps: "consistent" },
      ],
      "@ngrx/no-typed-global-store": ["off"],
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {
      "@angular-eslint/template/alt-text": ["error"],
      "@angular-eslint/template/button-has-type": ["error"],
      "@angular-eslint/template/click-events-have-key-events": ["error"],
      "@angular-eslint/template/interactive-supports-focus": ["error"],
      "@angular-eslint/template/prefer-control-flow": ["error"],
      "@angular-eslint/template/prefer-ngsrc": ["error"],
      "@angular-eslint/template/role-has-required-aria": ["error"],
      "@angular-eslint/template/use-track-by-function": ["error"],
      "@angular-eslint/template/no-duplicate-attributes": ["error"],
      "@angular-eslint/template/conditional-complexity": [
        "error",
        { maxComplexity: 2 },
      ],
      "@angular-eslint/template/cyclomatic-complexity": [
        "error",
        { maxComplexity: 5 },
      ],
    },
  },
  eslintPluginPrettierRecommended
);

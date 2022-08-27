"use strict";

module.exports = {
  rules: {
    // The rules below are listed in the order they appear on the eslint
    // rules page. All rules are listed to make it easier to keep in sync
    // as new ESLint rules are added.
    // http://eslint.org/docs/rules/
    //
    // Rules in the `eslint:recommended` ruleset that aren't specifically
    // being overridden are listed but commented out (so they don't
    // override a base ruleset).
    //
    // Possible Problems
    // https://eslint.org/docs/latest/rules/#possible-problems
    // ---------------------------------------------
    // "array-callback-return": "off",
    // "constructor-super": "off", // eslint:recommended
    // "for-direction": "off", // eslint:recommended
    // "getter-return": "off", // eslint:recommended
    // "no-async-promise-executor": "off", // eslint:recommended
    // "no-await-in-loop": "off",
    // "no-class-assign": "off", // eslint:recommended
    // "no-compare-neg-zero": "off", // eslint:recommended
    // "no-cond-assign": "off", // eslint:recommended
    // "no-const-assign": "off", // eslint:recommended
    // "no-constant-binary-expression": "off",
    // "no-constant-condition": "off", // eslint:recommended
    "no-constructor-return": "error",
    // "no-control-regex": "off", // eslint:recommended
    // "no-debugger": "off", // eslint:recommended
    // "no-dupe-args": "off", // eslint:recommended
    // "no-dupe-class-members": "off", // eslint:recommended
    // "no-dupe-else-if": "off", // eslint:recommended
    // "no-dupe-keys": "off", // eslint:recommended
    // "no-duplicate-case": "off", // eslint:recommended
    "no-duplicate-imports": "error",
    // "no-empty-character-class": "off", // eslint:recommended
    // "no-empty-pattern": "off", // eslint:recommended
    // "no-ex-assign": "off", // eslint:recommended
    // "no-fallthrough": "off", // eslint:recommended
    // "no-func-assign": "off", // eslint:recommended
    // "no-import-assign": "off", // eslint:recommended
    // "no-inner-declarations": "off", // eslint:recommended
    // "no-invalid-regexp": "off", // eslint:recommended
    // "no-irregular-whitespace": "off", // eslint:recommended
    // "no-loss-of-precision": "off", // eslint:recommended
    // "no-misleading-character-class": "off", // eslint:recommended
    // "no-new-symbol": "off", // eslint:recommended
    // "no-obj-calls": "off", // eslint:recommended
    "no-promise-executor-return": "error",
    // "no-prototype-builtins": "off", // eslint:recommended
    // "no-self-assign": "off", // eslint:recommended
    "no-self-compare": "error",
    // "no-setter-return": "off", // eslint:recommended
    // "no-sparse-arrays": "off", // eslint:recommended
    "no-template-curly-in-string": "warn",
    // "no-this-before-super": "off", // eslint:recommended
    // "no-undef": "off", // eslint:recommended
    // "no-unexpected-multiline": "off", // eslint:recommended
    // "no-unmodified-loop-condition": "off",
    // "no-unreachable": "off", // eslint:recommended
    "no-unreachable-loop": "error",
    // "no-unsafe-finally": "off", // eslint:recommended
    // "no-unsafe-negation": "off", // eslint:recommended
    // "no-unsafe-optional-chaining": "off", // eslint:recommended
    "no-unused-private-class-members": "error",
    // "no-unused-vars": "off", // eslint:recommended
    "no-use-before-define": "error",
    // "no-useless-backreference": "off", // eslint:recommended
    "require-atomic-updates": "warn",
    // "use-isnan": "off", // eslint:recommended
    // "valid-typeof": "off", // eslint:recommended
    //
    // Suggestions
    // https://eslint.org/docs/latest/rules/#suggestions
    // ---------------------------------------------
    "accessor-pairs": "error",
    // "arrow-body-style": "off",
    // "block-scoped-var": "off",
    // "camelcase": "off",
    // "capitalized-comments": "off",
    // "class-methods-use-this": "off",
    // "complexity": "off",
    "consistent-return": "error",
    // "consistent-this": "off",
    "curly": "error",
    // "default-case": "off",
    "default-case-last": "error",
    "default-param-last": "error",
    "dot-notation": "error",
    "eqeqeq": "error",
    // "func-name-matching": "off",
    // "func-names": "off",
    // "func-style": "off",
    "grouped-accessor-pairs": "warn",
    // "guard-for-in": "off",
    // "id-denylist": "off",
    // "id-length": "off",
    // "id-match": "off",
    // "init-declarations": "off",
    // "max-classes-per-file": "off",
    // "max-depth": "off",
    // "max-lines": "off",
    // "max-lines-per-function": "off",
    // "max-nested-callbacks": "off",
    "max-params": ["warn", 5],
    // "max-statements": "off",
    // "multiline-comment-style": "off",
    // "new-cap": "off",
    // "no-alert": "off",
    // "no-array-constructor": "off",
    // "no-bitwise": "off",
    // "no-caller": "off",
    // "no-case-declarations": "off", // eslint:recommended
    // "no-confusing-arrow": "off",
    "no-console": "warn",
    // "no-continue": "off",
    // "no-delete-var": "off", // eslint:recommended
    // "no-div-regex": "off",
    "no-else-return": "error",
    // "no-empty": "off", // eslint:recommended
    "no-empty-function": "warn",
    // "no-eq-null": "off",
    // "no-eval": "off",
    "no-extend-native": "error",
    // "no-extra-bind": "off",
    // "no-extra-boolean-cast": "off", // eslint:recommended
    "no-extra-label": "error",
    // "no-extra-semi": "off", // eslint:recommended
    "no-floating-decimal": "error",
    // "no-global-assign": "off", // eslint:recommended
    // "no-implicit-coercion": "off",
    // "no-implicit-globals": "off",
    "no-implied-eval": "error",
    // "no-inline-comments": "off",
    // "no-invalid-this": "off",
    "no-iterator": "error",
    "no-label-var": "error",
    // "no-labels": "off",
    // "no-lone-blocks": "off",
    "no-lonely-if": "error",
    // "no-loop-func": "off",
    "no-magic-numbers": ["warn", { ignore: [-1, 0, 1] }],
    // "no-mixed-operators": "off",
    "no-multi-assign": "error",
    // "no-multi-str": "off",
    // "no-negated-condition": "off",
    "no-nested-ternary": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-wrappers": "error",
    // "no-nonoctal-decimal-escape": "off", // eslint:recommended
    // "no-octal": "off", // eslint:recommended
    // "no-octal-escape": "off",
    "no-param-reassign": "error",
    // "no-plusplus": "off",
    "no-proto": "error",
    // "no-redeclare": "off", // eslint:recommended
    // "no-regex-spaces": "off", // eslint:recommended
    // "no-restricted-exports": "off",
    // "no-restricted-globals": "off",
    // "no-restricted-imports": "off",
    // "no-restricted-properties": "off",
    // "no-restricted-syntax": "off",
    "no-return-assign": "error",
    "no-return-await": "error",
    // "no-script-url": "off",
    "no-sequences": "error",
    "no-shadow": ["error", { builtinGlobals: true }],
    // "no-shadow-restricted-names": "off", // eslint:recommended
    // "no-ternary": "off",
    "no-throw-literal": "error",
    // "no-undef-init": "off",
    "no-undefined": "error",
    // "no-underscore-dangle": "off",
    "no-unneeded-ternary": "error",
    "no-unused-expressions": ["error", { enforceForJSX: true }],
    // "no-unused-labels": "off", // eslint:recommended
    "no-useless-call": "error",
    // "no-useless-catch": "off", // eslint:recommended
    "no-useless-computed-key": "error",
    "no-useless-concat": "warn",
    "no-useless-constructor": "error",
    // "no-useless-escape": "off", // eslint:recommended
    // "no-useless-rename": "off",
    "no-useless-return": "error",
    "no-var": "error",
    "no-void": "error",
    "no-warning-comments": "off",
    // "no-with": "off", // eslint:recommended
    "object-shorthand": "error",
    // "one-var": "off",
    // "one-var-declaration-per-line": "off",
    "operator-assignment": "warn",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    // "prefer-destructuring": "off",
    // "prefer-exponentiation-operator": "off",
    // "prefer-named-capture-group": "off",
    // "prefer-numeric-literals": "off",
    "prefer-object-has-own": "warn",
    // "prefer-object-spread": "off",
    "prefer-promise-reject-errors": "error",
    // "prefer-regex-literals": "off",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    // "prefer-template": "off",
    // "quote-props": "off",
    // "radix": "off",
    "require-await": "warn",
    // "require-unicode-regexp": "off",
    // "require-yield": "off", // eslint:recommended
    // "sort-imports": ["error", { allowSeparatedGroups: true }],
    // "sort-keys": "off",
    // "sort-vars": "off",
    "spaced-comment": "warn",
    // "strict": "off",
    // "symbol-description": "off",
    // "vars-on-top": "off",
    "yoda": "warn",
    //
    // Layout & Formatting
    // https://eslint.org/docs/latest/rules/#layout--formatting
    // ---------------------------------------------
    // "array-bracket-newline": "off",
    // "array-bracket-spacing": "off",
    // "array-element-newline": "off",
    // "arrow-parens": "off",
    // "arrow-spacing": "off",
    // "block-spacing": "off",
    // "brace-style": "off",
    // "comma-dangle": "off",
    // "comma-spacing": "off",
    // "comma-style": "off",
    // "computed-property-spacing": "off",
    // "dot-location": "off",
    // "eol-last": "off",
    // "func-call-spacing": "off",
    // "function-call-argument-newline": "off",
    // "function-paren-newline": "off",
    // "generator-star-spacing": "off",
    // "implicit-arrow-linebreak": "off",
    // "indent": "off",
    // "jsx-quotes": "off",
    // "key-spacing": "off",
    // "keyword-spacing": "off",
    // "line-comment-position": "off",
    // "linebreak-style": "off",
    // "lines-around-comment": "off",
    // "lines-between-class-members": "off",
    // "max-len": "off",
    // "max-statements-per-line": "off",
    // "multiline-ternary": "off",
    // "new-parens": "off",
    // "newline-per-chained-call": "off",
    // "no-extra-parens": "off",
    // "no-mixed-spaces-and-tabs": "off", // eslint:recommended
    // "no-multi-spaces": "off",
    // "no-multiple-empty-lines": "off",
    // "no-tabs": "off",
    // "no-trailing-spaces": "off",
    // "no-whitespace-before-property": "off",
    // "nonblock-statement-body-position": "off",
    // "object-curly-newline": "off",
    // "object-curly-spacing": "off",
    // "object-property-newline": "off",
    // "operator-linebreak": "off",
    // "padded-blocks": "off",
    // "padding-line-between-statements": "off",
    // "quotes": "off",
    // "rest-spread-spacing": "off",
    // "semi": "off",
    // "semi-spacing": "off",
    // "semi-style": "off",
    // "space-before-blocks": "off",
    // "space-before-function-paren": "off",
    // "space-in-parens": "off",
    // "space-infix-ops": "off",
    // "space-unary-ops": "off",
    // "switch-colon-spacing": "off",
    // "template-curly-spacing": "off",
    // "template-tag-spacing": "off",
    // "unicode-bom": "off",
    // "wrap-iife": "off",
    // "wrap-regex": "off",
    // "yield-star-spacing": "off",
  },
};

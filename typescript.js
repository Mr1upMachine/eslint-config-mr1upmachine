"use strict";

module.exports = {
  rules: {
    // The rules below are listed in the order they appear on the
    // typescript-eslint rules page. All rules are listed to make 
    // it easier to keep in sync as new rules are added.
    // https://typescript-eslint.io/rules/
    //
    // Rules in the `@typescript-eslint/recommended` ruleset that aren't specifically
    // being overridden are listed but commented out (so they don't
    // override a base ruleset). Same goes for `@typescript-eslint/strict`.
    //
    // Some rules have duplicates in this ruleset due to added TypeScript support.
    // We favor the typescript-eslint rules since they are an extention of their
    // ESLint counterparts.
    //
    // Disabled ESLint Rules
    // ---------------------------------------------
    "default-param-last": "off", // @typescript-eslint/default-param-last
    "dot-notation": "off", // @typescript-eslint/dot-notation
    "no-duplicate-imports": "off", // @typescript-eslint/no-duplicate-imports
    "no-empty-function": "off", // @typescript-eslint/no-empty-function
    "no-implied-eval": "off", // @typescript-eslint/no-implied-eval
    "no-magic-numbers": "off", // @typescript-eslint/no-magic-numbers
    "no-redeclare": "off", // @typescript-eslint/no-redeclare
    "no-return-await": "off", // @typescript-eslint/return-await
    "no-shadow": "off", // @typescript-eslint/no-shadow
    "no-throw-literal": "off", // @typescript-eslint/no-throw-literal
    "no-unused-expressions": "off", // @typescript-eslint/no-unused-expressions
    "no-use-before-define": "off", // @typescript-eslint/no-use-before-define
    "no-useless-constructor": "off", // @typescript-eslint/no-useless-constructor
    "require-await": "off", // @typescript-eslint/require-await
    //
    // Supported Rules
    // https://typescript-eslint.io/rules/#supported-rules
    // ---------------------------------------------
    // "@typescript-eslint/adjacent-overload-signatures": "off", // @typescript-eslint/recommended
    // "@typescript-eslint/array-type": "off", // @typescript-eslint/strict
    // "@typescript-eslint/await-thenable": "off", // @typescript-eslint/recommended
    // "@typescript-eslint/ban-ts-comment": "off", // @typescript-eslint/recommended
    // "@typescript-eslint/ban-tslint-comment": "off", // @typescript-eslint/strict
    // "@typescript-eslint/ban-types": "off", // @typescript-eslint/recommended
    // "@typescript-eslint/class-literal-property-style": "off", // @typescript-eslint/strict
    // "@typescript-eslint/consistent-generic-constructors": "off", // @typescript-eslint/strict
    // "@typescript-eslint/consistent-indexed-object-style": "off", // @typescript-eslint/strict
    // "@typescript-eslint/consistent-type-assertions": "off", // @typescript-eslint/strict
    // "@typescript-eslint/consistent-type-definitions": "off", // @typescript-eslint/strict
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/explicit-function-return-type": ["error", { allowExpressions: true }],
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      { accessibility: "no-public", overrides: { properties: "explicit" } },
    ],
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "@typescript-eslint/member-delimiter-style": "error",
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/method-signature-style": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "default",
        format: ["camelCase"],
      },
      {
        selector: "variable",
        format: ["camelCase", "UPPER_CASE"],
      },
      {
        selector: "variable",
        modifiers: ["destructured"],
        format: null,
      },
      {
        selector: "memberLike",
        format: ["camelCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "memberLike",
        modifiers: ["private"],
        format: ["camelCase"],
        leadingUnderscore: "require",
      },
      {
        selector: ["enumMember", "typeLike"],
        format: ["PascalCase"],
      },
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: false,
        },
      },
      {
        selector: "typeAlias",
        format: ["PascalCase"],
        custom: {
          regex: "^T[A-Z]",
          match: false,
        },
      },
    ],
    // "@typescript-eslint/no-base-to-string": "off", // @typescript-eslint/strict
    // "@typescript-eslint/no-confusing-non-null-assertion": "off", // @typescript-eslint/strict
    "@typescript-eslint/no-confusing-void-expression": ["error", { ignoreArrowShorthand: true }],
    // "@typescript-eslint/no-duplicate-enum-values": "off", // @typescript-eslint/strict
    // "@typescript-eslint/no-dynamic-delete": "off", // @typescript-eslint/strict
    // "@typescript-eslint/no-empty-interface": "off", // @typescript-eslint/recommended
    // "@typescript-eslint/no-explicit-any": "off", // @typescript-eslint/recommended
    // "@typescript-eslint/no-extra-non-null-assertion": "off", // @typescript-eslint/recommended
    // "@typescript-eslint/no-extraneous-class": "off", // @typescript-eslint/strict
    // "@typescript-eslint/no-floating-promises": "off", // @typescript-eslint/recommended
    // "@typescript-eslint/no-for-in-array": "off", // @typescript-eslint/recommended
    // "@typescript-eslint/no-implicit-any-catch": "off",
    // "@typescript-eslint/no-inferrable-types": "off", // @typescript-eslint/recommended
    // "@typescript-eslint/no-invalid-void-type": "off", // @typescript-eslint/strict
    // "@typescript-eslint/no-meaningless-void-operator": "off", // @typescript-eslint/strict
    // "@typescript-eslint/no-misused-new": "off", // @typescript-eslint/recommended
    // "@typescript-eslint/no-misused-promises": "off", // @typescript-eslint/recommended
    // "@typescript-eslint/no-namespace": "off", // @typescript-eslint/recommended
    // "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "off", // @typescript-eslint/strict
    // "@typescript-eslint/no-non-null-asserted-optional-chain": "off", // @typescript-eslint/recommended
    // "@typescript-eslint/no-non-null-assertion": "off", // @typescript-eslint/recommended
    // "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-redundant-type-constituents": "warn",
    // "@typescript-eslint/no-require-imports": "off",
    // "@typescript-eslint/no-this-alias": "off", // @typescript-eslint/recommended
    // "@typescript-eslint/no-type-alias": "off",
    // "@typescript-eslint/no-unnecessary-boolean-literal-compare": "off", // @typescript-eslint/strict
    // "@typescript-eslint/no-unnecessary-condition": "off", // @typescript-eslint/strict
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    // "@typescript-eslint/no-unnecessary-type-arguments": "off", // @typescript-eslint/strict
    // "@typescript-eslint/no-unnecessary-type-assertion": "off", // @typescript-eslint/recommended
    // "@typescript-eslint/no-unnecessary-type-constraint": "off", // @typescript-eslint/recommended
    // "@typescript-eslint/no-unsafe-argument": "off", // @typescript-eslint/recommended
    // "@typescript-eslint/no-unsafe-assignment": "off", // @typescript-eslint/recommended
    // "@typescript-eslint/no-unsafe-call": "off", // @typescript-eslint/recommended
    // "@typescript-eslint/no-unsafe-member-access": "off", // @typescript-eslint/recommended
    // "@typescript-eslint/no-unsafe-return": "off", // @typescript-eslint/recommended
    "@typescript-eslint/no-useless-empty-export": "error",
    // "@typescript-eslint/no-var-requires": "off", // @typescript-eslint/recommended
    // "@typescript-eslint/non-nullable-type-assertion-style": "off", // @typescript-eslint/strict
    // "@typescript-eslint/parameter-properties": "off",
    // "@typescript-eslint/prefer-as-const": "off", // @typescript-eslint/recommended
    "@typescript-eslint/prefer-enum-initializers": "error",
    // "@typescript-eslint/prefer-for-of": "off", // @typescript-eslint/strict
    // "@typescript-eslint/prefer-function-type": "off", // @typescript-eslint/strict
    // "@typescript-eslint/prefer-includes": "off", // @typescript-eslint/strict
    // "@typescript-eslint/prefer-literal-enum-member": "off", // @typescript-eslint/strict
    // "@typescript-eslint/prefer-namespace-keyword": "off", // @typescript-eslint/recommended
    // "@typescript-eslint/prefer-nullish-coalescing": "off", // @typescript-eslint/strict
    // "@typescript-eslint/prefer-optional-chain": "off", // @typescript-eslint/strict
    "@typescript-eslint/prefer-readonly": "error",
    // "@typescript-eslint/prefer-readonly-parameter-types": "error",
    // "@typescript-eslint/prefer-reduce-type-parameter": "off", // @typescript-eslint/strict
    "@typescript-eslint/prefer-regexp-exec": "error",
    // "@typescript-eslint/prefer-return-this-type": "off", // @typescript-eslint/strict
    // "@typescript-eslint/prefer-string-starts-ends-with": "off", // @typescript-eslint/strict
    // "@typescript-eslint/prefer-ts-expect-error": "off", // @typescript-eslint/strict
    "@typescript-eslint/promise-function-async": "warn",
    "@typescript-eslint/require-array-sort-compare": "warn",
    // "@typescript-eslint/restrict-plus-operands": "off", // @typescript-eslint/recommended
    "@typescript-eslint/restrict-template-expressions": [
      "error",
      {
        allowNumber: true,
        allowBoolean: true, 
        allowAny: true, 
        allowNullish: true, 
        allowRegExp: true,
      }
    ], // @typescript-eslint/recommended
    "@typescript-eslint/sort-type-union-intersection-members": "warn",
    // "@typescript-eslint/strict-boolean-expressions": "off",
    // "@typescript-eslint/switch-exhaustiveness-check": "off",
    // "@typescript-eslint/triple-slash-reference": "off", // @typescript-eslint/recommended
    "@typescript-eslint/type-annotation-spacing": "error",
    // "@typescript-eslint/typedef": "off",
    // "@typescript-eslint/unbound-method": "off", // @typescript-eslint/recommended
    // "@typescript-eslint/unified-signatures": "off", // @typescript-eslint/strict
    //
    // Extension Rules
    // https://typescript-eslint.io/rules/#extension-rules
    // ---------------------------------------------
    // "@typescript-eslint/brace-style": "off",
    // "@typescript-eslint/comma-dangle": "off",
    // "@typescript-eslint/comma-spacing": "off",
    "@typescript-eslint/default-param-last": "error",
    "@typescript-eslint/dot-notation": "error", // @typescript-eslint/strict
    // "@typescript-eslint/func-call-spacing": "off",
    // "@typescript-eslint/indent": "off",
    // "@typescript-eslint/init-declarations": "off",
    // "@typescript-eslint/keyword-spacing": "off",
    // "@typescript-eslint/lines-between-class-members": "off",
    // "@typescript-eslint/no-array-constructor": "off", // @typescript-eslint/recommended
    // "@typescript-eslint/no-dupe-class-members": "off",
    "@typescript-eslint/no-duplicate-imports": "error",
    "@typescript-eslint/no-empty-function": ["warn", { allow: ["decoratedFunctions"]}], // @typescript-eslint/recommended
    // "@typescript-eslint/no-extra-parens": "off",
    // "@typescript-eslint/no-extra-semi": "off", // @typescript-eslint/recommended
    "@typescript-eslint/no-implied-eval": "error", // @typescript-eslint/recommended
    // "@typescript-eslint/no-invalid-this": "off",
    // "@typescript-eslint/no-loop-func": "off",
    // "@typescript-eslint/no-loss-of-precision": "off", // @typescript-eslint/recommended
    "@typescript-eslint/no-magic-numbers": [
      "warn",
      {
        ignore: [-1, 0, 1],
        ignoreEnums: true,
        ignoreNumericLiteralTypes: true,
        ignoreReadonlyClassProperties: true
      }
    ],
    "@typescript-eslint/no-redeclare": "warn",
    // "@typescript-eslint/no-restricted-imports": "off",
    "@typescript-eslint/no-shadow": [
      "error",
      {
        builtinGlobals: true,
        ignoreFunctionTypeParameterNameValueShadow: true
      }
    ],
    "@typescript-eslint/no-throw-literal": [ // @typescript-eslint/strict
      "error",
      {
        allowThrowingAny: false,
        allowThrowingUnknown: false,
      }
    ],
    "@typescript-eslint/no-unused-expressions": ["error", { enforceForJSX: true }],
    // "@typescript-eslint/no-unused-vars": "off", // @typescript-eslint/recommended
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/no-useless-constructor": "error", // @typescript-eslint/strict
    // "@typescript-eslint/object-curly-spacing": "off",
    // "@typescript-eslint/padding-line-between-statements": "off",
    // "@typescript-eslint/quotes": "off",
    "@typescript-eslint/require-await": "warn", // @typescript-eslint/recommended
    "@typescript-eslint/return-await": "error",
    // "@typescript-eslint/semi": "off",
    // "@typescript-eslint/space-before-blocks": "off",
    // "@typescript-eslint/space-before-function-paren": "off",
    // "@typescript-eslint/space-infix-ops": "off",
  },
};

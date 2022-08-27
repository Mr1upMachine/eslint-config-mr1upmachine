# eslint-config-mr1upmachine
ESLint config that details Mr1upMachine's personal style guide

## Installation

Prerequisites: Node.js & ESLint

### npm

```sh
npm i eslint-config-mr1upmachine -D
```

### yarn

```sh
yarn add eslint-config-mr1upmachine --dev
```

## Usage

```json
{
  "extends": ["eslint:recommended", "mr1upmachine"],
  "rules": {
    // Additional, per-project rules...
  }
}
```

If you are using `typescript` & `typescript-eslint`:

```json
{
  "plugins": ["@typescript-eslint"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/strict",
    "mr1upmachine",
    "mr1upmachine/typescript"
  ],
  "parser": "@typescript-eslint/parser",
  "rules": {
    // Additional, per-project rules...
  }
}
```

If `prettier` is used in the project & configured with ESLint, make sure to include it last.

```json
{
  "plugins": ["prettier"],
  "extends": [
    // All other configs
    "plugin:prettier/recommended",
  ],
  "rules": {
    "prettier/prettier": "error",
    // Additional, per-project rules...
  }
}
```

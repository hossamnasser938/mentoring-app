module.exports = {
    parser: "@typescript-eslint/parser",
    extends: ["plugin:@typescript-eslint/recommended", "eslint:recommended", "plugin:prettier/recommended"],
    plugins:  [
        "@typescript-eslint",
        "simple-import-sort",
        "unused-imports",
    ],
    rules: {
        "prettier/prettier": 0,
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "unused-imports/no-unused-imports-ts": "error",
    },
    ignorePatterns: [".eslintrc.js"],
    env: {
        browser: true, 
        node: true,     
    }




};

module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'standard-with-typescript',
        'eslint-config-prettier'
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'react'
    ],
    rules: {
        "react/prop-types": 0
    }
}

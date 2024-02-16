import antfu from '@antfu/eslint-config'

export default antfu({
    stylistic: {
        indent: 4,
    },
    ignores: ['.github', '*.yaml'],
    yaml: false,
    jsonc: false,
    rules: {
        'ts/consistent-type-definitions': ['off', 'type'],
        'node/prefer-global/process': ['off', 'always'],
    },
})

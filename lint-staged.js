module.exports = {
    '**/*.{js,jsx,ts,tsx}': [
        'yarn format',
        'yarn ts:check'
    ],
    '**/*.{js,jsx,ts,tsx,json,css,js}': ['prettier --write'],
}
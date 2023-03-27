module.exports = {
    extends: ['airbnb', 'airbnb-typescript', 'airbnb/hooks', 'prettier'],
    parserOptions: {
        project: './tsconfig.json',
    },
    rules: {
        'react/react-in-jsx-scope': 'off',
    },
};

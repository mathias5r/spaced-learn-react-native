module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "airbnb",
    "prettier",
    "prettier/react",
    "plugin:jsx-a11y/recommended"
  ],
  "plugins": [
    "react",
    "react-native",
    "prettier",
    "jsx-a11y"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
      "modules": true
    }
  },  
  "rules": {
    "prefer-destructuring": "off",
    "react/jsx-filename-extension": "off",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": true,
        "optionalDependencies": false,
        "peerDependencies": false
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "all",
        "singleQuote": true,
        "printWidth": 100
      }
    ],
    "quotes": [
      "error",
      "backtick"
    ]
  },
  "env": {
    "jest": true
  },
  "globals": { 
    "fetch": false, 
    "__DEV__": true
  } 
};
module.exports = {
  "parser": "babel-eslint",
  "extends": "eslint:recommended",
  "plugins": [
    "react"
  ],
  "env": {
    "node": true,
    "es6": true,
    "browser": true
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  },
  "rules": {
    "quotes": [1, "single"],
    "linebreak-style": [2, "unix"],
    "semi": [2, "always"],
    "no-underscore-dangle": [0],
    "no-console": [1],
    "jsx-quotes": [1, "prefer-double"],
    "no-unreachable": [1],
    "react/jsx-no-undef": [1],
    "react/jsx-uses-react": [1],
    "react/jsx-uses-vars": [1],
    "react/no-did-mount-set-state": [1],
    "react/no-did-update-set-state": [1],
    "react/no-multi-comp": [1],
    "react/display-name": [0],
    "react/prop-types": [0],
    "react/react-in-jsx-scope": [1],
    "react/self-closing-comp": [1],
    "react/wrap-multilines": [1]
  }
};

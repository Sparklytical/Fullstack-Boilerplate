const {
  createConfig,
  getDependencies,
} = require("eslint-config-galex/src/createConfig");
const {
  createTSOverride,
} = require("eslint-config-galex/src/overrides/typescript");

const customTSLikeOverride = createTSOverride({
  ...getDependencies(),
  rules: {
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/member-ordering": "off",
  },
});

module.exports = createConfig({
  overrides: [customTSLikeOverride],
  rules: {
    "new-cap": "off",
    "no-console": "off",
    "no-trailing-spaces": 1,
  },
});

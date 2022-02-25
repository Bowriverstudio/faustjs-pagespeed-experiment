const { withFaust } = require("@faustjs/next");

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withFaust({
  eslint: {
    // This will be removed once there is a fix for ESLint: https://github.com/yannickcr/eslint-plugin-react/issues/3215
    ignoreDuringBuilds: true,
  },
});

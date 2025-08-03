/** @type {import('next').NextConfig} */
const { codeInspectorPlugin } = require("code-inspector-plugin");
const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    config.plugins.push(
      codeInspectorPlugin({
        bundler: "webpack",
        editor: "code",
        showSwitch: true,
      })
    );
    return config;
  },
  output: "standalone",
};

module.exports = nextConfig;

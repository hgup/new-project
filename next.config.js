const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
})

let nextraConfig = withNextra()
nextraConfig.assetPrefix = "./"

const nextConfig = {
  ...nextraConfig,
  basePath: "/project-starter",
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

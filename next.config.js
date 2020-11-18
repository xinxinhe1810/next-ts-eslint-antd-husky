const isProd = process.env.NODE_ENV === 'production'

module.exports = (phase, {defaultConfig}) => {
  return {
    ...defaultConfig,
    /* config options here */
    assetPrefix: isProd ? '//static.ixiaochuan.cn/applog/' : '',
    distDir: 'build',
    // For example /about/ will redirect to /about.
    // trailingSlash: true,
    // 启用 react 严格模式
    reactStrictMode: true,
    env: {
      ENV: process.env['ENV'],
    },
    // async redirects() {
    //   return redirectsData
    // },
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
    webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack}) => {
      // Note: we provide webpack above so you should not `require` it
      // Important: return the modified config
      return config
    },
  }
}

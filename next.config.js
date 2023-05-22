/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, options) => {
        config.module.rules.push({
          test: /\.wasm$/,
          use: ['url-loader'],
        });
    
        return config;
      },
}

module.exports = nextConfig

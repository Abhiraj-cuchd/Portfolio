/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "react-tilt",
    "maath"
  ],
  webpack: (config, { isServer }) => {
    // Add a custom loader for .gltf files
    config.module.rules.push({
      test: /\.gltf$/,
      use: [
        {
          loader: 'gltf-webpack-loader',
        },
      ],
    });

    // Add file-loader for handling .bin files related to .gltf files
    config.module.rules.push({
      test: /\.(bin)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'static/assets/',
            publicPath: '/_next/static/assets/',
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;

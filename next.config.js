/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },

  // Add this to avoid Turbopack errors
  turbopack: {},

  webpack: (config) => {
    // Preserve your externals
    config.externals = [...config.externals, { canvas: 'canvas' }];

    // Add your file-loader rule for pdf.worker.js
    config.module.rules.unshift({
      test: /pdf\.worker\.(min\.)?js/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[contenthash].[ext]',
            publicPath: '.next/static/worker',
            outputPath: 'static/worker',
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;

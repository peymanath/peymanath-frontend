const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  images: {
    domains: ['peymanath.ir'],
    unoptimized: true,
  },
});

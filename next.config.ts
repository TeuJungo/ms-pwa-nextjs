const withPWA = require('next-pwa')({
  dest: 'public',
  fallbacks: {
    document: '/offline.html',
  },
});

module.exports = withPWA({
  reactStrictMode: true,
  webpack: (config) => {
    config.cache = {
      type: 'filesystem', // Utilizar cache baseado em sistema de arquivos
    };
    return config;
  },
});

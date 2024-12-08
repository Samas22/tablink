// next.config.js
module.exports = {
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ignored: ["**/.dbus/**", "**/.gvfs/**"],
      };
    }
    return config;
  },
};

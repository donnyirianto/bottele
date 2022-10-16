module.exports = {
  apps: [
    {
      name: "bottele",
      script: "server.js",
      autorestart: true,
      exec_mode: "fork",
      watch: true,
    },
  ],
};

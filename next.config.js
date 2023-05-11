// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rickandmortyapi.com",
        port: "",
        pathname: "/api/character/avatar/**",
      },
      {
        protocol: "https",
        hostname: "wallpapercave.com",
        port: "",
        pathname: "/wp/wp6736837.jpg",
      },
    ],
  },
};

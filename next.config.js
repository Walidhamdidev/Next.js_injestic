const withPWA = require("next-pwa");

module.exports = withPWA({
  future: { webpack5: true },
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
  },
  env: {
    siteTitle: "Sell Store",
    siteDescription: "Get some Clothes",
    siteKeywords: "Stickers, Clothes, fun",
    siteUrl: "https://www.website.xyz",
    siteImagePreviewUrl: "/images/main.jpg",
    twitterHandle: "@waleedo",
  },
  images: {
    domains: ["cdn.shopify.com"],
  },
});

const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Midlife Coder - It's never too late to start coding", // <title>
  shortSiteTitle: "Midlife Coder Blog", // <title> ending for posts and pages
  siteDescription: "Midlife Coder Blog.",
  siteUrl: "https://blog.aaroncuddeback.com",
  pathPrefix: "",
  siteImage: "avatar.jpg",
  siteLanguage: "en",
  // author
  authorName: "Aaron Cuddeback",
  authorTwitterAccount: "aaroncuddeback",
  // info
  infoTitle: "Aaron Cuddeback",
  infoTitleNote: "Midlife Coder",
  // manifest.json
  manifestName: "Midlife Coder - It's never too late to start coding",
  manifestShortName: "Midlife Coder", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "aaron@aaroncuddeback.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/aaroncuddeback" },
    { name: "twitter", url: "https://twitter.com/aaroncuddeback" },
    { name: "facebook", url: "https://facebook.com/aaroncu" }
  ]
};

const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Midlife Coder - a blog starter for GatsbyJS", // <title>
  shortSiteTitle: "Midlife Coder GatsbyJS Starter", // <title> ending for posts and pages
  siteDescription: "Midlife Coder is a GatsbyJS starter.",
  siteUrl: "https://gatsby-starter-personal-blog.greglobinski.com",
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
  manifestName: "Midlife Coder - a blog starter for GatsbyJS",
  manifestShortName: "Midlife Coder", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "aaron@midlifecoder.dev",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/aaroncuddeback" },
    { name: "twitter", url: "https://twitter.com/aaroncuddeback" },
    { name: "facebook", url: "https://facebook.com/aaroncu" }
  ]
};

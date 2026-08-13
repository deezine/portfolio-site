// Import html-minifier from html-minifier-terser
import htmlmin from "html-minifier-terser";

export default async function (eleventyConfig) {
  // --- === | COPY | === ---
  // * Move + Watch src/assets > dist/assets
  eleventyConfig.addWatchTarget("src/assets");
  eleventyConfig.addPassthroughCopy("src/assets");

  // * Move + Watch src/robots.txt > dist/robots.txt
  eleventyConfig.addWatchTarget("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  // * Move + Watch src/css > dist/css
  eleventyConfig.addWatchTarget("src/css/*.css");
  eleventyConfig.addPassthroughCopy("src/css/*.css");

  // --- === | MINIFY | === ---

  // --- === | CORE | === ---
  return {
    // * Uses NJK for HTML.
    htmlTemplateEngine: "njk",

    // * Configuration for directory
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
}

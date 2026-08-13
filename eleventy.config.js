// Import html-minifier from html-minifier-terser
import htmlmin from "html-minifier-terser";

// Import sass functionality from Sass.
import sass from "sass";

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

  // --- === | MINIFY HTML | === ---
  eleventyConfig.addTransform("htmlmin", function (content) {
    // * If the page ends with .html...
    if ((this.page.outputPath || "").endsWith(".html")) {
      // * ...minify the HTML via the following settings:
      let minified = htmlmin.minify(content, {
        // * Use the shorthand for doctype.
        useShortDoctype: true,
        // * Remove all comments.
        removeComments: true,
        // * Collapse and condense all white space.
        collapseWhitespace: true,
      });

      return minified;
    }

    // * If it is not .html, return the content as-is.
    return content;
  });

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

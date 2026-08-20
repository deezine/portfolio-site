export default function (eleventyConfig) {
  // --- Directories ---
  // * Sets the input directory to /src/.
  eleventyConfig.setInputDirectory("src");
  // * Sets the output directory to /dist/.
  eleventyConfig.setOutputDirectory("dist");

  // --- Assets ---
  // * Moves assets from src > dist.
  eleventyConfig.addPassthroughCopy("src/assets");
  // * Watches assets for changes.
  eleventyConfig.addWatchTarget("src/assets");

  // --- CSS ---
  // * Moves main.css from src > dist.
  eleventyConfig.addPassthroughCopy("src/css/*.css");
  // * Watches main.css for changes.
  eleventyConfig.addWatchTarget("src/css/*.css");

  // --- Robots ---
  // * Moves robots.txt from src > dist.
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  // * Watches robots.txt for changes.
  eleventyConfig.addWatchTarget("src/robots.txt");
}

export const config = {
  // * Use Nunjuks for HTML and Markdown, which means I can just use plain .html files.
  htmlTemplateEngine: "njk",
  markdownTemplateEngine: "njk",
};

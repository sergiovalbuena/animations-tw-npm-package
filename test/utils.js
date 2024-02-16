import tailwindcss from "tailwindcss";
import postcss from "postcss";
//import minify from "@csstools/postcss-minify";
import animationsPlugin from "../src/index.js";

const TAILWIND_BASE = "@tailwind utilities;";

export function generatePluginCSS(options) {
  return postcss([
    tailwindcss({
      plugins: [animationsPlugin],
    }),
  ])
    .process(`${TAILWIND_BASE} .content {@apply pl-0}`)
    .then((result) => result.css);
}
console.log(await generatePluginCSS());

// export function generatePluginCSS(options = {}) {
//   const { inline = "", content = "" } = options;

//   return postcss([
//     minify(),
//     tailwindcss({
//       plugins: [animationsPlugin],
//       content: [{ raw: content }],
//     }),
//   ])
//     .process(`${TAILWIND_BASE} ${inline}`, {
//       from: undefined,
//     })
//     .then((result) => result.css);
// }

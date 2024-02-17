import tailwindcss from "tailwindcss";
import postcss from "postcss";
import minify from "@csstools/postcss-minify";
import animationsPlugin from "../src/index.js";

const TAILWIND_BASE = "@tailwind utilities;";

export function generatePluginCSS(options = {}) {
  const { inline = "", content = "" } = options;

  return (
    postcss([
      minify(),
      tailwindcss({
        plugins: [animationsPlugin],
        content: [{ raw: content }],
      }),
    ])
      //.process(`${TAILWIND_BASE} .content {@apply pl-0}`)
      .process(`${TAILWIND_BASE} ${inline}`, {
        from: undefined,
      })
      .then((result) => result.css)
  );
}
console.log(
  await generatePluginCSS({
    content: '<div class="animate-zoom-in">Hello</div>',
  })
);

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

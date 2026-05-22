import { copyFileSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const clientDir = join(process.cwd(), "dist", "client");
const assetsDir = join(clientDir, "assets");
const base = "/mindscape-canvas-58/";

const assets = readdirSync(assetsDir);
const entryScript = assets.find((file) => {
  if (!/^index-[\w-]+\.js$/.test(file)) return false;
  return readFileSync(join(assetsDir, file), "utf8").includes("hydrateRoot(document");
});
const stylesheet = assets.find((file) => /^styles-[\w-]+\.css$/.test(file));

if (!entryScript) {
  throw new Error("Could not find the TanStack client entry script in dist/client/assets.");
}

if (!stylesheet) {
  throw new Error("Could not find the built stylesheet in dist/client/assets.");
}

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>HisMind Creatives - Digital Presence & Strategy</title>
    <meta
      name="description"
      content="HisMind Creatives is a digital strategy and creative communications agency helping brands grow through content, storytelling and discoverability."
    />
    <link rel="stylesheet" href="${base}assets/${stylesheet}" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
    />
  </head>
  <body>
    <script type="module" src="${base}assets/${entryScript}"></script>
  </body>
</html>
`;

writeFileSync(join(clientDir, "index.html"), html);
copyFileSync(join(clientDir, "index.html"), join(clientDir, "404.html"));

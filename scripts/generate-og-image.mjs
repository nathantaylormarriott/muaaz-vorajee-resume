import { chromium } from "playwright";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { readFileSync, writeFileSync } from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const htmlPath = join(__dirname, "og-share-card.html");
const profilePath = join(__dirname, "..", "public", "muaaz-vorajee-profile.webp");
const outputPath = join(__dirname, "..", "public", "og-image.png");

const profileDataUrl = `data:image/webp;base64,${readFileSync(profilePath).toString("base64")}`;
let html = readFileSync(htmlPath, "utf8");
html = html.replace(
  '<img id="photo" src="" alt="" />',
  `<img id="photo" src="${profileDataUrl}" alt="Muaaz Vorajee" />`,
);
html = html.replace(/<script[\s\S]*?<\/script>/, "");

const tempHtml = join(__dirname, "og-share-card.generated.html");
writeFileSync(tempHtml, html);

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });

  try {
    await page.goto(pathToFileURL(tempHtml).href, { waitUntil: "load" });
    await page.waitForTimeout(200);
    await page.screenshot({ path: outputPath, type: "png" });
    console.log(`Saved ${outputPath}`);
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

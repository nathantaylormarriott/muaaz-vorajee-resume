import { chromium } from "playwright";
import { homedir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const HTML_PATH = join(__dirname, "cv-print.html");
const PUBLIC_PATH = join(__dirname, "..", "public", "Muaaz-Vorajee-Resume.pdf");
const DOWNLOADS_PATH = join(homedir(), "Downloads", "Muaaz-Vorajee-Resume.pdf");
const DOWNLOADS_FRIENDLY = join(homedir(), "Downloads", "Muaaz Vorajee - Resume.pdf");

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    await page.goto(`file://${HTML_PATH}`, { waitUntil: "networkidle", timeout: 60_000 });
    await page.waitForFunction(() => document.fonts.ready);
    await page.emulateMedia({ media: "print" });

    const pdfOptions = {
      format: "A4",
      printBackground: true,
      margin: { top: "0", right: "0", bottom: "0", left: "0" },
    };

    await page.pdf({ ...pdfOptions, path: PUBLIC_PATH });
    await page.pdf({ ...pdfOptions, path: DOWNLOADS_PATH });
    await page.pdf({ ...pdfOptions, path: DOWNLOADS_FRIENDLY });

    console.log(`Saved public PDF to ${PUBLIC_PATH}`);
    console.log(`Saved copy to ${DOWNLOADS_FRIENDLY}`);
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

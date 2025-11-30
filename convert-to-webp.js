// convert-to-webp.js
import fs from "fs";
import path from "path";
import sharp from "sharp";

const assetsDir = path.resolve("src/assets");

async function convertAll() {
  const files = fs.readdirSync(assetsDir);

  for (const file of files) {
    if (file.toLowerCase().endsWith(".png")) {
      const filePath = path.join(assetsDir, file);
      const outPath = filePath.replace(/\.png$/i, ".webp");

      try {
        await sharp(filePath)
          .webp({ quality: 80 }) // quality: 80 = ملف صغير وجودة كويسة
          .toFile(outPath);

        console.log(`✅ Converted: ${file} → ${path.basename(outPath)}`);
      } catch (err) {
        console.error(`❌ Error converting ${file}:`, err);
      }
    }
  }
}

convertAll();

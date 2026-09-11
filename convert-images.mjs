import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const folder = './src/assets/hero';

const files = fs
  .readdirSync(folder)
  .filter((file) =>
    /\.(png|jpg|jpeg)$/i.test(file)
  );

for (const file of files) {
  const input = path.join(folder, file);

  const output = path.join(
    folder,
    `${path.parse(file).name}.webp`
  );

  await sharp(input)
    .resize({
      width: 1920,
      withoutEnlargement: true,
    })
    .webp({
      quality: 80,
    })
    .toFile(output);

  const originalSize =
    fs.statSync(input).size / 1024 / 1024;

  const newSize =
    fs.statSync(output).size / 1024 / 1024;

  console.log(
    `${file}: ${originalSize.toFixed(2)} MB → ${newSize.toFixed(2)} MB`
  );
}

console.log('✅ Hero images converted to WebP');

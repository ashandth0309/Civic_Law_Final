import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const folder = './src/assets/team';

const files = fs
  .readdirSync(folder)
  .filter((file) =>
    /\.(png|jpg|jpeg)$/i.test(file)
  );

console.log(`Found ${files.length} team images.\n`);

for (const file of files) {
  const input = path.join(folder, file);

  const output = path.join(
    folder,
    `${path.parse(file).name}.webp`
  );

  await sharp(input)
    .resize({
      width: 800,
      withoutEnlargement: true,
    })
    .webp({
      quality: 85,
    })
    .toFile(output);

  const originalSize =
    fs.statSync(input).size / 1024 / 1024;

  const newSize =
    fs.statSync(output).size / 1024 / 1024;

  const reduction =
    ((originalSize - newSize) /
      originalSize) *
    100;

  console.log(
    `✓ ${file}`
  );

  console.log(
    `  ${originalSize.toFixed(2)} MB → ${newSize.toFixed(2)} MB`
  );

  console.log(
    `  ${reduction.toFixed(1)}% smaller\n`
  );
}

console.log(
  '✅ All team images converted to WebP.'
);

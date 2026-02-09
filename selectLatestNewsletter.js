import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataDir = path.join(__dirname, 'src', 'components', 'newsletters', 'data');
const publicDir = path.join(__dirname, 'public');
const outputFile = path.join(publicDir, 'masstort.json');

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Get all .js files from the data directory (newsletter data files)
let jsFiles;
try {
  jsFiles = fs.readdirSync(dataDir)
    .filter(file => file.startsWith('week-') && file.endsWith('.js'))
    .map(file => {
      const filePath = path.join(dataDir, file);
      const stats = fs.statSync(filePath);
      return {
        name: file,
        path: filePath,
        mtime: stats.mtime
      };
    });
} catch (err) {
  console.error(`Error reading directory ${dataDir}:`, err.message);
  process.exit(1);
}

if (jsFiles.length === 0) {
  console.error('No week-*.js files found in', dataDir);
  process.exit(1);
}

// Sort by modification time (most recent first)
jsFiles.sort((a, b) => b.mtime - a.mtime);

const latestFile = jsFiles[0];

// Copy the latest file to public/masstort.json
try {
  fs.copyFileSync(latestFile.path, outputFile);
  console.log(`Copied ${latestFile.name} to ${outputFile}`);
} catch (err) {
  console.error('Error copying file:', err.message);
  process.exit(1);
}

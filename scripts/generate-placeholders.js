const fs = require('fs');
const path = require('path');
const https = require('https');

// Create images folder if it doesn't exist
const imagesDir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// List of images we need with their dimensions
const imagesToDownload = [
  { name: 'collection-beachwear.jpg', width: 500, height: 500, text: 'Beachwear', bg: '0A9396', fg: 'FFFFFF' },
  { name: 'collection-surfwear.jpg', width: 500, height: 500, text: 'Surfwear', bg: '005F73', fg: 'FFFFFF' },
  { name: 'collection-accessories.jpg', width: 500, height: 500, text: 'Accessories', bg: 'EE9B00', fg: 'FFFFFF' },
  { name: 'product-1.jpg', width: 300, height: 300, text: 'Tropical Shirt', bg: '94D2BD', fg: '000000' },
  { name: 'product-2.jpg', width: 300, height: 300, text: 'Board Shorts', bg: '0A9396', fg: 'FFFFFF' },
  { name: 'product-3.jpg', width: 300, height: 300, text: 'Surf Cap', bg: 'E9D8A6', fg: '000000' },
  { name: 'product-4.jpg', width: 300, height: 300, text: 'Beach Towel', bg: 'EE9B00', fg: 'FFFFFF' },
  { name: 'about-image.jpg', width: 600, height: 400, text: 'Hawaii Sunset', bg: '005F73', fg: 'FFFFFF' },
  { name: 'instagram-1.jpg', width: 200, height: 200, text: 'Surf Action', bg: '94D2BD', fg: '000000' },
  { name: 'instagram-2.jpg', width: 200, height: 200, text: 'Beach Palm', bg: '0A9396', fg: 'FFFFFF' },
  { name: 'instagram-3.jpg', width: 200, height: 200, text: 'Hawaiian Lei', bg: 'EE9B00', fg: 'FFFFFF' },
  { name: 'instagram-4.jpg', width: 200, height: 200, text: 'Sunset', bg: 'CA6702', fg: 'FFFFFF' },
  { name: 'instagram-5.jpg', width: 200, height: 200, text: 'Surfboard', bg: '005F73', fg: 'FFFFFF' },
  { name: 'instagram-6.jpg', width: 200, height: 200, text: 'Ocean Wave', bg: '0A9396', fg: 'FFFFFF' },
  { name: 'palm-pattern.png', width: 500, height: 800, text: 'Palm Pattern', bg: '0A9396', fg: 'FFFFFF' },
  { name: 'wave-pattern.png', width: 1000, height: 800, text: 'Wave Pattern', bg: '005F73', fg: 'FFFFFF' },
];

// Function to download image from PlaceHold.jp
function downloadImage(imageDef) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(imagesDir, imageDef.name);
    
    // Delete the file if it exists and has zero bytes
    if (fs.existsSync(filePath)) {
      const stats = fs.statSync(filePath);
      if (stats.size === 0) {
        console.log(`File ${imageDef.name} exists but is empty. Deleting...`);
        fs.unlinkSync(filePath);
      }
    }
    
    // Using PlaceHold.co service - more reliable than placehold.jp
    // Note: .png format works for all file extensions
    const url = `https://placehold.co/${imageDef.width}x${imageDef.height}/${imageDef.bg}/${imageDef.fg}.png?text=${encodeURIComponent(imageDef.text)}`;
    
    console.log(`Downloading from: ${url}`);
    const file = fs.createWriteStream(filePath);
    
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${imageDef.name}: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${imageDef.name}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {}); // Delete the file if there was an error
      reject(err);
    });
  });
}

// Download all images sequentially
async function downloadAllImages() {
  console.log('Starting to download placeholder images...');
  
  for (const imageDef of imagesToDownload) {
    try {
      await downloadImage(imageDef);
    } catch (error) {
      console.error(`Error downloading ${imageDef.name}:`, error.message);
    }
  }
  
  console.log('Done downloading placeholder images.');
}

downloadAllImages(); 
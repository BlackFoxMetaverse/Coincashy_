const { Jimp } = require('jimp');

async function processImage() {
  const imagePath = 'C:/Users/ASUS/.gemini/antigravity-ide/brain/7d2202f9-9adf-4d19-99f9-627a38c2c8cf/media__1790929344580.jpg';
  try {
    const imgDark = await Jimp.read(imagePath);
    const imgPaper = await Jimp.read(imagePath);
    
    imgDark.scan(0, 0, imgDark.bitmap.width, imgDark.bitmap.height, function (x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      
      const lum = (r + g + b) / 3;
      
      // Clamp alpha to remove JPEG artifacts in the dark background
      let alpha = (lum - 40) * (255 / (180 - 40));
      if (alpha < 0) alpha = 0;
      if (alpha > 255) alpha = 255;
      
      this.bitmap.data[idx + 0] = 255;
      this.bitmap.data[idx + 1] = 255;
      this.bitmap.data[idx + 2] = 255;
      this.bitmap.data[idx + 3] = alpha;
    });
    await imgDark.write('public/media/logo-on-dark.png');
    
    imgPaper.scan(0, 0, imgPaper.bitmap.width, imgPaper.bitmap.height, function (x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      
      const lum = (r + g + b) / 3;
      
      let alpha = (lum - 40) * (255 / (180 - 40));
      if (alpha < 0) alpha = 0;
      if (alpha > 255) alpha = 255;
      
      this.bitmap.data[idx + 0] = 0;
      this.bitmap.data[idx + 1] = 0;
      this.bitmap.data[idx + 2] = 0;
      this.bitmap.data[idx + 3] = alpha;
    });
    await imgPaper.write('public/media/logo-on-paper.png');
    
    console.log("Improved high quality images processed successfully.");
  } catch (error) {
    console.error("Error processing image:", error);
  }
}

processImage();

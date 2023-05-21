const { storage } = require("./firebase");
const { getStorage, ref, getDownloadURL } = require("firebase/storage");

class ImageService {
  static async getImageUrl(imagePath) {
    try {
      const imageRef = ref(storage, imagePath);

      const downloadURL = await getDownloadURL(imageRef);
      console.log("Download URL:", downloadURL);

      return downloadURL;
    } catch (error) {
      console.log("Error getting image URL:", error);
      return null;
    }
  }
}

module.exports = ImageService;

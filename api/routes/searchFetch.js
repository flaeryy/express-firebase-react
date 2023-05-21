const { collection, getDocs } = require("firebase/firestore");
const express = require("express");
const ImageServices = require("../datebase/imageServices");
const { db } = require("../datebase//firebase");
const router = express.Router();

router.get("/:param", async (req, res) => {
  const keyword = req.params.param;
  console.log(keyword);
  const results = [];
  const collections = ["waters", "rice-bowls"];

  for (const collectionName of collections) {
    const collectionRef = collection(db, collectionName);
    const querySnapshot = await getDocs(collectionRef);
    querySnapshot.forEach((document) => {
      const data = document.data();
      const { title, desc } = data;
      if (title.includes(keyword) || desc.includes(keyword)) {
        results.push(data);
      }
    });
  }

  for (const key in results) {
    const imagePath = results[key].img;
    if (imagePath) {
      const imageUrl = await ImageServices.getImageUrl(imagePath);
      results[key].url = imageUrl;
    }
  }
  res.json(results);
});

module.exports = router;

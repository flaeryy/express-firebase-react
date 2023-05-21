const express = require("express");
const FirebaseService = require("../datebase/firebaseService");
const ImageServices = require("../datebase/imageServices");
const router = express.Router();
const firebaseService = FirebaseService.getInstance();

router.get("/:param", handleRequest);

console.log("basicFetchhh");

async function handleRequest(req, res) {
  console.log("param: " + req.params.param);
  const param = req.params.param;
  const json = await firebaseService.fetchDataCollection(param);

  for (const key in json) {
    const imagePath = json[key].img;
    if (imagePath) {
      const imageUrl = await ImageServices.getImageUrl(imagePath);
      json[key].url = imageUrl;
    }
  }

  res.json(json);
}

module.exports = router;

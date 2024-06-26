const express = require('express');
const router = express.Router();
const { upload, extractAndUploadImages } = require("../middlewares/AlbumUpload");
const { handleFileUploadMiddleware, verifierAlbumName } = require('../middlewares/AlbumUpload');
const { createAlbumCtrl, UpdateAlbumCtrl, GetAllImageCtrl, GetOneImageCtrl, deleteOneImageCtrl, GetAllAlbum } = require('../controllers/albumController');
router.route("/")
  .post(upload, extractAndUploadImages, createAlbumCtrl)
  .put(upload, extractAndUploadImages, UpdateAlbumCtrl)
  .get(GetAllAlbum)
router.route("/:eventFolder")
  .get(GetAllImageCtrl)
router.route("/:eventFolder/:imageName")
  .get(GetOneImageCtrl)
  .delete(deleteOneImageCtrl)
module.exports = router;



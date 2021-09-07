const express = require("express");

const router = express.Router();

// pathla /products/
router.get("/", (req, res) => {
  res.send("GET request for get all products ");
});

module.exports = router;

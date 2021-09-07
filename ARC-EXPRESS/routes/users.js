const express = require("express");

const router = express.Router();

//dynamic params
router.get("/:id", (req, res) => {
  res.send(`Getting info for user number ${req.params.id}`);
});

//REGEX lay key co gia tri tu 0 den 9, maximum la 4 ky tu
//can than trong cai route ("/"), KHONG DC DE DAU CACH
router.get("/info/:key([0-9]{4})", (req, res) => {
  res.send(`REceived request from user ${req.params.key}`);
});

module.exports = router;

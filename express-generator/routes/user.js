const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const { id, name } = req.query;
  res.render("user", {
    title: `THIS IS USER NUMBER #${id}`,
    name: `My name is ${name}`,
  });
});

module.exports = router;

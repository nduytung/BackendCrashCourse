const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
  res.render("tutorial", { title: `Tutorial number #${req.params.id}` });
});

module.exports = router;

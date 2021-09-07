const express = require("express");

const router = express.Router();

router.get("/:id", (req, res) => {
  res.send(`Getting info for user number ${req.params.id}`);
});

module.exports = router;

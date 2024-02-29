const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "test 1 2 1 2" });
});

module.exports = router;

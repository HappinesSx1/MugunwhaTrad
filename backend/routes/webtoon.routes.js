const express = require("express");
const { setWebtoon } = require("../controllers/webtoon.controller");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "test 1 2 1 2" });
});

router.post("/", setWebtoon);

module.exports = router;

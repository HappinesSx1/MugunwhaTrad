const express = require("express");
const {
  setWebtoons,
  getWebtoons,
} = require("../controllers/webtoon.controller");
const router = express.Router();

router.get("/", getWebtoons);

router.post("/", setWebtoons);

module.exports = router;

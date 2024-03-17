const express = require("express");
const {
  setWebtoons,
  getWebtoons,
  setChapitres,
} = require("../controllers/webtoon.controller");
const router = express.Router();

router.get("/", getWebtoons);

router.post("/", setWebtoons);

router.post("/:id/chapitres", setChapitres);

module.exports = router;

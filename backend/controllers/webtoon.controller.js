const WebtoonModel = require("../models/webtoon.model");

module.exports.setWebtoon = async (req, res) => {
  if (!req.body.title) {
    res.status(400).json({ title: "entrez un titre" });
  }

  const webtoon = await WebtoonModel.create({
    title: req.body.title,
    thumbnail: req.body.thumbnail,
    chapitres: req.body.chapitres,
  });
  res.status(200).json(webtoon);
};

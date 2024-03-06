const WebtoonModel = require("../models/webtoon.model");

module.exports.getWebtoons = async (req, res) => {
  const webtoons = await WebtoonModel.find();
  res.status(200).json(webtoons);
};

module.exports.setWebtoons = async (req, res) => {
  // if (!req.body.title) {
  //   res.status(400).json({ title: "entrez un titre" });
  // }
  // if (!req.body.thumbnail) {
  //   res.status(400).json({ title: "entrez un thumbnail" });
  // }
  // if (!req.body.chapitres) {
  //   res.status(400).json({ title: "entrez un chapitre" });
  // }

  // const webtoon = await WebtoonModel.create({
  //   title: req.body.title,
  //   thumbnail: req.body.thumbnail,
  //   chapitres: req.body.chapitres,
  // });
  // res.status(200).json(webtoon);

  //   // Vérifier si req.body.title est défini
  //   if (!req.body.title) {
  //     return res.status(400).json({ error: "Veuillez entrer un titre" });
  //   }
  console.log(req.body);

  try {
    const webtoon = await WebtoonModel.create({
      title: req.body.title,
      thumbnail: req.body.thumbnail,
      chapitres: req.body.chapitres,
    });
    res.status(200).json(webtoon);
  } catch (error) {
    // Gérer les erreurs de création du webtoon
    console.error("Erreur lors de la création du webtoon :", error);
    res.status(500).json({ error: "Erreur lors création du webtoon" });
  }
};

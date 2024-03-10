const WebtoonModel = require("../models/webtoon.model");

module.exports.getWebtoons = async (req, res) => {
  const webtoons = await WebtoonModel.find();
  res.status(200).json(webtoons);
};

module.exports.setWebtoons = async (req, res) => {
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

module.exports.editPost = async (req, res) => {
  const post = await PostModel.findById(req.params.id);

  if (!post) {
    res.status(400).json({ message: "Ce post n'existe pas" });
  }

  const updatePost = await PostModel.findByIdAndUpdate(post, req.body, {
    new: true,
  });

  res.status(200).json(updatePost);
};

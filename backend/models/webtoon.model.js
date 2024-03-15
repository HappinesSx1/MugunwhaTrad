const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  url: {
    type: [String],
    // required: true,
  },
  alt: {
    type: String,
  },
});

const webtoonSchema = mongoose.Schema(
  {
    title: {
      type: String,
      // required: true,
    },
    thumbnail: {
      type: String,
      // required: true,
    },
    chapitres: [imageSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("webtoon", webtoonSchema);

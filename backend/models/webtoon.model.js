const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
  {
    url: {
      type: [String],
      // required: true,
    },
    alt: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

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
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    tags: {
      type: [String],
    },
    types: {
      type: [String],
    },
    autor: {
      type: String,
    },
    artist: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("webtoon", webtoonSchema);

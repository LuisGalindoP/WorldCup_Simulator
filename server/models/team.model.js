const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema(
  {
    teamCode: {
      type: String,
    },
    name: {
      type: String,
    },
    flag: {
      type: String,
    },
    stageScore: {
      type: Array,
    },
    goalsDifference: {
      type: Number,
    },
    stage: {
      type: Number,
    },
    cards: {
      type: Array,
    },
  },
  { timestamps: true }
);

const Team = mongoose.model("Team", TeamSchema);

module.exports = Team;

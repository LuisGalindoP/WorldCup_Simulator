const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema(
  {
    teamCode: {
      type: String,
      required: [true, "Add a pet name"],
      minlength: [2, "Name must be at least 3 characters"],
    },
    name: {
      type: String,
      required: [true, "Add a pet name"],
      minlength: [3, "Name must be at least 3 characters"],
    },
    stage: {
      type: String,
    },
    goalsTemp: {
      type: Number,
    },
    goalsTotal: {
      type: Number,
    },
    local: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const Team = mongoose.model("Team", TeamSchema);

module.exports = Team;

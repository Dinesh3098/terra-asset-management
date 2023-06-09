const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String },
    email: { type: String, required: true, trim: true },
    password: { type: String, trim: true },
  },
  {
    timestamps: true,
  }
);

module.exports = userSchema;

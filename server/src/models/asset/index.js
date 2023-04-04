const mongoose = require("mongoose");
const assetSchema = require("./schema");

const Asset = mongoose.model("Asset", assetSchema);

module.exports = Asset;

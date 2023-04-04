const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { MONGOOSE_MODEL } = require("../constant");

const assetSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        images: [
            {
                image: { type: String, required: true },
                key: { type: String },
            },
        ],
        tag: [{ type: String }],
        createdBy: { type: Schema.Types.ObjectId, ref: MONGOOSE_MODEL.USER },
        updatedBy: { type: Schema.Types.ObjectId, ref: MONGOOSE_MODEL.USER },
        isDeleted: { type: Boolean, required: true, default: false },
    },
    {
        timestamps: true,
    }
);

module.exports = assetSchema;

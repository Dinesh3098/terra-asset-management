const Asset = require("../../models/asset/services");
const { messages } = require("../../utils/message");
const { imageUploader } = require("../../libs/s3/uploader");

// create asset api
exports.createAsset = async (assetInput, user) => {
    try {
        const data = { ...assetInput, createdBy: user._id };
        const asset = await Asset.create(data);
        return asset;
    } catch (error) {
        throw error;
    }
};

// Get list of all assets
exports.getAllAsset = async (user) => {
    try {
        const assets = await Asset.getAll({ createdBy: user.id, isDeleted: false });
        return assets;
    } catch (error) {
        throw error;
    }
};

// Delete asset
exports.deleteAsset = async (id, user) => {
    try {
        const updateData = { isDeleted: true, updatedBy: user.id };
        const asset = await Asset.update(id, updateData);
        if (asset) {
            return {
                status: "success",
                message: messages.asset.delete_success,
            };
        } else {
            return {
                status: "failed",
                message: messages.asset.delete_error,
            };
        }
    } catch (error) {
        throw error;
    }
};

//To upload multiple asset images to AWS S3
exports.uploadMultipleAssetImages = async (files) => {
    try {

        const allFiles = await Promise.all(
            files.map(async (file) => {
                if (file.file) {
                    const { createReadStream, filename, mimetype, encoding } = await file.file;

                    const { Location, key } = await imageUploader.upload(
                        createReadStream(),
                        {
                            filename,
                            mimetype,
                        }
                    );

                    return {
                        filename,
                        mimetype,
                        encoding,
                        uri: Location,
                    };
                }

            })
        );

        return allFiles;
    } catch (error) {
        throw error;
    }
};

//To upload Single asset images to AWS S3
exports.uploadAssetImage = async (files) => {
    try {
        const { createReadStream, filename, mimetype, encoding } = await files.file;
        const { Location, key } = await imageUploader.upload(
            createReadStream(),
            {
                filename,
                mimetype,
            }
        );

        return {
            filename,
            mimetype,
            encoding,
            uri: Location,
        };
    } catch (error) {
        throw error;
    }
};

//Update Asset
exports.updateAsset = async (id, assetUpdate, user) => {
    try {
        const updateData = { ...assetUpdate, updatedBy: user.id };
        const asset = await Asset.update(id, updateData);
        if (asset) {
            return {
                status: "success",
                message: messages.asset.update,
            };
        } else {
            return {
                status: "failed",
                message: messages.asset.update_error,
            };
        }
        
    } catch (error) {
        throw error;
    }
};
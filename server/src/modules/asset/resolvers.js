const AssetController = require("./controller");

const resolvers = {
    Query: {
        getAllAsset: async (_parent, { }, { user }, _info) =>
            await AssetController.getAllAsset(user),
    },
    Mutation: {
        createAsset: async (_parent, { assetInput }, { user }, _info) =>
            await AssetController.createAsset(assetInput, user),
        deleteAsset: async (_parent, { id }, { user }, _info) =>
            await AssetController.deleteAsset(id, user),
        updateAsset: async (_parent, { id, assetUpdate }, { user }, _info) =>
            await AssetController.updateAsset(id, assetUpdate, user),
        uploadAssetImage: async (_parent, { files }, _context, _info) =>
            await AssetController.uploadAssetImage(files),
        uploadMultipleAssetImages: async (_parent, { files }, _context, _info) =>
            await AssetController.uploadMultipleAssetImages(files),


    },
};

module.exports = resolvers;

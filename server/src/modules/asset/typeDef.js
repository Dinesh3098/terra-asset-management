const { Asset } = require("./contract");

const typeDef = `
scalar Upload
${Asset}

type AssetRes {
    id: ID
}

type DeleteMessage {
    status: String
    message: String
}

input AssetMediaInput {
    image: String
    key: String
}

input AssetInput {
    name: String
    images: [AssetMediaInput]
    tag: [String]
    createdBy: ID
}

type File {
    filename: String
    mimetype: String
    encoding: String
    uri: String
    key: String
}

type Query {
    getAllAsset: [Asset]
}

type Mutation {
    createAsset(assetInput: AssetInput): AssetRes
    updateAsset(id: ID!, assetUpdate: AssetInput): DeleteMessage
    deleteAsset(id: ID!): DeleteMessage
    uploadAssetImage(files: Upload!): File!
    uploadMultipleAssetImages(files: [Upload]!): [File]!
}`;

module.exports = typeDef;

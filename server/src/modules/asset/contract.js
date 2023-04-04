exports.Asset = `

type AssetMediaType {
    image: String
    key: String
}

type Asset {
    id: ID
    name: String
    images: [AssetMediaType]
    tag: [String]
    createdBy: User
}`;

const assign = require("assign-deep");
const { shield } = require("graphql-shield");
const { mergeTypeDefs } = require("@graphql-tools/merge");
const { buildSchema, print, GraphQLError } = require("graphql");
const User = require("./user");
const Asset = require("./asset");

const typeDefs = [
  User.typeDef,
  Asset.typeDef,
];

const resolvers = [
  User.resolvers,
  Asset.resolvers,
];

const permissions = [];

const mergedTypeDef = print(mergeTypeDefs(typeDefs));
exports.typeDefs = buildSchema(mergedTypeDef);

const permissionObject = shield(assign(...permissions), {
  fallbackError: async (thrownThing, parent, args, context, info) => {
    if (thrownThing === null) return new GraphQLError("Not Authorized");
    return thrownThing;
  },
});

exports.resolvers = resolvers;
exports.permissions = permissionObject;

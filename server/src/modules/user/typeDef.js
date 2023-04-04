const { User } = require("./contract");

const typeDef = `
scalar Upload
${User}

type AuthData {
    token: String
    userId: ID
}

type SignupUser {
    role: String
    token: String
    userId: ID
}

type Query {
    getUser(id: ID!): User
}

type Mutation {
    signupUser(fullName: String, email: String!, password: String!): SignupUser
    login(email: String!, password: String!): AuthData

}`;

module.exports = typeDef;

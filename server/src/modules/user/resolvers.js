const UserController = require("./controller");

const resolvers = {
    Query: {
    },
    Mutation: {
        signupUser: async (_parent, { fullName, email, password }, _context, _info) =>
            await UserController.signupUser(fullName, email, password),
        login: async (_parent, { email, password }, _context, _info) =>
            await UserController.login(email, password),


    },
};

module.exports = resolvers;

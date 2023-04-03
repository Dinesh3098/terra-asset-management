const UserController = require("./controller");

const resolvers = {
    Query: {
    },
    Mutation: {
        signupUser: async (_parent, { fullName, email, mobile, password }, _context, _info) =>
            await UserController.signupUser(fullName, email, mobile, password),
        login: async (_parent, { email, password }, _context, _info) =>
            await UserController.login(email, password),


    },
};

module.exports = resolvers;

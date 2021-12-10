const {ProfileModel} = require('../models');

const resolvers = {
    Query: {
        profile: async (context) => {
            if(context.user) {
                const user = await ProfileModel.findById(context.user.id)
                return user;
            }
        }
    },
    mutations: {}
}

module.exports = resolvers;
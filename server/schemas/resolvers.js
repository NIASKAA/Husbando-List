<<<<<<< HEAD
const {ProfileModel, StoriesModel, CharactersModel} = require('../models');
=======
const {ProfileModel, StoriesModel} = require('../models');
>>>>>>> 3dbee1a36b8d471648cc80b2ba1ebbf07bbcd76e

const resolvers = {
    Query: {
        profile: async (context) => {
            if(context.user) {
                const user = await ProfileModel.findById(context.user.id)
                return user;
            }
        },
        getStories: async () => {
            return await StoriesModel.find({});
        },
<<<<<<< HEAD
        getCharacter: async () => {
            return await CharactersModel.find({});
        }
=======
>>>>>>> 3dbee1a36b8d471648cc80b2ba1ebbf07bbcd76e
    },
    mutations: {}
}

module.exports = resolvers;
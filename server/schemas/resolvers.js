const {ProfileModel, StoriesModel} = require('../models');
const {signToken} = require('../auth')
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
        getUserAlreadyRead: async ({id}) => {
            let userId = await ProfileModel.findById({_id: id});
            const getAlreadyRead = await ProfileModel.findOne({_id: userId}).populate('already_Read').populate('name');
            return getAlreadyRead;
        },
        getUserFavoritesStories: async ({id}) => {
            let userId = await ProfileModel.findById({_id: id});
            const getFavoritesStories = await ProfileModel.findOne({_id: userId}).populate('favorite_Stories').populate('name')
        },
    },
    Mutation: {
        addToAlreadyRead: async (context, {name, id}) => {
            let userId = await ProfileModel.findById({_id: id});
            const toAddStory = await StoriesModel.findOne({name: name})
            if(!toAddStory) {
                return 'Stories Doesnt exist'
            }
            return await ProfileModel.findOneAndUpdate({
                _id: userId
            },
            {
                $push: {already_Read: toAddStory}
            },
            {
                new: true
            })
        },
        addToFavoriteStories: async (context, {name, id}) => {
            let userId = await ProfileModel.findById({_id: id});
            const toFavorites = await StoriesModel.findOne({name: name})
            if(!toFavorites) {
                return 'Stories Doesnt exist'
            }
            return await ProfileModel.findOneAndUpdate({
                _id: userId
            },
            {
                $push: {favorite_Stories: toFavorites}
            },
            {
                new: true
            })
        },
        deleteAlreadyRead: async (context, {storyID, id}) => {
            let userId = await ProfileModel.findById({_id: id});
            return await ProfileModel.findOneAndUpdate({
                _id: userId
            },
            {
                $pull: {
                    'already_Read': {
                        _id: storyID
                    }
                }
            },
            {
                new: true
            })
        },
        deleteFavorites: async (context, {storyID, id}) => {
            let userId = await ProfileModel.findById({_id: id});
            return await ProfileModel.findOneAndUpdate({
                _id: userId
            },
            {
                $pull: {
                    'favorite_Stories': {
                        _id: storyID
                    }
                }
            },
            {
                new: true
            })
        }
    }
}

module.exports = resolvers;
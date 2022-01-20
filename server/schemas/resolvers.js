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
        }
    }
}

module.exports = resolvers;
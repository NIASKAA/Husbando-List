import {gql} from '@apollo/client';

export const ADD_ALREADY_READ = gql`
    mutation addToAlreadyRead($name: String!, $id: ID){
        addToAlreadyRead(name: $name id: $id) {
    		_id
            already_Read {
                _id
                name
                characters {
                    name
                    age
                    image
                    description
                }
                image
                seasons
                translation
                release_Date
  		    }
        }
    }
`

export const ADD_FAVORITES_STORIES = gql`
    mutation addToFavoriteStories($name: String!, $id: ID) {
        addToFavoriteStories(name: $name id: $id) {
            _id
            favorite_Stories {
                _id
                name
                characters {
                    name
                    age
                    image
                    description
                }
                image
                seasons
                translation
                release_Date
            }
        }
    }
`

export const ADD_TO_COMPLETE_LIST = gql`
    mutation addToCompleteList($storyName: String!, id: ID) {
        addToCompleteList(storyName: $storyName id: $id) {
            _id
            to_Complete_List {
                id
                name
                characters {
                    name
                    age
                    image
                    description
                }
                image
                seasons
                translation
                release_Date
            }
        }
    }
`

export const DELETE_ALREADY_READ = gql`
    mutation deleteAlreadyRead($StoryID: String!, $id: ID) {
        deleteAlreadyRead(StoryID: $StoryID, id: $id) {
            _id
            already_Read {
                _id
                name
                characters {
                    name
                    age
                    image
                    description
                }
                image
                seasons
                translation
                release_Date
  		    }
        }
    }
`

export const DELETE_FAVORITE_STORIES = gql`
    mutation deleteFavorites($StoryID: String!, $id: ID) {
        deleteFavorites(StoryID: $StoryID, id: $id) {
            _id
            favorite_Stories {
                _id
                name
                characters {
                    name
                    age
                    image
                    description
                }
                image
                seasons
                translation
                release_Date
            }
        }
    }
`
import {gql} from '@apollo/client';

export const GET_ALL_STORIES = gql`
{
    getStories {
        _id
        name
        characters {
            _id
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
`

export const GET_USER_ALREADY_READ = gql`
    query{
        getUserAlreadyRead {
            _id
            already_Read {
                _id
                name
                characters {
                    _id
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
export const GET_USER_FAVORITE_STORIES = gql`
    query {
        getUserFavoritesStories {
            _id
            favorite_Stories {
                _id
                name
                characters {
                    _id
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
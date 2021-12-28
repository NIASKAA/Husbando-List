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
import {GET_STORIES} from './actions';

export const reducers = (state, action) => {
    switch (action.type) {
        case GET_STORIES:
            return {
                ...state,
                getStories: action.payload
            };
        default: 
            return state;
    }
}

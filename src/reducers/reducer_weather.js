import {SEARCH_CITY} from '../actions/index';

export default function (state = null, action) {
    switch (action.type) {
        case SEARCH_CITY:
            return action.payload.data;
    }

    return state;
}
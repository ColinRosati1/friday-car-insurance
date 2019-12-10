import { UPDATE_CAR_MAKE_API_REQUEST, SHOW_CAR_API_REQUEST_ERROR } from '../actions/makes-action'

export default function makesReducer(state = {}, { type, payload }) {
    switch (type) {
        case UPDATE_CAR_MAKE_API_REQUEST:
            return payload.select_make;
        case SHOW_CAR_API_REQUEST_ERROR:
            return payload.select_make;
        default:
            return state;
    }
}
import { UPDATE_CAR_API_REQUEST, SHOW_CAR_API_REQUEST_ERROR } from '../actions/database-action'

export default function databaseReducer(state = '', { type, payload }) {
    switch (type) {
        case UPDATE_CAR_API_REQUEST:
            return payload.car_data;
        case SHOW_CAR_API_REQUEST_ERROR:
            return payload.car_data;
        default:
            return state;
    }
}
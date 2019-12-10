import { UPDATE_CAR_VEHICLE_API_REQUEST, VEHICLE_ERROR } from '../actions/vehicle-action'

export default function vehicleReducer(state = {}, { type, payload }) {
    switch (type) {
        case UPDATE_CAR_VEHICLE_API_REQUEST:
            return payload.select_vehicle;
        case VEHICLE_ERROR:
            return payload.select_vehicle;
        default:
            return state
    }
}
export const VEHICLE_ERROR = 'select_vehicle:showErrorVehicle'
export const UPDATE_CAR_VEHICLE_API_REQUEST = 'select_vehicle:updateVehicle'

export function updateVehicle(newVehicle) {
    console.log("updateVehicle action", newVehicle)
    return {
        type: UPDATE_CAR_VEHICLE_API_REQUEST,
        payload: {
            select_vehicle: newVehicle
        }
    }
}

export function showErrorVehicle() {
    return {
        type: VEHICLE_ERROR,
        payload: {
            select_vehicle: 'ERROR!!'
        }
    }
}

// API selected make Models call
export function vehicleApiRequest(make, model) {
    console.log("car make api")
    return dispatch => {
        console.log("sel make", make, model)
        return fetch('http://localhost:8080/api/vehicles?make=' + make + "&model=" + model)
            .then(response => response.json())
            .then(response => {
                dispatch(updateVehicle(response))
            })
            .catch(err => {
                console.log("API ERROR")
                    // dispatch(showErrorDatabase())
            })
    }
}
export const SHOW_MODAL_API_REQUEST_ERROR = 'select_make:showErrorDatabase'
export const SHOW_MODAL = 'select_make:updateCarMake'

export function updateCarMake(newVehicle) {
    console.log("updateCarMAke action", newVehicle)
    return {
        type: SHOW_MODAL,
        payload: {
            select_vehicle: newVehicle
        }
    }
}

export function revealCarModal() {}

export function showErrorModal() {
    return {
        type: SHOW_MODAL_API_REQUEST_ERROR,
        payload: {
            select_vehicle: 'ERROR!!'
        }
    }
}

// API selected make vehicle call
export function carVehicleApiRequest(sel_vehicle) {
    console.log("car make api")
    return dispatch => {
        console.log("sel make", sel_vehicle)
        return fetch('http://localhost:8080/api/models?vehicle=' + sel_vehicle)
            .then(response => response.json())
            .then(response => {
                dispatch(updateCarMake(response))
            })
            .catch(err => {
                console.log("API ERROR")
                    // dispatch(showErrorDatabase())
            })
    }
}
export const SHOW_MODAL_API_REQUEST_ERROR = 'users_vehicle:showErrorModal'
export const SHOW_MODAL = 'users_vehicle:showCarModal'


export function showCarModal(userVehical) {
    console.log("updateCarMAke action", userVehical)
    return {
        type: SHOW_MODAL,
        payload: {
            users_vehicle: userVehical
        }
    }
}

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
                dispatch(showCarModal(response))
            })
            .catch(err => {
                console.log("API ERROR")
                    // dispatch(showErrorDatabase())
            })
    }
}
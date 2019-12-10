export const UPDATE_CAR_API_REQUEST = 'history:updateDatabase'
export const SHOW_CAR_API_REQUEST_ERROR = 'historyr:showErrorDatabase'


export function updateDatabase(newCar) {
    console.log("datase action updateCar", newCar)
    return {
        type: UPDATE_CAR_API_REQUEST,
        payload: {
            history: newCar
        },
    }
}

export function showErrorData() {
    return {
        type: SHOW_CAR_API_REQUEST_ERROR,
        payload: {
            history: 'ERROR!!'
        }
    }
}

// API call
export function carDatabaseApiRequest() {
    return dispatch => {
        return fetch('http://localhost:8080/api/makes')
            .then(response => response.json())
            .then(response => dispatch(updateDatabase(response)))
            .catch(err => {
                console.log("API ERROR")
                dispatch(showErrorDatabase())
            })
    }
}
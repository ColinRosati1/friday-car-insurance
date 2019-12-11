export const UPDATE_CAR_API_REQUEST = 'car_data:updateDatabase'
export const SHOW_CAR_API_REQUEST_ERROR = 'car_data:showErrorDatabase'

export function updateDatabase(newCar) {
    return {
        type: UPDATE_CAR_API_REQUEST,
        payload: {
            car_data: newCar,
        }
    }
}


export function showErrorDatabase() {
    return {
        type: SHOW_CAR_API_REQUEST_ERROR,
        payload: {
            car_data_error: 'ERROR!!'
        }
    }
}

// API return car makes
export function carDatabaseApiRequest() {
    return dispatch => {
        return fetch('http://localhost:8080/api/makes')
            .then(response => response.json())
            .then(response => {
                dispatch(updateDatabase(response))
            })
            .catch(err => {
                console.log("API ERROR", err)
                dispatch(showErrorDatabase())
            })
    }
}
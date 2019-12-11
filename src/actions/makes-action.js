export const SHOW_CAR_API_REQUEST_ERROR = 'select_make:showErrorDatabase'
export const UPDATE_CAR_MAKE_API_REQUEST = 'select_make:updateCarMake'

export function updateCarMake(newMake) {
    return {
        type: UPDATE_CAR_MAKE_API_REQUEST,
        payload: {
            car_make: '',
            select_make: newMake
        }
    }
}

export function showErrorDatabase() {
    return {
        type: SHOW_CAR_API_REQUEST_ERROR,
        payload: {
            select_make: 'ERROR!!'
        }
    }
}

// API selected make Models call
export function carMakesApiRequest(sel_make) {
    return dispatch => {
        return fetch('http://localhost:8080/api/models?make=' + sel_make)
            .then(response => response.json())
            .then(response => {
                dispatch(updateCarMake(response))
            })
            .catch(err => {
                console.log("API ERROR")
                dispatch(showErrorDatabase())
            })
    }
}
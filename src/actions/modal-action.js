import ActionTypes from './action-types'

export const REVEAL_CAR_MODAL = 'select_car:revealCarModal'
export const MODAL_ERROR = 'select_car:modalError'

export const showModal = ({ modalProps, modalType }) => dispatch => {
    dispatch({
        type: ActionTypes.SHOW_MODAL,
        modalProps,
        modalType
    })
}

export const hideModal = () => dispatch => {
    dispatch({
        type: ActionTypes.HIDE_MODAL
    })
}

export function revealCarModal(revealCar) {
    return {
        type: REVEAL_Car_MODAL,
        payload: {
            select_car: revealCar
        }
    }
}

export function modalError() {
    return {
        type: MODAL_ERROR,
        payload: {
            select_car: 'ERROR!!'
        }
    }
}
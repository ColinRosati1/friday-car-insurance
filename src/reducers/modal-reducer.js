import { REVEAL_CAR_MODAL, MODAL_ERROR } from '../actions/modal-action'
import ActionTypes from '../actions/action-types'


const initialState = {
    modalType: null,
    modalProps: {
        open: false
    }
}

export const modalActionReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SHOW_MODAL:
            return {
                modalProps: action.modalProps,
                modalType: action.modalType,
                type: action.type
            }
        case ActionTypes.HIDE_MODAL:
            return initialState
        default:
            return state
    }
}

export default function modalReducer(state = '', { type, payload }) {
    switch (type) {
        case REVEAL_CAR_MODAL:
            return payload.select_car;
        case MODAL_ERROR:
            return payload.select_car;
        default:
            return state;
    }
}
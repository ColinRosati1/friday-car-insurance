import { SHOW_MODAL, HIDE_MODAL } from '../actions/modal-action'
import ActionTypes from '../actions/action-types'

const initialState = {
    modalType: null,
    modalProps: {
        open: false
    }
}

export function modalReducer(state = initialState, action) {
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
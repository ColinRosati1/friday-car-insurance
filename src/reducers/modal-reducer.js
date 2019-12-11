import { SHOW_MODAL, HIDE_MODAL } from '../actions/modal-action'
import ActionTypes from '../actions/action-types'

const initialState = {
    modalType: null,
    modalProps: {
        open: false
    }
}
export default function modalReducer(state = {}, { type, payload }) {
    switch (type) {
        case SHOW_MODAL:
            return payload.users_vehicle;
        case ActionTypes.HIDE_MODAL:
            return initialState
        default:
            return state
    }
}
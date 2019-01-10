import { Types } from '../actions/form'

const INITIAL_STATE = {
    action: 'new',
    productToUpdate: {},
    listToUpdate:{},
}

export default function form(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.START_UPDATE:
            return {
                action: 'update',
                listToUpdate: action.list,
                productToUpdate: action.product
            };
        case Types.FINISH_UPDATE:
            return {
                action: 'new',
                listToUpdate:{},
                productToUpdate: {},
            };
        default:
            return state;
    }
}
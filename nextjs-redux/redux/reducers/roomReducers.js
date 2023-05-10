import {
    ALL_ROOMS_SUCCESS,
    ALL_ROOMS_FAIL,
    CLEAR_ERRORS

} from './../constants/roomConstants';

export const allRoomsReducer = (state = { rooms: [] }, action) => {
    switch (action.type) {
        case ALL_ROOMS_SUCCESS:
            return {
                roomsCount: action.payload.roomsCount,
                resPerPage: action.payload.resPerPage,
                filterRoomsCount: action.payload.filterRoomsCount,
                rooms: action.payload.rooms
            }

        case ALL_ROOMS_FAIL:
            return {
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                error: null
            }

        default:
            return state
    }
}
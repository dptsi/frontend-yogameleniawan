import {
    ALL_ROOMS_SUCCESS,
    ALL_ROOMS_FAIL,
    ROOM_DETAILS_SUCCESS,
    ROOM_DETAILS_FAIL,
    CLEAR_ALL_ROOMS_ERRORS,
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

        case CLEAR_ALL_ROOMS_ERRORS:
            return {
                error: null
            }

        default:
            return state
    }
}

export const roomDetailsReducer = (state = { rooms: {} }, action) => {
    switch (action.type) {
        case ROOM_DETAILS_SUCCESS:
            return {
                room: action.payload
            }

        case ROOM_DETAILS_FAIL:
            return {
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
            }

        default:
            return state
    }
}
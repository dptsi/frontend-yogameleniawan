import axios from 'axios';
import absoluteUrl from 'next-absolute-url';

import {
    ALL_ROOMS_SUCCESS,
    ALL_ROOMS_FAIL,
    ROOM_DETAILS_SUCCESS,
    ROOM_DETAILS_FAIL,
    CLEAR_ALL_ROOMS_ERRORS,
    CLEAR_ERRORS

} from './../constants/roomConstants';

// Get all rooms
export const getRooms = (req, query) => async (dispatch) => {
    try {
        let { page = 1, location, guests, category } = query;
        const { origin } = absoluteUrl(req);

        let link = `${origin}/api/rooms?page=${page ?? 1}&location=${location ?? ''}`;

        if (guests) link = link.concat(`&guestCapacity=${guests}`)
        if (category) link = link.concat(`&category=${category}`)

        const { data } = await axios.get(link);

        dispatch({
            type: ALL_ROOMS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_ROOMS_FAIL,
            payload: error.response.data.message
        })
    }
}

// Get room details
export const getRoomDetails = (req, id) => async (dispatch) => {
    try {

        const { origin } = absoluteUrl(req);

        const link = `${origin}/api/rooms/${id}`;

        const { data } = await axios.get(link);

        dispatch({
            type: ROOM_DETAILS_SUCCESS,
            payload: data.room
        })

    } catch (error) {
        dispatch({
            type: ROOM_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const cleanRoomsErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ALL_ROOMS_ERRORS
    })
}

// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}
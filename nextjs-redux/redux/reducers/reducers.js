import { combineReducers } from "redux";
import { allRoomsReducer, roomDetailsReducer } from './roomReducers';
import { authReducer, userReducer, loadedUserReducer } from './userReducers';

const reducer = combineReducers({
    allRooms: allRoomsReducer,
    roomDetails: roomDetailsReducer,
    auth: authReducer,
    user: userReducer,
    loadedUser: loadedUserReducer
});

export default reducer;
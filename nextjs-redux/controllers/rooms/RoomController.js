import Room from '../../models/room';
import mongoose from "mongoose";
import ErrorHandler from '../../utils/errors/errorHandler';
import catchAsyncError from '../../middlewares/catchAsyncError';
import APIFeatures from './../../utils/features/apiFeatures';

// Get All Rooms => /api/rooms [GET]
const allRooms = catchAsyncError(async (req, res) => {

    const resPerPage = 4;
    const roomsCount = await Room.countDocuments();

    const apiFeatures = new APIFeatures(Room.find(), req.query)
        .search()
        .filter();

    let rooms = await apiFeatures.query;
    let filterRoomsCount = rooms.length;

    apiFeatures.pagination(resPerPage);
    rooms = await apiFeatures.query.clone();

    res.status(200).json({
        success: true,
        roomsCount,
        resPerPage,
        filterRoomsCount,
        rooms
    })
})

// Create a new Room => /api/rooms [POST]

const newRoom = catchAsyncError(async (req, res) => {

    const room = await Room.create(req.body);

    res.status(200).json({
        success: true,
        room
    })

})


// Get Single Room Details => /api/rooms/:id [GET]
const getSingleRoomMiddleware = catchAsyncError(async (req, res, next) => {
    const room = await Room.findById(req.query.id);

    if (!room) {
        res.status(404).end("Room not found with this ID");
    }

    return next()

})

const getSingleRoom = catchAsyncError(async (req, res) => {
    try {
        const room = await Room.findById(req.query.id);

        res.status(200).json({
            success: true,
            room
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
})

// Update Room Details => /api/rooms/:id [PUT]
const updateRoom = catchAsyncError(async (req, res) => {
    try {
        let room = await Room.findById(req.query.id);

        if (!room) {
            throw new ErrorHandler('Room not found with this ID', 404);
        }

        room = await Room.findByIdAndUpdate(req.query.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        })

        res.status(200).json({
            success: true,
            room
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
})

// Delete Room Details => /api/rooms/:id [DELETE]
const deleteRoom = catchAsyncError(async (req, res) => {
    try {
        const room = await Room.findByIdAndDelete(req.query.id);

        if (!room) {
            throw new ErrorHandler('Room not found with this ID', 404);
        }

        await Room.findByIdAndDelete(req.query.id);

        res.status(200).json({
            success: true,
            message: 'Room is deleted.'
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
})

export {
    allRooms,
    newRoom,
    getSingleRoom,
    getSingleRoomMiddleware,
    updateRoom,
    deleteRoom
}
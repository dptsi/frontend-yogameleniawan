import Room from '../../models/room';
import mongoose from "mongoose";
import ErrorHandler from '../../utils/errors/errorHandler';

// Get All Rooms => /api/rooms [GET]
const allRooms = async (req, res) => {

    try {
        const rooms = await Room.find();

        res.status(200).json({
            success: true,
            count: rooms.length,
            rooms
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}

// Create a new Room => /api/rooms [POST]

const newRoom = async (req, res) => {
    try {
        const room = await Room.create(req.body);

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
}


// Get Single Room Details => /api/rooms/:id [GET]
const getSingleRoomMiddleware = async (req, res, next) => {
    const room = await Room.findById(req.query.id);

    if (!room) {
        res.status(404).end("Room not found with this ID");
    }

    return next()

}

const getSingleRoom = async (req, res) => {
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
}

// Update Room Details => /api/rooms/:id [PUT]
const updateRoom = async (req, res) => {
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
}

// Delete Room Details => /api/rooms/:id [DELETE]
const deleteRoom = async (req, res) => {
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
}

export {
    allRooms,
    newRoom,
    getSingleRoom,
    getSingleRoomMiddleware,
    updateRoom,
    deleteRoom
}
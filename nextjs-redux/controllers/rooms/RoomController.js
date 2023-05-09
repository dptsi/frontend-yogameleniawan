import Room from '../../models/room';

const allRooms = async (req, res) => {
    res.status(200).json({
        success: true,
        message: 'This route will show all rooms in database.'
    })
}

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

export {
    allRooms,
    newRoom
}
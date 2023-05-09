const allRooms = async (req, res) => {
    res.status(200).json({
        success: true,
        message: 'This route will show all rooms in database.'
    })
}

export {
    allRooms
}
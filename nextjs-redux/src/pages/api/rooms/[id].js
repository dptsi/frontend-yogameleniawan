import { createRouter } from 'next-connect';
import dbConnect from '../../../../config/database/DatabaseConnection';

import { getSingleRoom, updateRoom, deleteRoom } from '../../../../controllers/rooms/RoomController';

const router = createRouter();

dbConnect();

router.get(getSingleRoom);
router.put(updateRoom);
router.delete(deleteRoom);

export default router.handler();
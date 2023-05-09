import { createRouter } from 'next-connect';
import dbConnect from '../../../../config/database/DatabaseConnection';

import { getSingleRoom, updateRoom } from '../../../../controllers/rooms/RoomController';

const router = createRouter();

dbConnect();

router.get(getSingleRoom);
router.put(updateRoom);

export default router.handler();
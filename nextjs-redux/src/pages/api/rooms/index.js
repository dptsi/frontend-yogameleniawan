import { createRouter } from 'next-connect';
import dbConnect from '../../../../config/database/DatabaseConnection';

import { allRooms, newRoom } from '../../../../controllers/rooms/RoomController';

const router = createRouter();

dbConnect();

router.get(allRooms);
router.post(newRoom);

export default router.handler();
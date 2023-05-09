import { createRouter } from 'next-connect';
import dbConnect from '../../../../config/database/DatabaseConnection';

import { allRooms } from '../../../../controllers/rooms/RoomController';

const router = createRouter();

dbConnect();

router.get(allRooms);

export default router.handler();
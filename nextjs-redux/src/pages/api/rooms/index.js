import { createRouter } from 'next-connect';
import dbConnect from '../../../../config/database/DatabaseConnection';

import { allRooms, newRoom } from '../../../../controllers/rooms/RoomController';

import onError from '../../../../middlewares/errors';

const router = createRouter();

dbConnect();

router.get(allRooms);
router.post(newRoom);

export default router.handler({ onError });
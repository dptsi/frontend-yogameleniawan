import { createRouter } from 'next-connect';
import dbConnect from '../../../../config/database/DatabaseConnection';

import { getSingleRoom, updateRoom, deleteRoom, getSingleRoomMiddleware } from '../../../../controllers/rooms/RoomController';

import onError from '../../../../middlewares/errors';

const router = createRouter();

dbConnect();

router
    .use(getSingleRoomMiddleware)
    .get(getSingleRoom);
router.put(updateRoom);
router.delete(deleteRoom);

export default router.handler({ onError });
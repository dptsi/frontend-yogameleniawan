import { createRouter } from 'next-connect';

import { allRooms } from '../../../../controllers/rooms/RoomController';

const router = createRouter();

router.get(allRooms);

export default router.handler();
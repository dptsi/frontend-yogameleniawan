import { createRouter } from 'next-connect';
import dbConnect from '../../../config/database/DatabaseConnection';

import onError from '../../../middlewares/errors';
import { currentUserProfile } from './../../../controllers/auth/AuthController';
import { isAuthenticatedUser } from '../../../middlewares/auth';

const router = createRouter();

dbConnect();

router.use(isAuthenticatedUser)
    .get(currentUserProfile);

export default router.handler({ onError });
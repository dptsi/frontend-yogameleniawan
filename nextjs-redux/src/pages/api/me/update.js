import { createRouter } from 'next-connect';
import dbConnect from '../../../../config/database/DatabaseConnection';

import { updateProfile } from '../../../../controllers/auth/AuthController';

import { isAuthenticatedUser } from '../../../../middlewares/auth';
import onError from '../../../../middlewares/errors';

const router = createRouter();

dbConnect();

router
    .use(isAuthenticatedUser)
    .put(updateProfile);

export default router.handler({ onError });
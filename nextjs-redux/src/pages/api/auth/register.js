import { createRouter } from 'next-connect';
import dbConnect from '../../../../config/database/DatabaseConnection';

import onError from '../../../../middlewares/errors';
import { registerUser } from './../../../../controllers/auth/AuthController';

const router = createRouter();

dbConnect();

router.post(registerUser);

export default router.handler({ onError });
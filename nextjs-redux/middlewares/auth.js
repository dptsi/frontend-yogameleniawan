import catchAsyncErrors from './catchAsyncError';
import ErrorHandler from './../utils/errors/errorHandler';

import { getSession } from 'next-auth/react';

// Checks if user is authenticated or not
export const isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {

    const session = await getSession({ req });

    if (!session) {
        return next(new ErrorHandler('Login first to access this resource.', 401))
    }

    req.user = session.user;

    next()

})
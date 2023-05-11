import User from '../../models/users';
import mongoose from "mongoose";
import ErrorHandler from '../../utils/errors/errorHandler';
import catchAsyncError from '../../middlewares/catchAsyncError';
import APIFeatures from './../../utils/features/apiFeatures';

// Register user   =>   /api/auth/register
export const registerUser = catchAsyncError(async (req, res) => {

    const { name, email, password } = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: 'PUBLIC_ID',
            url: 'URL'
        }
    });

    res.status(200).json({
        success: true,
        message: 'Account Registered Successfully'
    });
})
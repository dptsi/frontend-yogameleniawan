import User from '../../models/users';
import cloudinary from 'cloudinary';

import catchAsyncError from '../../middlewares/catchAsyncError';


// Setting up cloudinary config
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Register user   =>   /api/auth/register
export const registerUser = catchAsyncError(async (req, res) => {

    const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
        folder: 'bookit/avatars',
        width: '150',
        crop: 'scale'
    });


    const { name, email, password } = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: result.public_id,
            url: result.secure_url
        }
    });

    res.status(200).json({
        success: true,
        message: 'Account Registered Successfully'
    });
})

// Current user profile   =>   /api/me
export const currentUserProfile = catchAsyncError(async (req, res) => {

    const user = await User.findById(req.user._id);

    res.status(200).json({
        success: true,
        user
    });
})
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { toast } from 'react-toastify'
import ButtonLoader from '../layout/ButtonLoader'
import Loader from '../layout/Loader'

import { useDispatch, useSelector } from 'react-redux'
import { updateProfile, clearErrors } from '../../../redux/actions/userActions'
import { UPDATE_PROFILE_RESET } from './../../../redux/constants/userConstants';

interface User {
    name: string;
    email: string;
    password?: string;
}

const Profile = () => {

    const [user, setUser] = React.useState<Partial<User>>({});

    const { name, email, password } = user

    const [avatar, setAvatar] = useState('')
    const [avatarPreview, setAvatarPreview] = useState('/images/default_avatar.png')

    const { user: loadedUser, loading } = useSelector((state: any) => state.loadedUser)
    const { error, isUpdated, loading: updateLoading } = useSelector((state: any) => state.user)

    const dispatch = useDispatch()
    const router = useRouter()

    useEffect(() => {

        if (loadedUser) {
            setUser({
                name: loadedUser.name,
                email: loadedUser.email
            })
            setAvatarPreview(loadedUser.avatar.url)

        }

        if (error) {
            toast.error(error)
            dispatch<any>(clearErrors())
        }

        if (isUpdated) {
            router.push('/')
            dispatch<any>({ type: UPDATE_PROFILE_RESET })
        }

    }, [dispatch, error, isUpdated, loadedUser])

    const submitHandler = (e: any) => {
        e.preventDefault()

        const userData = {
            name, email, password, avatar
        }

        dispatch<any>(updateProfile(userData))

    }

    const onChange = (e: any) => {
        if (e.target.name === 'avatar') {
            const reader = new FileReader()

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setAvatar(reader.result as string)
                    setAvatarPreview(reader.result as string)
                }
            }

            reader.readAsDataURL(e.target.files[0])

        } else {
            setUser({ ...user, [e.target.name]: e.target.value })
        }
    }

    return (
        <>
            {
                loading ? < Loader /> : (<div className="container container-fluid">
                    <div className="row wrapper">
                        <div className="col-10 col-lg-5">
                            <form className="shadow-lg">
                                <h1 className="mb-3">Join Us</h1>

                                <div className="form-group">
                                    <label htmlFor="name_field">Full Name</label>
                                    <input
                                        type="text"
                                        id="name_field"
                                        className="form-control"
                                        name="name"
                                        value={name}
                                        onChange={onChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email_field">Email</label>
                                    <input
                                        type="email"
                                        id="email_field"
                                        className="form-control"
                                        name="email"
                                        value={email}
                                        onChange={onChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password_field">Password</label>
                                    <input
                                        type="password"
                                        id="password_field"
                                        className="form-control"
                                        name="password"
                                        value={password}
                                        onChange={onChange}
                                    />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor='avatar_upload'>Avatar</label>
                                    <div className='d-flex align-items-center'>
                                        <div>
                                            <figure className='avatar mr-3 item-rtl'>
                                                <img
                                                    src={avatarPreview}
                                                    className='rounded-circle'
                                                    alt='image'
                                                />
                                            </figure>
                                        </div>
                                        <div className='custom-file'>
                                            <input
                                                type='file'
                                                name='avatar'
                                                className='custom-file-input'
                                                id='customFile'
                                                accept='images/*'
                                                onChange={onChange}
                                            />
                                            <label className='custom-file-label' htmlFor='customFile'>
                                                Choose Avatar
                                            </label>
                                        </div>
                                    </div>
                                </div>


                                <button
                                    id="login_button"
                                    type="submit"
                                    className="btn btn-block py-3"
                                    disabled={updateLoading ? true : false}
                                    onClick={submitHandler}
                                >
                                    {updateLoading ? <ButtonLoader /> : 'UPDATE'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>)
            }
        </>
    )
}

export default Profile

import Image from 'next/image';
import images from '../../images/bookit_logo.png';
import Link from 'next/link';

import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '../../../redux/actions/userActions';
import { useEffect, useState } from 'react';
import { signOut } from 'next-auth/react';

const Header = () => {

    const dispatch = useDispatch();

    const { user, loading } = useSelector((state: any) => state.auth);

    const [dropdownShow, setDropdownShow] = useState(false);

    useEffect(() => {
        dispatch<any>(loadUser())
    }, [dispatch])

    const logoutHandler = () => {
        signOut();
    }

    return (
        <nav className="navbar row justify-content-center sticky-top">
            <div className="container">
                <div className="col-3 p-0">
                    <div className="navbar-brand">
                        <Link href="/">
                            <Image src={images} alt="BookIT" style={{ cursor: 'pointer' }} />
                        </Link>
                    </div>
                </div>

                <div className="col-3 mt-3 mt-md-0 text-center">
                    {user ? (
                        <div className="dropdown ml-4 d-line">
                            <a className="dropdown-toggle btn mr-4"
                                id='dropDownMenuButton'
                                data-toggle='dropdown'
                                aria-haspopup="true"
                                aria-expanded="false"
                                role='button'
                                onClick={() => setDropdownShow(!dropdownShow)}
                            >
                                <figure className="avatar avatar-nav">
                                    <img
                                        src={user.avatar && user.avatar.url}
                                        alt={user && user.name}
                                        className="rounded-circle"
                                    />
                                </figure>
                                <span>{user && user.name}</span>
                            </a>

                            <div className={dropdownShow ? 'dropdown-menu d-block' : 'dropdown-menu'} aria-labelledby='dropDownMenuButton'>

                                <Link href='/bookings/me' className="dropdown-item">
                                    My Bookings
                                </Link>

                                <Link href='/me/update' className="dropdown-item">
                                    Profile
                                </Link>

                                <Link href='/' className="dropdown-item text-danger" onClick={logoutHandler}>
                                    Logout
                                </Link>

                            </div>
                        </div>
                    ) : !loading && (
                        <Link href="/login" className="btn btn-danger px-4 text-white login-header-btn float-right">
                            Login
                        </Link>
                    )}

                </div>
            </div>
        </nav >
    )
}

export default Header
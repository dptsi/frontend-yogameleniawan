import React, { useEffect } from 'react'

import { useRouter } from 'next/router'

import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import RoomItem from './room/RoomItem';
import Pagination from 'react-js-pagination';
import router from 'next/router';
import Link from 'next/link';

const HomeComponent = () => {

    const dispatch = useDispatch();
    const router = useRouter();

    const { rooms, resPerPage, roomsCount, filteredRoomsCount, error } = useSelector((state: any) => state.allRooms);

    let { page = 1 } = router.query;
    page = Number(page) || 1;

    useEffect(() => {
        toast.error(error);
        // dispatch<any>(cleanRoomsErrors())
    }, [])

    const handlePagination = (pageNumber: number) => {
        router.push(`/?page=${pageNumber}`)
    }

    return (
        <>

            <section id="rooms" className="container mt-5">

                <h2 className='mb-3 ml-2 stays-heading'>Stays in New York</h2>

                <Link href='/search' className='ml-2 back-to-search'>
                    <i className='fa fa-arrow-left'></i> Back to Search
                </Link>

                <div className="row">
                    {
                        rooms && rooms.length === 0 ? <div className="alert alert-danger mt-5 w-100"><b>No Rooms.</b></div> : (
                            rooms && rooms.map((room: any) => (
                                <RoomItem key={room._id} room={room} />
                            ))
                        )
                    }
                </div>
            </section>
            {
                resPerPage < roomsCount &&
                <div className="d-flex justify-content-center mt-5">
                    <Pagination
                        activePage={page}
                        itemsCountPerPage={resPerPage}
                        totalItemsCount={roomsCount}
                        onChange={handlePagination}
                        nextPageText={'Next'}
                        prevPageText={'Prev'}
                        firstPageText={'First'}
                        lastPageText={'Last'}
                        itemClass="page-item"
                        linkClass="page-link"
                    />
                </div>
            }
        </>
    )
};

export default HomeComponent;
import React, { useEffect } from 'react'

import { useRouter } from 'next/router'

import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import RoomItem from './room/RoomItem';
import Pagination from 'react-js-pagination';

import Link from 'next/link';

const HomeComponent = () => {

    const dispatch = useDispatch();
    const router = useRouter();

    const { rooms, resPerPage, roomsCount, filterRoomsCount, error } = useSelector((state: any) => state.allRooms);

    let { page = 1, location } = router.query;
    page = Number(page) || 1;

    useEffect(() => {
        toast.error(error);
        // dispatch<any>(cleanRoomsErrors())
    }, [])

    let queryParams: any;
    if (typeof window !== 'undefined') {
        queryParams = new URLSearchParams(window.location.search)
    }

    const handlePagination = (pageNumber: number) => {
        if (queryParams.has('page')) {
            queryParams.set('page', pageNumber)
        } else {
            queryParams.append('page', pageNumber)
        }

        router.replace({
            search: queryParams.toString()
        })
    }

    let count: number = roomsCount;

    if (location) {
        count = filterRoomsCount;
    }

    return (
        <>

            <section id="rooms" className="container mt-5">

                <h2 className='mb-3 ml-2 stays-heading'>{location ? `Rooms in ${location}` : 'All Rooms'}</h2>

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
                resPerPage < count &&
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
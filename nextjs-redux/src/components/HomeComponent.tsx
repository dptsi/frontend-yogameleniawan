import React from 'react'

import { useSelector } from 'react-redux';
import RoomItem from './room/RoomItem';

const HomeComponent = () => {

    const { rooms } = useSelector((state: any) => state.allRooms);

    return (
        <section id="rooms" className="container mt-5">

            <h2 className='mb-3 ml-2 stays-heading'>Stays in New York</h2>

            <a href='#' className='ml-2 back-to-search'> <i className='fa fa-arrow-left'></i> Back to Search</a>

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
    )
};

export default HomeComponent;
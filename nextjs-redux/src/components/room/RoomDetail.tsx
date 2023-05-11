import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const RoomDetail = () => {

    const { room } = useSelector((state: any) => state.roomDetails);

    return (
        <div className="container container-fluid">
            <h2 className='mt-5'>{room.name}</h2>

            <div className="ratings mt-auto mb-3">
                <div className="rating-outer">
                    <div className="rating-inner" style={{ width: `${(room.reviews.ratings / 5) * 100}%` }}></div>
                </div>
                <span id="no_of_reviews">({room.reviews.length} Reviews)</span>
            </div>

            <img src="https://a0.muscache.com/im/pictures/a8f6a489-d236-4d2d-a57b-a95d928970af.jpg?im_w=960" className="d-block w-100 property-details-image m-auto" alt="Hotel" />

            <div className="row my-5">
                <div className="col-12 col-md-6 col-lg-8">
                    <h3>Description</h3>
                    <p>{room.description}</p>


                    <div className="features mt-5">
                        <h3 className='mb-4'>Features:</h3>
                        <div className='room-feature'>
                            <i className="fa fa-cog fa-fw fa-users" aria-hidden="true"></i>
                            <p>{room.guestCapacity} Guests</p>
                        </div>

                        <div className='room-feature'>
                            <i className="fa fa-cog fa-fw fa-bed" aria-hidden="true"></i>
                            <p>{room.numOfBeds} Beds</p>
                        </div>

                        <div className='room-feature'>
                            <i className="fa fa-cog fa-fw fa-bath" aria-hidden="true"></i>
                            <p>2 Baths</p>
                        </div>

                        {
                            room.breakfast ? (<div className='room-feature'>
                                <i className="fa fa-cog fa-fw fa-cutlery" aria-hidden="true"></i>
                                <p>Kitchen</p>
                            </div>) : ''
                        }

                    </div>


                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <div className="booking-card shadow-lg p-4">
                        <p className='price-per-night'><b>${room.pricePerNight}</b> / night</p>

                        <button className="btn btn-block py-3 booking-btn">Pay</button>

                    </div>
                </div>
            </div>


            <div className="reviews w-75">
                <h3>Reviews:</h3>
                <hr />

                {
                    room.reviews && room.reviews.length === 0
                        ? <div className="alert alert-danger mt-5 w-100">
                            <b>No Reviews.</b>
                        </div>
                        :
                        (<div className="review-card my-3">
                            <div className="rating-outer">
                                <div className="rating-inner" style={{ width: `${(room.reviews.ratings / 5) * 100}%` }}></div>
                            </div>
                            <p className="review_user">by John</p>
                            <p className="review_comment">Good Quality</p>

                            <hr />
                        </div>)
                }

            </div>
        </div>
    )
}

export default RoomDetail

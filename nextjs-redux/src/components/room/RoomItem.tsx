import Image from "next/image";
import Link from "next/link";

type Props = {
    room?: any
}

const RoomItem = ({ room }: Props) => {

    return (
        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-2">
                <img
                    className="card-img-top mx-auto"
                    src="https://a0.muscache.com/im/pictures/a8f6a489-d236-4d2d-a57b-a95d928970af.jpg?im_w=960"
                    alt="Card image cap"
                />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">
                        <Link href={`/room/${room._id}`}>{room.name}</Link>
                    </h5>

                    <div className="ratings mt-auto mb-3">
                        <p className="card-text"><b>{`$ ${room.pricePerNight}`}</b> / night</p>

                        <div className="rating-outer">
                            <div className="rating-inner"
                                style={{ width: `${(room.ratings / 5) * 100}%` }}></div>
                        </div>
                        <span id="no_of_reviews">({room.numOfReviews} Reviews)</span>
                    </div>

                    <div className="btn btn-block view-btn">
                        <Link href={`/room/${room._id}`}>View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomItem;
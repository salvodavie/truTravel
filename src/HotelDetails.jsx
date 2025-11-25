import React from "react";

export default function HotelDetails({ hotel }){


    return(
        <div className="hotel-card">
            <p>{hotel.hotelName}</p>
            <p>{hotel.city} </p>
            <p>{hotel.rating}</p>
            <p>${hotel.minRate} /night</p>
            <p>{hotel.amenities.join(", ")}</p>
            <button className="book-now">Book Now!</button>
        </div>
    );
};
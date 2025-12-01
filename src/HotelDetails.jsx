import React from "react";
import { motion } from "framer-motion";
import Rating from '@mui/material/Rating';

export default function HotelDetails({ hotel, onClick }) {

const starValue = Math.min(hotel.rating.length, 5);

    return (
        <motion.div
            className="hotel-card"
            onClick={onClick}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            <div className="hotel-content">
                <img 
                    src={hotel.image} 
                    alt={hotel.hotelName}
                    className="hotel-image"
                />
                <p>{hotel.hotelName}</p>
                <Rating name="read-only" value={starValue} readOnly />
                <p>{hotel.city}</p>
                <p>{hotel.minRate}</p>
                <p>{hotel.amenities.join(", ")}</p>
            </div>
        </motion.div>
    );
};
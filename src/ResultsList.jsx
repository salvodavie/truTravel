import React from "react";
import HotelDetails from "./HotelDetails";

export default function ResultsList({ filteredHotels }) {
  return (
    <div className="search-results">
      {filteredHotels.map(hotel =>
        <HotelDetails key={hotel.id} hotel={hotel} />
      )}
    </div>
  );
};
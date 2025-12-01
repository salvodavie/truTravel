import { React, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HotelDetails from "./HotelDetails";
import HotelModal from "./HotelModal"

export default function ResultsList({ filteredHotels, search }) {


  const [selectedHotel, setSelectedHotel] = useState(null);

  const handleOpenModal = (hotel) => setSelectedHotel(hotel);


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
    <motion.div
      className="search-results"
      key={filteredHotels.map(h => h.id).join('-')}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {filteredHotels.map((hotel) => (
        <motion.div key={hotel.id} variants={itemVariants}>
          <HotelDetails 
          key={hotel.id}
          hotel={hotel} 
          onClick={() => handleOpenModal(hotel)}/>
        </motion.div>
      ))}
      
    </motion.div>

      <AnimatePresence>
        {selectedHotel && (
          <motion.div
            key={selectedHotel.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <HotelModal
              hotel={selectedHotel}
              onClose={() => setSelectedHotel(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}
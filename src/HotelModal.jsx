import { Modal, Box, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button'

export default function HotelModal({ hotel, onClose }) {

const starValue = Math.min(hotel.rating.length, 5);


    return (
        <AnimatePresence>
            {hotel && (
                <Modal
                    open={!!hotel}
                    onClose={onClose}
                    disableAutoFocus
                    disableEnforceFocus
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: "rgba(0, 0, 0, 0.4)",
                    }}
                >
                    <motion.div
                        key={hotel.id}
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        <Box
                            sx={{
                                bgcolor: "background.paper",
                                p: 4,
                                borderRadius: 3,

                                width: 850,
                                boxShadow: 24,
                                border: "0 !important",
                                outline: "0 !important",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",



                            }}
                        >
                            <div>
                                <Box
                                    component="img"
                                    src={hotel.image}
                                    alt={hotel.hotelName}
                                    sx={{
                                        width: "50rem",
                                        height: "40rem",
                                        objectFit: "cover",
                                        borderRadius: 2,
                                        mb: 2,
                                    }}
                                />
                            </div>

                            <div className="hotel-content-modal">
                                <h2>{hotel.hotelName}</h2>
                                <Rating name="read-only" value={starValue} readOnly />
                                <p>{hotel.city}</p>
                                <p>Price: ${hotel.minRate}</p>
                                <p>Amenities: {hotel.amenities.join(", ")}</p>

                                <Button
                                    onClick={onClose}
                                    sx={{

                                        display: "flex",
                                        width: "100%",
                                        mt: 3,
                                        px: 3,
                                        py: 1.2,
                                        fontSize: "0.9rem",
                                        fontWeight: 600,
                                        textTransform: "none",
                                        borderRadius: 2,
                                        boxShadow: "0px 2px 4px rgba(0,0,0,0.12)",
                                        backgroundColor: "#1976d2",          // standard blue
                                        color: "white",
                                        "&:hover": {
                                            backgroundColor: "#1565c0",
                                            boxShadow: "0px 3px 6px rgba(0,0,0,0.18)",
                                        },
                                        transition: "all 0.2s ease",
                                    }}
                                >
                                    Book Your Stay Now!
                                </Button>
                                <br></br>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Suspendisse vel accumsan nibh. Etiam feugiat, magna id convallis condimentum, ante purus sollicitudin velit, sit amet
                                    egestas augue sem sed neque. Mauris at neque maximus, porttitor lectus ac, tempus dolor. Donec vitae enim vel augue
                                    imperdiet congue non nec lacus. Cras auctor egestas eros, vitae vehicula lectus imperdiet nec. Quisque commodo scelerisque nunc,
                                    vitae congue quam facilisis id. Duis pharetra, nibh ut fringilla bibendum, magna augue aliquam velit, non consectetur ligula
                                    libero et nunc.
                                </p>
                            </div>
                        </Box>
                    </motion.div>
                </Modal>
            )}
        </AnimatePresence>
    );
}

import React from "react";
import { Drawer, Box, Typography, } from '@mui/material';

function DrawerMenu({ drawerOpen, toggleDrawer }) {


    return (
        <div>
            <Drawer className="drawer" anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box
                    sx={{ width: 250, padding: 2, overflow: 'hidden' }}
                    role="presentation"
                    onKeyDown={toggleDrawer(false)}
                >


                    <Typography className="menu-header" variant="h6">About This Project</Typography>
                    <br></br>
                    <div>
                        <p>This React app is built as a demonstration to showcase my conceptual understanding of API fetching and data management.
                            <br></br>
                            <br></br>
                            Utilizing MUI component and Framer Motion animation libraries.
                            <br></br>
                            <br></br>
                            Thank you for your feedback.
                        </p>

                    </div>
                </Box>
            </Drawer>
        </div >
    )
};

export default DrawerMenu
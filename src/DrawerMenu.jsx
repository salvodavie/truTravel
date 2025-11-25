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


                            <Typography className="menu-header" variant="h6">Menu</Typography>
                            <div>
                                <p>Options</p>
                                <ul>
                                    <li>placeholder</li>
                                    <li>placeholder</li>
                                    <li>placeholder</li>
                                </ul>
                            </div>
                        </Box>
                    </Drawer>
                </div >
            )
        };

export default DrawerMenu
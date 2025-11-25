import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function SortMenu({ setSortOption, sortOption }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button variant="contained" onClick={handleClick}
                sx={{
                    borderRadius: '.5rem',
                    backgroundColor: '#5996ddff',
                    color: '#fff',
                    fontWeight: '600',
                    fontFamily: '"Trebuchet MS", sans-serif',
                    textTransform: 'none',  // removes uppercase
                    padding: '10px 24px',
                    margin: '10px',
                    '&:hover': {
                        backgroundColor: '#3d6fa7ff',
                    },
                    width: '7.5rem',
                }}
            >
                Sort By:
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem
                    onClick={() => {
                        setSortOption(prev => ({
                            sortBy: "price",
                            order: prev.order === "desc" ? "asc" : "desc"
                        }));
                        handleClose();
                    }}
                >
                     Price, {sortOption.order === "desc" ? "Highest to Lowest" : "Lowest to Highest"}
                </MenuItem>

                <MenuItem
                    onClick={() => {
                        setSortOption(prev => ({
                            sortBy: "price",
                            order: prev.order === "desc" ? "asc" : "desc"
                        }));
                        handleClose();
                    }}
                >
                    Rating: {sortOption.order === "desc" ? "Top Rated First" : "Lowest Rated First"}
                </MenuItem>

                <MenuItem
                    onClick={() => {
                        setSortOption(prev => ({
                            sortBy: "price",
                            order: prev.order === "desc" ? "asc" : "desc"
                        }));
                        handleClose();
                    }}
                >
                    Amenities: {sortOption.order === "desc" ? "Most to Least" : "Least to Most"}
                </MenuItem>
            </Menu>
        </div>
    );
}
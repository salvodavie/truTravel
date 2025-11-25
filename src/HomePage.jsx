import React from "react";
import DrawerMenu from "./DrawerMenu";
import { Button, Drawer, Box, Typography, } from "@mui/material";
import logoWhite from './assets/logoWhite.png';
import ResultsList from "./ResultsList"
import SortMenu from "./SortMenu"
import FilterMenu from "./FilterMenu"

function HomePage({ toggleDrawer, drawerOpen, search, setSearch, filteredHotels, searchInput, setSearchInput, selectedAmenities, setSelectedAmenities, setSortOption, sortOption }) {

    return (
        <div className="app">

            <div className="search-container">
                <div className="menu-button">
                    <Button className="menu-button" onClick={toggleDrawer(true)}>☰</Button>
                </div>

                <img className='logo' src={logoWhite} alt="Logo" />

                <div className="search-ui">
                    <input
                        type="text"
                        className="searchbar"
                        placeholder="Enter City"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                setSearch(searchInput)

                            };

                        }}
                    />

                </div>
            </div>

            <div className="bottom">
                <div className="options-bar">
                    <div className="options-text">
                        <h2>Showing Results for {search}</h2>
                        <p>Based on your selections</p>
                    </div>
                    <div className="sorting-menus">
                        <SortMenu sx={{
                            width: '10px',
                            color: "red"
                        }}
                            setSortOption={setSortOption}
                            sortOption={sortOption}
                        />
                        <FilterMenu
                            selectedAmenities={selectedAmenities}
                            setSelectedAmenities={setSelectedAmenities}
                        />
                    </div>
                </div>

                <div>
                    <ResultsList filteredHotels={filteredHotels} />
                </div>
            </div>

            <DrawerMenu toggleDrawer={toggleDrawer} drawerOpen={drawerOpen} />


            <div className="bottom">
            </div>
            <footer>blah blah</footer>
        </div>
    );
};

export default HomePage
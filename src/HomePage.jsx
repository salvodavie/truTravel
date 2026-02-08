import React from "react";
import DrawerMenu from "./DrawerMenu";
import { Button, Drawer, Box, Typography, } from "@mui/material";
import logoWhite from './assets/logoWhite.png';
import ResultsList from "./ResultsList"
import SortMenu from "./SortMenu"
import FilterMenu from "./FilterMenu"
import { motion } from "framer-motion";

function HomePage({ toggleDrawer, drawerOpen, search, setSearch, filteredHotels, searchInput, setSearchInput, selectedAmenities, setSelectedAmenities, setSortOption, sortOption }) {

    return (
        <div className="app">

            <div className="search-container">
                <div className="menu-button">
                    <Button className="menu-button" onClick={toggleDrawer(true)}>☰</Button>
                </div>

                <img className='logo' src={logoWhite} alt="Logo" />

                <div className="search-ui">

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        It’s time to get away.
                    </motion.h2>
                    <h6 div className="welcome-text2">Find your perfect stay, anywhere in the world.</h6>


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
                        {search
                            ?
                            <div>
                                <h2>Showing Results for {search.charAt(0).toUpperCase() + search.slice(1)}</h2>
                                <p>Based on your selections</p>
                            </div>

                            : null}

                    </div>
                    <div className="sorting-menus">
                        <SortMenu
                            setSortOption={setSortOption}
                            sortOption={sortOption} />

                        <FilterMenu
                            selectedAmenities={selectedAmenities}
                            setSelectedAmenities={setSelectedAmenities}
                        />
                    </div>
                </div>

                <div>
                    <ResultsList filteredHotels={filteredHotels} search={search} />
                </div>
            </div>

            <DrawerMenu toggleDrawer={toggleDrawer} drawerOpen={drawerOpen} />


            <div className="bottom">
            </div>
            <footer></footer>
        </div>
    );
};

export default HomePage
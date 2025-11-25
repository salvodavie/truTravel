import { useState, useEffect } from 'react'
import './App.css'
import HomePage from './HomePage'
import { fetchHotels } from './fetchHotels'

function App() {

  /*Drawer Menu Control */
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [location, setLocation] = useState('Miami');
  const [search, setSearch] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [hotels, setHotels] = useState([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const [sortOption, setSortOption] = useState({ sortBy: "price", order:"desc" })

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const filteredHotels = hotels.filter((hotel) =>
    selectedAmenities.every((amenity) =>
      hotel.amenities.map(a => a.toLowerCase()).includes(amenity.toLowerCase())
    )
  );


/*Results Sorting*/

const sortedHotels = handleSortHotels(filteredHotels, sortOption);

  function handleSortHotels(hotels, sortOption) {
    if (!sortOption || !sortOption.sortBy) return hotels

    const sorted = [...hotels].sort((a, b) => {
      let valueA, valueB

      if (sortOption.sortBy === "price") {
        valueA = a.minRate
        valueB = b.minRate
      } else if (sortOption.sortBy === "rating") {
        valueA = a.rating.length
        valueB = b.rating.length
      } else if (sortOption.sortBy === "amenities") {
        valueA = a.amenities.length
        valueB = b.amenities.length
      } else {
        return 0;
      }

      let comparison = valueA - valueB;

      if (sortOption.order === "desc") comparison *= -1;

      return comparison;

    });
    return sorted;
  }

  /*fetchHotels*/

useEffect(() => {
  async function loadHotels() {
    setLoading(true);
    try {
      const data = await fetchHotels(search);
      setHotels(data);
      setError(null); // reset any prior errors
    } catch (err) {
      setError(err.message || "Failed to load hotels.");
    } finally {
      setLoading(false);
    }
  }
  loadHotels();
}, [search]);


  return (
    <div>
      <HomePage className="home-page"
        toggleDrawer={toggleDrawer}
        drawerOpen={drawerOpen}
        search={search}
        setSearch={setSearch}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        filteredHotels={sortedHotels}
        selectedAmenities={selectedAmenities}
        setSelectedAmenities={setSelectedAmenities}
        setSortOption={setSortOption}
        sortOption={sortOption}
      />
    </div>

  )
}

export default App

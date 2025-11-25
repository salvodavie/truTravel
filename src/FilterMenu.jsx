import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

export default function FilterMenu({ selectedAmenities, setSelectedAmenities }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleToggle = (value) => {
    setSelectedAmenities((prev) =>
      prev.includes(value)
        ? prev.filter((e) => e !== value) // create array with ever element(e) that is not "value"
        : [...prev, value] // add
    );
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleClick}
        sx={{
          borderRadius: ".5rem",
          backgroundColor: "#5996ddff",
          color: "#fff",
          fontWeight: "600",
          fontFamily: '"Trebuchet MS", sans-serif',
          textTransform: "none",
          padding: "10px 24px",
          margin: "10px",
          "&:hover": {
            backgroundColor: "#3d6fa7ff",
          },
        }}
      >
        Amenities
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <FormGroup
          sx={{
            padding: "1rem",
            minWidth: "160px",
          }}
        >
          {["Gym", "Bar", "Wifi", "Pool", "Spa", "Breakfast"].map((amenity) => (
            <FormControlLabel
              key={amenity.toLowerCase()}
              control={
                <Checkbox
                  checked={selectedAmenities.includes(amenity.toLowerCase())}
                  onChange={() => handleToggle(amenity.toLowerCase())}
                />
              }
              label={amenity}
            />
          ))}
        </FormGroup>
      </Menu>
    </div>
  );
}

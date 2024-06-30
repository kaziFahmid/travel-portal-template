import { Box, Button, Container } from "@mui/material";
import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Oneway from "./Oneway/Oneway";
import Roundway from "./Roundway/Roundway";
import Multicity from "./Multicity/Multicity";
import moment from "moment";
const FlightSearchBox = () => {
  const [openFrom, setOpenFrom] = useState(false);
  const [openTo, setOpenTo] = useState(false);
  const [openDepartureDate, setOpenDepartureDate] = useState(false);
  const [openReturnDate, setOpenReturnDate] = useState(false);
  const [openPassenger, setOpenPassenger] = useState(false);
  
  const flightClasses = [
    "Economy",
    "Business",
    "First Class",
    "Premimum Economy",
    "Premimum First",
    "Premium Business",
  ];

  // flight values

  const [from, setFrom] = useState("DAC");
  const [to, setTo] = useState("DXB");
  const [fromText, setFromText] = useState("Dhaka,BANGLADESH");
  const [toText, setToText] = useState("Dubai,UNITED ARAB EMIRATES");
  const [fromAirport, setFromAirport] = useState("Hazrat Shahjalal Intl Airport");
  const [toAirport, setToAirport] = useState("Dubai Intl Airport");
  const [departureDate, setDepartureDate] = useState(moment(new Date()).format('YYYY-MM-DD'));
  const [returnDate, setReturnDate] = useState(moment(new Date()).add(2, 'days').format('YYYY-MM-DD'));
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const [className, setClassName] = useState('Economy');

  const [flightOptions, setFlightOptions] = useState("Oneway");
  let handleSelectFlightOptions = (value) => {
    setFlightOptions(value);
  };

  return (
    <Box>
      <Box
        sx={{
          bgcolor: "var( --grey-color)",
          width: "fit-content",
          p: 0.8,
          borderRadius: "50px",
        }}
      >
        {["Oneway", "Roundway", "Multiciy"]?.map((item) => (
          <Button
            onClick={() => handleSelectFlightOptions(item)}
            variant="contained"
            sx={{
              px: 4,
              fontWeight: item === flightOptions ? "500" : "400",
              "&:hover": {
                background: "var(--white-color)",
                boxShadow: "none",
              },
              color:
                item === flightOptions
                  ? "var(--secondary-color)"
                  : "var(--text-color)",
              boxShadow: "none",
              borderRadius: "50px",
              background: item === flightOptions ? "white" : "transparent",
              textTransform: "capitalize",
              boxShadow: item === flightOptions ? 3 : "none",
            }}
          >
            {item}
          </Button>
        ))}
      </Box>
      <Box sx={{ mt: 3 }}>
        {flightOptions === "Oneway" && (
          <Oneway
from={from}
setFrom={setFrom}
to={to}
setTo={setTo}
fromText={fromText}
setFromText={setFromText}
toText={toText}
setToText={setToText}
fromAirport={fromAirport}
setFromAirport={setFromAirport}
toAirport={toAirport}
setToAirport={setToAirport}
departureDate={departureDate}
setDepartureDate={setDepartureDate}
adultCount={adultCount}
childCount={childCount}
infantCount={infantCount}
className={className}
setClassName={setClassName}

setAdultCount={setAdultCount}
setChildCount={setChildCount}
 setInfantCount={ setInfantCount}

 flightOptions={flightOptions}





            openFrom={openFrom}
            setOpenFrom={setOpenFrom}
            openTo={openTo}
            setOpenTo={setOpenTo}
            openDepartureDate={openDepartureDate}
            setOpenDepartureDate={setOpenDepartureDate}
            handleSelectFlightOptions={handleSelectFlightOptions}
            openPassenger={openPassenger}
            setOpenPassenger={setOpenPassenger}
            flightClasses={flightClasses}
          />
        )}
        {flightOptions === "Roundway" && <Roundway from={from}
setFrom={setFrom}
to={to}
setTo={setTo}
fromText={fromText}
setFromText={setFromText}
toText={toText}
setToText={setToText}
fromAirport={fromAirport}
setFromAirport={setFromAirport}
toAirport={toAirport}
setToAirport={setToAirport}
departureDate={departureDate}
setDepartureDate={setDepartureDate}
adultCount={adultCount}
childCount={childCount}
infantCount={infantCount}
className={className}
setClassName={setClassName}

setAdultCount={setAdultCount}
setChildCount={setChildCount}
 setInfantCount={ setInfantCount}

 flightOptions={flightOptions}


 openReturnDate={ openReturnDate}
 setOpenReturnDate={ setOpenReturnDate}

 returnDate={ returnDate}
 setReturnDate={  setReturnDate}

            openFrom={openFrom}
            setOpenFrom={setOpenFrom}
            openTo={openTo}
            setOpenTo={setOpenTo}
            openDepartureDate={openDepartureDate}
            setOpenDepartureDate={setOpenDepartureDate}
            handleSelectFlightOptions={handleSelectFlightOptions}
            openPassenger={openPassenger}
            setOpenPassenger={setOpenPassenger}
            flightClasses={flightClasses} />}
        {flightOptions === "Multiciy" && <Multicity />}
      </Box>
    </Box>
  );
};

export default FlightSearchBox;

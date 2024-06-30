import {
  Box,
  Button,
  Container,
  Fab,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import { useClickAway } from "@uidotdev/usehooks";
import FlightSearchButton from "../FlightSearchButton/FlightSearchButton";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import useGetAirports from "../../../hooks/useGetAirports";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import moment from "moment";
import { useNavigate } from "react-router-dom";
const Roundway = (props) => {
  // one way values from props
  const {
    from,
    setFrom,
    to,
    setTo,
    fromText,
    setFromText,
    toText,
    setToText,
    fromAirport,
    setFromAirport,
    toAirport,
    setToAirport,
    departureDate,
    setDepartureDate,
    adultCount,
    childCount,
    infantCount,
    className,
    setClassName,
    openFrom,
    setOpenFrom,
    openTo,
    setOpenTo,
    openDepartureDate,
    setOpenDepartureDate,
    handleSelectFlightOptions,
    flightClasses,
    openPassenger,
    setOpenPassenger,
    setAdultCount,
    setChildCount,
    setInfantCount,
    flightOptions,
    openReturnDate,
 setOpenReturnDate,
 returnDate,
 setReturnDate
  } = props;
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const totalPassengers = adultCount + childCount + infantCount;
  const { airports, loading } = useGetAirports(searchTerm);
  const handleInputChange = (e) => {
    if (e.target.value.length > 2) {
      setSearchTerm(e.target.value);
    } else {
      setSearchTerm(e.target.value);
    }
  };
  const [clickInside, setClickInside] = useState(false);
  const [value, onChange] = useState(new Date());
  const ref = useClickAway(() => {
    if (!clickInside) {
      setOpenFrom(false);
      setOpenTo(false);
      setOpenDepartureDate(false);
      setOpenPassenger(false);
    }
  });

  let handleFromValue = (code, airport, fromTextValue) => {
    console.log(airport)
    setFrom(code);
    setFromAirport(airport);
    setFromText(fromTextValue);
    setOpenFrom(false);
  };

  let handleToValue = (code, airport, toTextValue) => {
    setTo(code);
    setToAirport(airport);
    setToText(toTextValue);
    setOpenTo(false);
  };

  let handleDepartureDate = (dateValue) => {
    setDepartureDate(moment(dateValue).format("YYYY-MM-DD"));
    setOpenDepartureDate(false);
  };

  let handleSwap = () => {
    setFrom(to);
    setFromAirport(toAirport);
    setFromText(toText);
    setTo(from);
    setToAirport(fromAirport);
    setToText(fromText);
  };

  let handleSelectFlightClass = (e, value) => {
    if (e.target.checked) {
      setClassName(value);
    }
  };

  const handleIncreaseAdult = (e) => {
    e.preventDefault()
    if (adultCount < 9 - (childCount + infantCount)) {
      setAdultCount(adultCount + 1);
    }
  };

  const handleDecreaseAdult = (e) => {
    e.preventDefault()
    if (adultCount > 1) {
      setAdultCount(adultCount - 1);
      if (infantCount === adultCount) {
        if (infantCount > 1) {
          setInfantCount(infantCount - 1);
        }
      }
    }
  };

  const handleIncreaseChild = (e) => {
    e.preventDefault()
    // Allow increasing child count only if it doesn't exceed adult count
    if (childCount < 9 - (adultCount + infantCount)) {
      setChildCount(childCount + 1);
    }
  };

  const handleDecreaseChild = (e) => {
    e.preventDefault()
    if (childCount > 0) {
      setChildCount(childCount - 1);
    }
  };

  const handleIncreaseInfant = (e) => {
    e.preventDefault()
    if (infantCount < 9 - (adultCount + childCount)) {
      if (infantCount < adultCount) {
        setInfantCount(infantCount + 1);
      }
    }
  };

  const handleDecreaseInfant = (e) => {
    e.preventDefault()
    if (infantCount > 0) {
      setInfantCount(infantCount - 1);
    }
  };

  let handleReturnDate = (dateValue) => {
    setReturnDate(moment(dateValue).format("YYYY-MM-DD"));
    setOpenReturnDate(false);
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    navigate("/roundwaysearchresults", {
      state: {
       searchBody:{
        from,
        to,
        fromText,
        toText,
        fromAirport,
        toAirport,
        className,
        departureDate,
        returnDate,
        adultCount,
        childCount,
        infantCount,
        flightOptions
       }
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ position: "relative" }}>
        <Grid container spacing={2} sx={{ position: "relative" }}>
          <Grid item xs={12} sm={5.8} lg={2.5} sx={{ position: "relative" }}>
            <Box
              onClick={() => {
                setOpenFrom(!openFrom);
                setOpenTo(false);
                setOpenDepartureDate(false);
                setOpenPassenger(false);
              }}
              onMouseDown={() => {
                setClickInside(true);
                setTimeout(() => {
                  setClickInside(false);
                }, 100);
              }}
              sx={{
                cursor: "pointer",
                bgcolor: "var(--grey-color)",
                borderRadius: "8px",
                px: 2,
                py: 1,
              }}
            >
              <Typography
                sx={{ fontSize: "14px", color: "var(--medium-gray-color)" }}
              >
                Departure
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "var(--mate-color)",
                }}
              >
                {fromText.split(",")[0] || " "} ({from || " "})
              </Typography>
            </Box>
            {openFrom && (
              <Box
                ref={ref}
                sx={{
                  bgcolor: "var(--white-color)",
                  width: "100%",
                  position: "absolute",
                  zIndex: 1300,
                  px: 1.3,
                  boxShadow: 1,
                  borderRadius: "8px",
                  pt: 1,
                }}
              >
                <Box>
                  <input
                    type="text"
                    onChange={handleInputChange}
                    value={searchTerm}
                    placeholder="Search Airport"
                    style={{
                      fontSize: "14px",
                      padding: "8px",
                      width: "100%",
                      fontWeight: "500",
                      color: "var(--mate-color)",
                      outline: "none",
                      border: "none",
                      background: "var(--grey-color)",
                    }}
                  />
                </Box>
                <Box sx={{ ".MuiListItem-root": { padding: "0px" } }}>
                  {loading ? (
                    <div>Loading...</div>
                  ) : (
                    <List>
                      {airports?.length > 0 ? (
                        airports?.slice(0, 5).map((data, index) => (
                          <ListItem
                            onClick={() =>
                              handleFromValue(
                                data?.code,
                                data?.name,
                                data?.Address
                              )
                            }
                            sx={{
                              borderRadius: "8px",
                              bgcolor: "var(--grey-color)",
                              mb: 2,
                            }}
                          >
                            <ListItemButton>
                              <ListItemIcon>
                                <Box
                                  sx={{
                                    bgcolor: "var(--white-color)",
                                    borderRadius: "14%",
                                    height: "40px",
                                    width: "40px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                >
                                  <Typography
                                    sx={{
                                      fontSize: "13px",
                                      fontWeight: "600",
                                      color: "var(--mate-color)",
                                    }}
                                  >
                                    {data?.code}
                                  </Typography>
                                </Box>
                              </ListItemIcon>
                              <ListItemText
                                primary={
                                  <Box>
                                    <Typography
                                      sx={{
                                        fontSize: "13px",
                                        fontWeight: "500",
                                        color: "var(--mate-color)",
                                      }}
                                    >
                                      {data?.Address}
                                    </Typography>
                                    <Typography
                                      sx={{
                                        fontSize: "11px",
                                        fontWeight: "500",
                                        color: "var(--medium-gray-color)",
                                      }}
                                    >
                                      {data?.name}
                                    </Typography>
                                  </Box>
                                }
                              />
                            </ListItemButton>
                          </ListItem>
                        ))
                      ) : (
                        <Typography>Not Found</Typography>
                      )}
                    </List>
                  )}
                </Box>
              </Box>
            )}
          </Grid>
          <Grid
            item
            xs={12}
            sm={0.1}
            lg={0.1}
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              onClick={handleSwap}
              sx={{
                border: "1px solid var(--secondary-color) ",
                width: "38px",
                height: "38px",
                bgcolor: "white",
                borderRadius: "50%",
                boxShadow: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                zIndex: 100,
                cursor: "pointer",
                transform: "translateX(-50%-50%)",
                textAlign: "center",
              }}
            >
              <SwapHorizIcon sx={{ color: "var(--primary-color)" }} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={5.9} lg={2.5} sx={{ position: "relative" }}>
            <Box
              onClick={() => {
                setOpenTo(!openTo);

                setOpenFrom(false);
                setOpenDepartureDate(false);
                setOpenPassenger(false);
              }}
              onMouseDown={() => {
                setClickInside(true);
                setTimeout(() => {
                  setClickInside(false);
                }, 100);
              }}
              sx={{
                cursor: "pointer",
                bgcolor: "var(--grey-color)",
                borderRadius: "8px",
                px: 2,
                py: 1,
              }}
            >
              <Typography
                sx={{ fontSize: "14px", color: "var(--medium-gray-color)" }}
              >
                Destination
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "var(--mate-color)",
                }}
              >
                {toText.split(",")[0] || " "} ({to || " "})
              </Typography>
            </Box>
            {openTo && (
              <Box
                ref={ref}
                sx={{
                  bgcolor: "var(--white-color)",
                  width: "100%",
                  position: "absolute",
                  zIndex: 1300,
                  px: 1.3,
                  boxShadow: 1,
                  borderRadius: "8px",
                  pt: 1,
                }}
              >
                <Box>
                  <input
                    type="text"
                    onChange={handleInputChange}
                    value={searchTerm}
                    placeholder="Search Airport"
                    style={{
                      fontSize: "14px",
                      padding: "8px",
                      width: "100%",
                      fontWeight: "500",
                      color: "var(--mate-color)",
                      outline: "none",
                      border: "none",
                      background: "var(--grey-color)",
                    }}
                  />
                </Box>
                <Box sx={{ ".MuiListItem-root": { padding: "0px" } }}>
                  {loading ? (
                    <div>Loading...</div>
                  ) : (
                    <List>
                      {airports?.length > 0 ? (
                        airports?.slice(0, 5).map((data, index) => (
                          <ListItem
                            onClick={() =>
                              handleToValue(
                                data?.code,
                                data?.name,
                                data?.Address
                              )
                            }
                            sx={{
                              borderRadius: "8px",
                              bgcolor: "var(--grey-color)",
                              mb: 2,
                            }}
                          >
                            <ListItemButton>
                              <ListItemIcon>
                                <Box
                                  sx={{
                                    bgcolor: "var(--white-color)",
                                    borderRadius: "14%",
                                    height: "40px",
                                    width: "40px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                >
                                  <Typography
                                    sx={{
                                      fontSize: "13px",
                                      fontWeight: "600",
                                      color: "var(--mate-color)",
                                    }}
                                  >
                                    {data?.code}
                                  </Typography>
                                </Box>
                              </ListItemIcon>
                              <ListItemText
                                primary={
                                  <Box>
                                    <Typography
                                      sx={{
                                        fontSize: "13px",
                                        fontWeight: "500",
                                        color: "var(--mate-color)",
                                      }}
                                    >
                                      {data?.Address}
                                    </Typography>
                                    <Typography
                                      sx={{
                                        fontSize: "11px",
                                        fontWeight: "500",
                                        color: "var(--medium-gray-color)",
                                      }}
                                    >
                                      {data?.name}
                                    </Typography>
                                  </Box>
                                }
                              />
                            </ListItemButton>
                          </ListItem>
                        ))
                      ) : (
                        <Typography>Not Found</Typography>
                      )}
                    </List>
                  )}
                </Box>
              </Box>
            )}
          </Grid>
          <Grid item xs={12} sm={6} lg={2}>
            <Box
              onClick={() => {
                setOpenDepartureDate(!openDepartureDate);

                setOpenFrom(false);
                setOpenTo(false);

                setOpenPassenger(false);
                setOpenReturnDate(false);
              }}
              onMouseDown={() => {
                setClickInside(true);
                setTimeout(() => {
                  setClickInside(false);
                }, 100);
              }}
              sx={{
                cursor: "pointer",
                position: "relative",
                bgcolor: "var(--grey-color)",
                borderRadius: "8px",
                px: 2,
                py: 1,
              }}
            >
              <Typography
                sx={{ fontSize: "14px", color: "var(--medium-gray-color)" }}
              >
                Departure
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "var(--mate-color)",
                }}
              >
                {moment(departureDate).format("DD MMMM YY")}
              </Typography>
            </Box>

            {openDepartureDate && (
              <Box
                ref={ref}
                sx={{ position: "absolute", widht: "100%", zIndex: 1300 }}
              >
                <Calendar
                  onChange={handleDepartureDate}
       
                  value={new Date(departureDate)}
                  minDate={new Date()}
                />
              </Box>
            )}
          </Grid>
          <Grid item xs={12} sm={6} lg={2}>
            <Box
          onClick={() => {
            setOpenReturnDate(!openReturnDate);
            setOpenDepartureDate(false);
            setOpenFrom(false);
            setOpenTo(false);

            setOpenPassenger(false);
          }}
              sx={{
                cursor: "pointer",
                bgcolor: "var(--grey-color)",
                borderRadius: "8px",
                px: 2,
                py: 1,
              }}
            >
              <Typography
                sx={{ fontSize: "14px", color: "var(--medium-gray-color)" }}
              >
                Return
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "var(--mate-color)",
                }}
              >
                {moment(returnDate).format("DD MMMM YY")}
              </Typography>
            </Box>
            {   openReturnDate && (
              <Box
                ref={ref}
                sx={{ position: "absolute", widht: "100%", zIndex: 1300 }}
              >
                <Calendar
                  onChange={handleReturnDate}
                  value={new Date(returnDate)}
                  minDate={new Date()}

                />
              </Box>
            )}
          </Grid>
          <Grid item xs={12} sm={12} lg={2.8} sx={{ position: "relative" }}>
            <Box
              onClick={() => {
                setOpenPassenger(!openPassenger);

                setOpenFrom(false);
                setOpenTo(false);
                setOpenDepartureDate(false);
              }}
              onMouseDown={() => {
                setClickInside(true);
                setTimeout(() => {
                  setClickInside(false);
                }, 100);
              }}
              sx={{
                cursor: "pointer",
                bgcolor: "var(--grey-color)",
                borderRadius: "8px",
                px: 2,
                py: 1,
              }}
            >
              <Typography
                sx={{ fontSize: "14px", color: "var(--medium-gray-color)" }}
              >
                Passengers{" "}
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "var(--mate-color)",
                }}
              >
                {totalPassengers} Travellers,{className}
              </Typography>
            </Box>
            {openPassenger && (
              <Box
                ref={ref}
                sx={{
                  bgcolor: "var(--white-color)",
                  boxShadow: 2,
                  position: "absolute",
                  width: "100%",
                  zIndex: 1300,
                  py: 2,
                }}
              >
                <Container
                  sx={{ display: "flex", flexDirection: "column", gap: "18px" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <Typography>Adult(12+ yrs)</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <button
                        onClick={handleDecreaseAdult}
                        style={{
                          cursor: "pointer",
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                          border: "none",
                        }}
                      >
                        -
                      </button>
                      <Typography>{adultCount}</Typography>
                      <button
                        onClick={handleIncreaseAdult}
                        style={{
                          cursor: "pointer",
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                          border: "none",
                        }}
                      >
                        +
                      </button>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <Typography>Child(2- less than 12 yrs)</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <button
                        onClick={handleDecreaseChild}
                        style={{
                          cursor: "pointer",
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                          border: "none",
                        }}
                      >
                        -
                      </button>
                      <Typography>{childCount}</Typography>
                      <button
                        onClick={handleIncreaseChild}
                        style={{
                          cursor: "pointer",
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                          border: "none",
                        }}
                      >
                        +
                      </button>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <Typography>Infant(0 - 23 month)</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <button
                        onClick={handleDecreaseInfant}
                        style={{
                          cursor: "pointer",
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                          border: "none",
                        }}
                      >
                        -
                      </button>
                      <Typography>{infantCount}</Typography>
                      <button
                        onClick={handleIncreaseInfant}
                        style={{
                          cursor: "pointer",
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                          border: "none",
                        }}
                      >
                        +
                      </button>
                    </Box>
                  </Box>

                  <Box sx={{ borderTop: "1px solid var(--primary-color)" }}>
                    <FormControl>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                      >
                        {flightClasses?.map((data, index) => (
                          <FormControlLabel
                            checked={className === data}
                            onChange={(e) => handleSelectFlightClass(e, data)}
                            value={data}
                            control={<Radio size="small" />}
                            label={
                              <Typography sx={{ fontSize: "14px" }}>
                                {data}
                              </Typography>
                            }
                          />
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </Box>

                  <Box>
                    <Button
                      variant="contained"
                      sx={{ width: "100%", boxShadow: "none" }}
                    >
                      Done
                    </Button>
                  </Box>
                </Container>
              </Box>
            )}
          </Grid>
        </Grid>

        <Box sx={{ my: 1.8 }}>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "500",
              color: "var(--secondary-color)",
              mb: 1,
            }}
          >
            Serach History
          </Typography>

          {/* <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {[2, 3, 4, 5].map((item) => (
            <Box
              sx={{
                flexDirection: "column",
                display: "flex",
                justifyContent: "start",
                background: "var(--white)",
                boxShadow: 2,
                px: 1,
                py: 1,
                borderRadius: "5px",
              }}
            >
              <Typography sx={{ fontSize: "13px" }}>DAC to DXB</Typography>
              <Typography sx={{ fontSize: "12px" }}>
                28 May 2024,Economy
              </Typography>
            </Box>
          ))}
        </Box> */}
        </Box>

        <Box
          sx={{
            textAlign: "center",
            position: "absolute",
            left: "0%",
            right: "0%",
            transform: "translateX(-50%-50%)",
          }}
        >
          <FlightSearchButton handleSubmit={handleSubmit} />
        </Box>
      </Box>
    </form>
  );
};

export default Roundway;

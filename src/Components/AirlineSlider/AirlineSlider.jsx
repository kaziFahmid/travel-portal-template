import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";

const AirlinesSlider = ({
  searchResult,
  selectedAirLines,
  setSelectedAirLines,
}) => {
  //   console.log(searchResult);

  const careerCounts = searchResult?.reduce((counts, flight) => {
    counts[flight?.career
    ] = (counts[flight?.career
    ] || 0) + 1;
    return counts;
  }, {});

  console.log(searchResult)
  // Step 2: Generate an array of objects with career, careerName, and flightNumber
  const results = Object.entries(careerCounts).map(
    ([   career, flightNumber]) => {
      const flight = searchResult.find((item) => item?.career
      === career
      );
      return {
        career
        ,
        careerName: flight?.careerName,
        flightNumber,
      };
    }
  );

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        style={{
          backgroundColor: "#F5F7FA",
          width: "25px",
          position: "absolute",
          height: "100%",
          right: "0",
          top: "0",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          borderRadius: "0 7px 7px 0",
        }}
      >
        <p
          style={{
            fontSize: "40px",
            margin: "0",
            color: "var(--primary-color)",
          }}
        >
          &#8250;
        </p>
      </div>
    );
  };
  const CustomPrevArrow = (props) => {
    const { onClick } = props;

    return (
      <div
        onClick={onClick}
        style={{
          backgroundColor: "#F5F7FA",
          width: "25px",
          position: "absolute",
          height: "100%",
          left: "0",
          top: "0",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          borderRadius: "7px 0 0 7px",
        }}
      >
        <p
          style={{
            fontSize: "40px",
            margin: "0",
            color: "var(--primary-color)",
          }}
        >
          &#8249;
        </p>
      </div>
    );
  };

  const settings = {
    infinite: true,
    speed: 1200,
    slidesToShow:
      results.length >= 8
        ? 7
        : results.length > 5 && results.length < 8
        ? 6
        : results.length,
    //   results.length > 4 ? 5 : results.length > 5 ? 6 : results.length,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    centerPadding: "60px",
    dots: false,
  };

  //   console.log(selectedAirLines);
  return (
    <Slider {...settings}>
      {results.map((res, i) => {
        return (
          <Box
            key={i}
            onClick={() => {
              if (selectedAirLines.includes(res.career)) {
                setSelectedAirLines(
                  selectedAirLines.filter((item) => item !== res.career)
                );
              } else {
                setSelectedAirLines([...selectedAirLines, res.career]);
              }
            }}
            sx={{
              height: "48px",
              height: {
                xs: "100px",
                sm: "100px",
                md: "48px",
                lg: "48px",
              },
            }}
          >
            {/* <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              spacing={1}
              sx={{
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "90%",
                  lg: "90%",
                },
                px: "5px",
                display: {
                  xs: "flex",
                  sm: "flex",
                  md: "none",
                  lg: "none",
                },
                margin: "0 auto",
                bgcolor: selectedAirLines.includes(res.carrier)
                  ? "var(--secondary-color)"
                  : "",
                cursor: "pointer",
                ":hover": {
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                  bgcolor: "rgba(99, 99, 99, 0.2)",
                },
                borderRadius: "5px",
                transition: "all .2s ease-in-out",
                height: "100%",
              }}
            >
              <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
                <img
                  style={{ width: "30px" }}
src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${res.carrier}.png`}
                  alt={`${res.carrierName} Airlines logo`}
                />
              </Box>
              <Box
                sx={{
                  ".MuiTypography-body1": {
                    fontSize: "13px",
                    color: "var(--dark-grey)",
                  },
                  ".MuiTypography-body2": {
                    fontSize: "5px",

                    color: "var(--primary-color)",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "4px",
                      sm: "5px",
                    },
                  }}
                >
                  <span
                    style={{
                      color: "var(--primary-color)",
                      paddingRight: "5px",
                    }}
                  >
                    {res.carrier}
                  </span>
                  {res.flightNumber} Flight
                </Typography>
              </Box>
            </Stack> */}

            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={1}
              sx={{
                width: "100%",
                display: {
                  xs: "none",
                  sm: "none",
                  md: "flex",
                  lg: "flex",
                },

                cursor: "pointer",
                ":hover": {
                  ".airlines-content": {
                    color: selectedAirLines.includes(res.   career)
                      ? "white"
                      : "var(--primary-color)",
                  },

                  ".airlines-dots": {
                    backgroundColor: selectedAirLines.includes(res.   career)
                      ? "white"
                      : "var(--primary-color)",
                  },
                },
                bgcolor: selectedAirLines.includes(res.   career)
                  ? "var(--primary-color)"
                  : i % 2 == 0
                  ? "white"
                  : "var(--third-color)",
                transition: "all .2s ease-in-out",
                height: "100%",
              }}
            >
              <Box>
                <img
                  style={{ width: "30px" }}
                  src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${res. career}.png`}
                  alt=""
                />
              </Box>
              <Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <Typography
                    className="airlines-content"
                    sx={{
                      color: selectedAirLines.includes(res.   career)
                        ? "white"
                        : "var(--text-dark)",
                      fontSize: "12px",
                  
                    }}
                  >
                    {res.   career}
                  </Typography>
                  <Box
                    className="airlines-dots"
                    sx={{
                      height: "3px",
                      width: "3px",
                      borderRadius: "50%",
                      backgroundColor: selectedAirLines.includes(res.   career)
                        ? "white"
                        : "var(--text-medium)",
                    }}
                  ></Box>
                  <Typography
                    className="airlines-content"
                    sx={{
                      fontSize: {
                        xs: "5px",
                        sm: "8px",
                        md: "12px",
                        lg: "12px",
                      },

                      color: selectedAirLines.includes(res.   career)
                        ? "white"
                        : "var(--text-medium)",
                    }}
                  >
                    {res.flightNumber}
                  </Typography>
                </Box>

                <Typography
                  className="airlines-content"
                  sx={{
                    fontSize: {
                      xs: "8px",
                      sm: "10px",
                      md: "12px",
                      lg: "12px",
                    },

                    color: selectedAirLines.includes(res.   career)
                      ? "white"
                      : "var(--text-medium)",
                  }}
                >
                  BDT 213,865
                </Typography>
              </Box>
            </Stack>
          </Box>
        );
      })}
    </Slider>
  );
};

export default AirlinesSlider;

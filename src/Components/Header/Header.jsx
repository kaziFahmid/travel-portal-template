import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const appBar = document.getElementById("app-bar");

      if (scrollPosition > 0) {
        appBar.style.backgroundColor = "var(--white-color)"; // Change to your desired color
      } else {
        appBar.style.backgroundColor = "transparent";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header id="app-bar" style={{ padding: "16px 0px" }}>
        <Container maxWidth="xl">
          <nav>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <Typography
                  sx={{ fontWeight: "600", color: "var(--white-color)" }}
                >
                  Logo
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <Link to={"/login"}>
                  {" "}
                  <Button
                    variant="contained"
                    sx={{
                      boxShadow: "none",
                      px: 5,
                      color: "var(--white-color)",
                      background: "var(--secondary-color)",
                    }}
                  >
                    Login
                  </Button>
                </Link>
                <Link to={"/signup"}>
                  {" "}
                  <Button
                    variant="contained"
                    sx={{
                      boxShadow: "none",
                      px: 5,
                      color: "var(--white-color)",
                      background: "var(--black-color)",
                    }}
                  >
                    Signup
                  </Button>
                </Link>
              </Box>
            </Box>
          </nav>
        </Container>
      </header>
    </>
  );
};

export default Header;

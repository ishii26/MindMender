import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import heroImg from "../media/mmherologo.png";
import CustomButton from "./CustomButton";

const Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(0),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#233326",
    fontWeight: "bold",
    margin: theme.spacing(2, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <Box sx={{ backgroundColor: "#f6faf2", minHeight: "100vh" }}>
      <Container>
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#4a5733",
                fontWeight: "500",
                mt: 4,
                mb: 2,
              }}
            >
              Welcome to Mind Mender
            </Typography>
            <Title variant="h1">
              YOUR <br />
              MENTAL HEALTH MATTERS
            </Title>
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#4a5733", my: 4 }}
            >
              <br />
              Discover a wealth of articles, therapeutic exercises and a network
              of individuals who understand and care about your mental health
              journey, from the comfort of your home!
            </Typography>
            <CustomButton
              backgroundColor="#233326"
              color="#fff"
              buttonText="More About Us"
              heroBtn={true}
            />
          </Box>

          <Box sx={{ flex: "1.00" }}>
            <img src={heroImg} alt="heroImg" style={{ maxWidth: "120%" }} />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Hero;

import { Box, styled, Typography } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import CustomButton from "./CustomButton";
import Footer from "./Footer";
import Gradient from "../media/au_grd1.png";
import Gradient2 from "../media/au_grd2.png";

export const Landingau = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    gap: theme.spacing(10),
    backgroundColor: "#e3d7eb",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
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
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          position: "absolute",
          bottom: 523,
          flex: "1.00",
        }}
      >
        <img src={Gradient2} alt="ombre" width="100%" />
      </Box>
      <Box sx={{ backgroundColor: "#e3d7eb", textAlign: "center" }}>
        <br />
        <br />
        <Typography
          variant="body"
          sx={{
            fontWeight: "bold",
            fontSize: "45px",
            color: "#342044",
            fontFamily: "Monospace Monaco",
          }}
        >
          <p>About Us</p>
          <br />
        </Typography>
        <CustomBox>
          <Box
            sx={{
              minHeight: "55vh",
              color: "black",
              fontSize: "h1",
              fontWeight: "bold",
              border: "5px solid",
              borderColor: "#4d3061",
              borderRadius: "50%",
              width: "55vh",
              padding: "3rem",
              textAlign: "center",
              backgroundColor: "#f3eef6",
              "&:hover": {
                boxShadow: " 0 0 50px 15px #ffffff",
              },
            }}
          >
            <Typography
              variant="body"
              sx={{
                fontWeight: "bold",
                fontSize: "24px",
                color: "#342044",
              }}
            >
              <p>Our Mission</p>
              <br />
              <br />
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "500",
                fontSize: "16px",
                color: "#342044",
                opcaity: "0.7",
              }}
            >
              <p>
                Making professional therapy accessible, affordable, and
                convenient — so anyone who struggles with life's challenges can
                get help, anytime and anywhere.
              </p>
            </Typography>
          </Box>
          <Box
            sx={{
              minHeight: "55vh",
              color: "black",
              fontSize: "h1",
              fontWeight: "bold",
              border: "5px solid",
              borderColor: "#4d3061",
              borderRadius: "50%",
              width: "55vh",
              padding: "3rem",
              textAlign: "center",
              backgroundColor: "#f3eef6",
              "&:hover": {
                boxShadow: " 0 0 50px 15px #ffffff",
              },
            }}
          >
            <Typography
              variant="body"
              sx={{
                fontWeight: "bold",
                fontSize: "24px",
                color: "#342044",
              }}
            >
              <p>Our Therapists</p>
              <br />
              <br />
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "500",
                fontSize: "16px",
                color: "#342044",
                opcaity: "0.7",
              }}
            >
              <p>
                Mind Mender offers access to registered, trained, and
                experienced Practitioner Psychologists, Counsellors, and similar
                applicable recognized professional certifications.
              </p>
            </Typography>
          </Box>
          <Box
            sx={{
              minHeight: "55vh",
              color: "black",
              fontSize: "h1",
              fontWeight: "bold",
              border: "5px solid",
              borderColor: "#4d3061",
              borderRadius: "50%",
              width: "55vh",
              padding: "3rem",
              textAlign: "center",
              backgroundColor: "#f3eef6",
              "&:hover": {
                boxShadow: " 0 0 50px 15px #ffffff",
              },
            }}
          >
            <Typography
              variant="body"
              sx={{
                fontWeight: "bold",
                fontSize: "24px",
                color: "#342044",
              }}
            >
              <p>Our Media Coverage</p>
              <br />
              <br />
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "500",
                fontSize: "16px",
                color: "#342044",
                opcaity: "0.7",
              }}
            >
              <p>
                Mind Mender provides resources for therapists who are all over
                the country. Also, it's important to see what kind of therapy
                works best for you.
              </p>
            </Typography>
            <Typography
              variant="body"
              sx={{
                fontWeight: "bold",
                fontSize: "18px",
                color: "#342044",
              }}
            >
              <p>~ HUFFPOST</p>
            </Typography>
          </Box>
          <Box
            sx={{
              minHeight: "55vh",
              color: "black",
              fontSize: "h1",
              fontWeight: "bold",
              border: "5px solid",
              borderColor: "#4d3061",
              borderRadius: "50%",
              width: "55vh",
              padding: "3rem",
              textAlign: "center",
              backgroundColor: "#f3eef6",
              "&:hover": {
                boxShadow: " 0 0 50px 15px #ffffff",
              },
            }}
          >
            <Typography
              variant="body"
              sx={{
                fontWeight: "bold",
                fontSize: "24px",
                color: "#342044",
              }}
            >
              <p>Our Team</p>
              <br />
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "500",
                fontSize: "16px",
                color: "#342044",
                opcaity: "0.7",
              }}
            >
              <p>
                We are passionate and compassionate professionals, driven by the
                mission of helping more people live a better and happier life
                every day. We are always looking for new talent. If you love
                people and like challenges - come and join us!
              </p>
            </Typography>
          </Box>
          <Box
            sx={{
              minHeight: "55vh",
              color: "black",
              fontSize: "h1",
              fontWeight: "bold",
              border: "5px solid",
              borderColor: "#4d3061",
              borderRadius: "50%",
              width: "55vh",
              padding: "3rem",
              textAlign: "center",
              backgroundColor: "#f3eef6",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              "&:hover": {
                boxShadow: " 0 0 50px 15px #ffffff",
              },
            }}
          >
            <Typography
              variant="body"
              sx={{
                fontWeight: "bold",
                fontSize: "24px",
                color: "#342044",
              }}
            >
              <p>Our Support</p>
              <br />
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "500",
                fontSize: "16px",
                color: "#342044",
                opcaity: "0.7",
              }}
            >
              <p>
                Our support team is always here to answer any question and
                resolve any problem. Just contact us!
              </p>
            </Typography>
            <br />
            <CustomButton
              backgroundColor="#342044"
              color="#fff"
              buttonText="Contact Us"
            />
          </Box>
        </CustomBox>
        <br />
        <br />
        <Box
          sx={{
            display: "flex",
            position: "absolute",
            bottom: -646,
            flex: "1.00",
          }}
        >
          <img src={Gradient} alt="ombre" width="100%" />
        </Box>
        <br />
      </Box>
      <Footer />
    </>
  );
};

export default Landingau;

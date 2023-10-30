import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

import fbIcon from "../media/fbicon.png";
import twitterIcon from "../media/twittericon.png";
import linkedinIcon from "../media/linkedinicon.png";

const Footer = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));

  const FooterLink = styled("span")(({ theme }) => ({
    fontSize: "16px",
    color: "#7A7A7E",
    fontWeight: "300",
    cursor: "pointer",
    "&:hover": {
      color: "#000",
    },
  }));

  const Divider = styled("div")(({ theme }) => ({
    width: "100%",
    height: "0.7px",
    backgroundColor: "#e7f2dc",
    [theme.breakpoints.down("md")]: {
      marginLeft: "auto",
      marginRight: "auto",
    },
  }));

  return (
    <Box sx={{ backgroundColor: "#e7f2dc" }}>
      <Divider />
      <br />
      <br />
      <br />
      <CustomContainer>
        <CustomContainer>
          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#4a5733",
                fontWeight: "700",
                mb: 2,
              }}
            >
              We help with
            </Typography>

            <FooterLink>Realtionship Counselling</FooterLink>
            <br />
            <FooterLink>Stress Anxiety Depression</FooterLink>
            <br />
            <FooterLink>Confidence</FooterLink>
            <br />
            <FooterLink>PTSD</FooterLink>
            <br />
            <FooterLink>LGBTQ+</FooterLink>
            <br />
            <FooterLink>Women Centric Challenges</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#4a5733",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Self Help
            </Typography>

            <FooterLink>Articles</FooterLink>
            <br />
            <FooterLink>Self-Help Program</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#4a5733",
                fontWeight: "700",
                mb: 2,
              }}
            >
              For Business
            </Typography>

            <FooterLink>Partnerships</FooterLink>
            <br />
            <FooterLink>Institutions</FooterLink>
            <br />
            <FooterLink>Privacy</FooterLink>
            <br />
            <FooterLink>Terms and Conditions</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#4a5733",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Get in touch
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                color: "#7A7A7E",
                fontWeight: "500",
                mb: 2,
              }}
            >
              Talk to a therapist today
            </Typography>

            <IconBox>
              <img src={fbIcon} alt="fbIcon" style={{ cursor: "pointer" }} />
              <img
                src={twitterIcon}
                alt="twitterIcon"
                style={{ cursor: "pointer" }}
              />
              <img
                src={linkedinIcon}
                alt="linkedinIcon"
                style={{ cursor: "pointer" }}
              />
            </IconBox>
          </Box>
        </CustomContainer>
      </CustomContainer>
      <br />
      <br />
      <br />
    </Box>
  );
};

export default Footer;

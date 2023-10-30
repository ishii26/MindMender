import { Box, Button, styled, Typography, Divider } from "@mui/material";
import React from "react";
import Gradient from "../media/angryimg.png";
import CustomButton from "./CustomButton";

const Guide = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "25%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  }));

  const GuidesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    width: "80%",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0",
      flexDirection: "column",
    },
  }));

  const GuideBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    width: "30%",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(0, 0, 2, 2),
    },
  }));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f6faf2",
      }}
    >
      <Typography
        variant="h3"
        sx={{ fontSize: "35px", fontWeight: "bold", color: "#233326", my: 3 }}
      >
        <Divider sx={{ borderBottomWidth: 5, bgcolor: "#4a5733" }} />
        <br />
        <br />
        Types of Therapy at Mind Mender
      </Typography>

      <CustomBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#4a5733",
            textAlign: "center",
          }}
        >
          Everything you need to help yourself all in one place
        </Typography>
      </CustomBox>

      <GuidesBox sx={{ flex: "1.00" }}>
        <GuideBox>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              border: "5px solid",
              borderColor: "#4a5733",
              borderRadius: "15px",
              padding: "2rem",
              minHeight: "50vh",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
                color: "#233326",
              }}
            >
              <p>Psychotherapy</p>
              <br />
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", fontSize: "14px", color: "#4a5733" }}
            >
              <p>
                Transference focused psychotherapy often aims to help clients
                understand how they externalize or transfer their emotions and
                behaviors in a therapeutic setting.
              </p>
              <br />
              <br />
            </Typography>
            <CustomButton
              backgroundColor="#233326"
              color="#fff"
              fontSize="18px"
              buttonText="Read More"
              guideBtn={true}
            />
          </Box>
        </GuideBox>

        <GuideBox>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              border: "5px solid",
              borderColor: "#4a5733",
              borderRadius: "15px",
              padding: "2rem",
              minHeight: "50vh",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
                color: "#233326",
              }}
            >
              <p>Cognitive Behavioral Therapy</p>
              <br />
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", fontSize: "14px", color: "#4a5733" }}
            >
              <p>
                Cognitive-behavioral therapy is a form of psychological
                treatment that can be effective for a wide range of mental
                health conditions and disorders.
              </p>
              <br />
              <br />
            </Typography>
            <CustomButton
              backgroundColor="#233326"
              color="#fff"
              fontSize="18px"
              buttonText="Read More"
              guideBtn={true}
            />
          </Box>
        </GuideBox>

        <GuideBox>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              border: "5px solid",
              borderColor: "#4a5733",
              borderRadius: "15px",
              padding: "2rem",
              minHeight: "50vh",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
                color: "#233326",
              }}
            >
              <p>Psychotherapy</p>
              <br />
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", fontSize: "14px", color: "#4a5733" }}
            >
              <p>
                Transference focused psychotherapy often
                <br />
                aims to help clients understand how they
                <br />
                externalize or transfer their emotions and
                <br />
                behaviors in a therapeutic setting.
              </p>
              <br />
              <br />
            </Typography>
            <CustomButton
              backgroundColor="#233326"
              color="#fff"
              fontSize="18px"
              buttonText="Read More"
              guideBtn={true}
            />
          </Box>
        </GuideBox>
      </GuidesBox>
      <CustomButton
        backgroundColor="#233326"
        color="#fff"
        fontSize="100px"
        buttonText="Other techniques.."
        guideBtn={true}
      />
      <Box
        sx={{
          display: "flex",
          position: "absolute",
          bottom: -990,
          flex: "1.00",
        }}
      >
        <img src={Gradient} alt="ombre" width="100%" />
      </Box>
    </Box>
  );
};

export default Guide;

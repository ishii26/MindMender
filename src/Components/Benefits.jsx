import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import Gradient from "../media/angryimg_rev.png";

const Benefits = () => {
  const BenefitsBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(5),
    alignContent: "space-around",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      margin: theme.spacing(0, 4, 2, 2),
    },
  }));

  const BenefitsTextBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  }));

  return (
    <Box sx={{ mt: 5, backgroundColor: "#fee1dd", py: 10 }}>
      <Container>
        <BenefitsTextBox>
          <Typography
            sx={{ color: "#342044", fontSize: "40px", fontWeight: "bold" }}
          >
            Benefits of Online Therapy
          </Typography>
          <Typography
            sx={{ color: "#342044", fontSize: "30px", mt: 1, opacity: 0.5 }}
          >
            What should you know?
          </Typography>
        </BenefitsTextBox>
        <BenefitsBox>
          <br />
          <br />
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              border: "0px solid",
              borderColor: "#342044",
              borderRadius: "15px",
              padding: "6rem",
              minHeight: "45vh",
              // boxShadow: "10px 10px 8px #888888",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
                color: "#342044",
              }}
            >
              <p>Accessible And Affordable</p>
              <br />
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "bold",
                fontSize: "18px",
                color: "#342044",
                opacity: 0.7,
              }}
            >
              <p>
                One of the biggest differences between online therapy and
                traditional in-person therapy is that you can communicate with
                your therapist almost anytime, from anywhere that has a stable
                internet connection. You'll have weekly, biweekly, or monthly
                sessions (whichever works best for you). In addition, you can
                message our Chatbot therapist at anytime throughout the day!
              </p>
            </Typography>
          </Box>
          <br />
          <br />
          <br />
          <br />
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              border: "0px solid",
              borderColor: "#342044",
              borderRadius: "15px",
              padding: "6rem",
              minHeight: "45vh",
              // boxShadow: "10px 10px 8px #888888",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
                color: "#342044",
              }}
            >
              <p>No Location Or Insurance Issues</p>
              <br />
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "bold",
                fontSize: "18px",
                color: "#342044",
                opacity: 0.7,
              }}
            >
              <p>
                While many cities and big metropolitan areas generally have a
                large number of therapists available, these locations only make
                up a portion of the country. Rural and suburban areas generally
                have fewer therapists, meaning appointments can fill up quickly
                and there might not be many therapists to choose from. Mind
                Mender seeks to fill that gap by offering therapy anywhere there
                is an internet connection.
              </p>
            </Typography>
          </Box>
          <br />
          <br />
          <br />
          <br />
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              border: "0px solid",
              borderColor: "#342044",
              borderRadius: "15px",
              padding: "6rem",
              minHeight: "45vh",
              // boxShadow: "10px 10px 8px #888888",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
                color: "#342044",
              }}
            >
              <p>Comfort</p>
              <br />
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "bold",
                fontSize: "18px",
                color: "#342044",
                opacity: 0.7,
              }}
            >
              <p>
                Some people have trouble speaking to a new therapist face to
                face in a private office or practice. Online therapy allows
                those who aren't comfortable interacting with a therapist in
                person to have an alternative form of communication that could
                help them open up. Whether through messaging, live chat
                sessions, video calls, or other forms of communication, building
                a relationship with your therapist remotely can be effective and
                comfortable.
              </p>
            </Typography>
          </Box>
          <br />
          <br />
          <br />
          <br />
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              border: "0px solid",
              borderColor: "#342044",
              borderRadius: "15px",
              padding: "6rem",
              minHeight: "45vh",
              // boxShadow: "10px 10px 8px #888888",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
                color: "#342044",
              }}
            >
              <p>Privacy</p>
              <br />
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "bold",
                fontSize: "18px",
                color: "#342044",
                opacity: 0.7,
              }}
            >
              <p>
                Privacy is an important concern for many when it comes to mental
                health care. With online therapy, there is no risk of bumping
                into someone you know, having someone see you pull up to the
                therapist's office, or discussing your treatment with anyone but
                your therapist. This is another benefit of not having to leave
                the house for psychotherapy sessions.
              </p>
            </Typography>
          </Box>
          <br />
          <br />
          <br />
          <br />
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              border: "0px solid",
              borderColor: "#342044",
              borderRadius: "15px",
              padding: "6rem",
              minHeight: "45vh",
              // boxShadow: "10px 10px 8px #888888",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
                color: "#342044",
              }}
            >
              <p>Easy And Flexible Scheduling</p>
              <br />
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "bold",
                fontSize: "18px",
                color: "#342044",
                opacity: 0.7,
              }}
            >
              <p>
                It can be difficult for traditional therapy to fit into your
                schedule if you have a busy lifestyle. Working with a therapist
                online means you can message them any time you need, and they
                will respond as soon as they're able to, offering you counseling
                and support outside of sessions. You can also see their session
                availability on a calendar in advance.
              </p>
            </Typography>
          </Box>
        </BenefitsBox>
      </Container>
      <Box
        sx={{
          display: "flex",
          position: "absolute",
          bottom: -3470,
          flex: "1.00",
        }}
      >
      </Box>
    </Box>
  );
};

export default Benefits;

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import logoImg from "../media/mm-logo.png";
import { Container } from "@mui/system";
import CustomButton from "./CustomButton";
import { Button, styled } from "@mui/material";
import Chatbot from "../Chatbot";
// import Landingau from "./Landingau";
// import Homepage from "./Homepage";
import { Link } from "react-router-dom";
//import App from "../App";
import Signupmodal from "./Signupmodal";
// import { style, Modal } from "@mui/material";
// import Fade from "@mui/material/Fade";
// import Backdrop from "@mui/material/Backdrop";

export const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  //const handleOpen = () => setOpen(true);
  //const handleClose = () => setOpen(false);

  const NavLink = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    color: "#4a5733",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      color: "black",
    },
  }));

  const NavbarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const NavbarContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    bgcolor: "#f6faf2",
    padding: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
    },
  }));

  const NavbarLogo = styled("img")(({ theme }) => ({
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    //<Router>
    <Box sx={{ bgcolor: "#f6faf2" }}>
      <NavbarContainer>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "2.5rem",
          }}
        >
          <Box
            sx={{ display: "flex", alignItems: "center", bgcolor: "#f6faf2" }}
          >
            <NavbarLogo
              src={logoImg}
              alt="logo"
              style={{
                maxWidth: "100%",
              }}
            />
          </Box>

          <NavbarLinksBox>
            <Link
              to="/Homepage"
              className="nav-link"
              style={{
                fontSize: "18px",
                color: "#4a5733",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Home
            </Link>
            <Link
              to="/Landingau"
              className="nav-link"
              style={{
                fontSize: "18px",
                color: "#4a5733",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              About Us
            </Link>
            <Link
              style={{
                fontSize: "18px",
                color: "#4a5733",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Contact
            </Link>
            <Link
              style={{
                fontSize: "18px",
                color: "#4a5733",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              My Diary
            </Link>
            <Link
              to="/Chatbot"
              className="nav-link"
              style={{
                fontSize: "18px",
                color: "#4a5733",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Chatbot
            </Link>
          </NavbarLinksBox>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            bgcolor: "#f6faf2",
          }}
        >
          {/* <CustomButton
          backgroundColor="#233326"
          color="#fff"
          className="signup"
          buttonText="Sign Up"
          onClick={() => <Signupmodal />}
        /> */}
          <div>
            {/* <CustomButton
            backgroundColor="#233326"
            color="#fff"
            className="signup"
            buttonText="Sign Up"
            onClick={() => setOpen(true)}
          >
            Open modal
          </CustomButton> */}
            <Signupmodal />
          </div>
          <CustomButton
            backgroundColor="#233326"
            color="#fff"
            buttonText="Take a Test"
          />
        </Box>
      </NavbarContainer>
    </Box>
    //</Router>
  );
};

export default Navbar;

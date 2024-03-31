import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { styled, Typography, Divider } from "@mui/material";
import fbIcon2 from "../media/fbIcon2.png";
import googleIcon from "../media/googleIcon.png";
import "../styles.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 600,
  bgcolor: "#f9f7fb",
  opacity: 0.1,
  border: "5px solid #342044",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

const IconBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
}));

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        sx={{
          backgroundColor: "#535878",
          color: "#fff",
          fontWeight: "700",
          fontSize: "14px",
          cursor: "pointer",
          padding: "0.5rem 1.25rem",
          borderRadius: "7px",
          textTransform: "none",
          display: "block",
          onclick: "{onClick}",
          border: "2px solid transparent",
          "&:hover": {
            backgroundColor: "#fff",
            color: "#233326",
            borderColor: "#233326",
          },
        }}
        onClick={handleOpen}
      >
        Sign Up
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {/* <modalBox> */}
            <Typography
              variant="body"
              sx={{
                fontWeight: "bold",
                fontSize: "30px",
                color: "#342044",
                textAlign: "center",
              }}
            >
              <p>Sign Up</p>
              <br />
            </Typography>
            <form method="POST" class="register-form" id="register-form">
              <div
                class="form-group"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "row",
                }}
              >
                <label for="name">
                  <i class="zmdi zmdi-account material-icons-name"></i>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                />
              </div>
              <br />

              <div
                class="form-group"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "row",
                }}
              >
                <label for="email">
                  <i class="zmdi zmdi-email"></i>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                />
              </div>
              <br />
              <div
                class="form-group"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "row",
                }}
              >
                <label for="pass">
                  <i class="zmdi zmdi-lock"></i>
                </label>
                <input
                  type="password"
                  name="pass"
                  id="pass"
                  placeholder="Password"
                />
              </div>
              {/* <div
                  class="form-group"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "row",
                  }}
                >
                  <input
                    type="checkbox"
                    name="agree-term"
                    id="agree-term"
                    class="agree-term"
                  />
                  <label for="agree-term" class="label-agree-term">
                    <span>
                      <span></span>
                    </span>
                    I agree all statements in{" "}
                    <a href="#" class="term-service">
                      Terms of service
                    </a>
                  </label>
                </div> */}
              <br />
              <div
                class="form-group form-button"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "row",
                  color: "red",
                  fontSize: "30px",
                  mt: 1,
                  bgcolor: "#233326",
                }}
              >
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  class="form-submit"
                  value="Register"
                />
              </div>
            </form>
            {/* </div>
                  </div>
                </div>
              </section> */}
            {/* </div> */}
            <Divider role="presentation" sx={{ borderBottomWidth: 5 }}>
              Or
            </Divider>
            <br />
            <Typography
              variant="h6"
              sx={{
                fontWeight: "500",
                fontSize: "14px",
                color: "#233326",
              }}
            >
              <p></p>
            </Typography>
            <IconBox
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <img src={fbIcon2} alt="fbIcon2" style={{ cursor: "pointer" }} />
              <img src={googleIcon} alt="gIcon" style={{ cursor: "pointer" }} />
            </IconBox>
            {/* </modalBox> */}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

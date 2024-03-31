import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Link } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import heroImg from "../media/mmherologo.png";
import CustomButton from "./CustomButton";

const MyDiary = () => {
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
    color: "#313448",
    fontWeight: "bold",
    margin: theme.spacing(2, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  const [newEntryContent, setNewEntryContent] = useState(""); // State for new entry content
  const [entries, setEntries] = useState([]); // State for diary entries
  const textareaRef = useRef(null); // Ref for the textarea element

  // Function to handle adding a new entry
  const addEntry = () => {
    if (newEntryContent.trim() !== "") {
      const newEntry = {
        id: Date.now(), // Unique ID for the entry
        content: newEntryContent.trim(), // Content of the entry
        lastEdited: new Date().toLocaleString(), // Last edited timestamp
      };
      setEntries([...entries, newEntry]); // Add new entry to the list
      setNewEntryContent(""); // Clear textarea content after adding
    }
  };

  useEffect(() => {
    // Focus the textarea after each render
    textareaRef.current.focus();
  });

  return (
    <Box sx={{ backgroundColor: "#fee1dd", minHeight: "80vh" }}>
      <Container>
        <br/>
        <br/>
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#313448",
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
              sx={{ fontSize: "18px", color: "#313448", my: 4 }}
            >
              <br />
              Discover a wealth of articles, therapeutic exercises and a network
              of individuals who understand and care about your mental health
              journey, from the comfort of your home!
            </Typography>
            <textarea
              ref={textareaRef} // Assign the ref to the textarea
              value={newEntryContent}
              onChange={(e) => setNewEntryContent(e.target.value)}
              placeholder="Write your entry here..."
              style={{
                width: "100%",
                minHeight: "150px",
                borderRadius: "7px",
                padding: "8px",
                fontSize: "16px",
                marginBottom: "16px",
              }}
            />
            <Button
              variant="contained"
              onClick={addEntry}
              sx={{ mr: 2 }}
            >
              Add Entry
            </Button>
          </Box>

          <Box sx={{ flex: "1.00" }}>
            <img src={heroImg} alt="heroImg" style={{ maxWidth: "120%" }} />
          </Box>
        </CustomBox>

        {/* Display list of diary entries */}
        <ul>
          {entries.map(entry => (
            <li key={entry.id}>
              <div>{entry.content}</div>
              <div>Last Edited: {entry.lastEdited}</div>
            </li>
          ))}
        </ul>

        <Link to="/Landingau" style={{ textDecoration: 'none' }}>
          <Button
            sx={{
              backgroundColor: '#535878',
              color: '#fff',
              fontWeight: '700',
              fontSize: '14px',
              cursor: 'pointer',
              padding: '0.5rem 1.25rem',
              borderRadius: '7px',
              textTransform: 'none',
              display: 'block',
              border: '2px solid transparent',
              mt: 2,
              '&:hover': {
                backgroundColor: '#fff',
                color: '#233326',
                borderColor: '#233326',
              },
            }}
          >
            More About Us
          </Button>
        </Link>
      </Container>
    </Box>
  );
};

export default MyDiary;

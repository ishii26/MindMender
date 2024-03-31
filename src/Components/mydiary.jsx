import React, { useState } from 'react';
import { Box, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Footer from "./Footer";
import Navbar from "./Navbar";
import Button from "@mui/material/Button";

const MyDiary = () => {
  // Initialize diary entries as an empty array
  const [entries, setEntries] = useState([]);
  // Initialize state for new entry content
  const [newEntryContent, setNewEntryContent] = useState('');

  // Function to add a new entry
  const addEntry = () => {
    // Create a new entry object with content and last edited date
    const newEntry = {
      id: uuidv4(), // Generate unique ID for the entry
      content: newEntryContent,
      lastEdited: new Date().toLocaleString() // Set last edited date
    };
    // Update the entries state by adding the new entry
    setEntries([...entries, newEntry]);
    // Clear the new entry content input
    setNewEntryContent('');
  };

  // Function to delete an entry by ID
  const deleteEntry = (id) => {
    // Filter out the entry with the specified ID
    const updatedEntries = entries.filter(entry => entry.id !== id);
    // Update the entries state with the filtered entries
    setEntries(updatedEntries);
  };

  // Function to handle changes in the new entry content input
  const handleNewEntryChange = (e) => {
    setNewEntryContent(e.target.value);
  };
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
    fontSize: "50px",
    color: "#535878",
    fontWeight: "bold",
    margin: theme.spacing(2, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
  }));

  return (
    <>
    <Navbar/>
    <Box sx={{ backgroundColor: "#fee1dd", minHeight: "80vh" }}>
    <div>
    <Title variant="h1" sx={{ marginLeft:"8vh",}}>
      My Diary
      </Title>
      <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#313448", my: 4, marginLeft:"8vh" }}
            >
              Welcome to your personal diary space, where you can reflect, <br/>
              jot down thoughts, and cherish moments of your mental health journey.
            </Typography>
      {/* Input for new entry content */}
      <Box sx={{display: "flex"}}>
      <textarea
  value={newEntryContent}
  onChange={handleNewEntryChange}
  placeholder="Write your new entry here..."
  style={{
    minHeight: "35vh", 
    maxHeight:"35vh",
    minWidth:"80vh",
    marginLeft:"8vh",
    padding: "8px",
    fontSize: "16px",
    borderRadius: "7px"
  }}
/>

      {/* Button to add a new entry */}
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
          maxHeight:"6vh",
          marginLeft:"2vh",
          marginTop:"12vh",
          "&:hover": {
            backgroundColor: "#fff",
            color: "#233326",
            borderColor: "#233326",
          },
        }}
        onClick={addEntry}
      >
      Add Entry
      </Button>
      </Box>
      <Box sx={{marginLeft:"8vh",marginTop:"8vh"}}>
      <Typography
              variant="body2"
              sx={{ fontSize: "16px", color: "#313448", my: 4, marginLeft:"8vh" }}
            >
      {/* List of diary entries */}
      <ul>
        {entries.map(entry => (
          <li key={entry.id}>
            {/* Display entry content */}
            <p>{entry.content}</p>
            {/* Display last edited date */}
            <p>Last Edited: {entry.lastEdited}</p>
            {/* Button to delete entry */}
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
        onClick={() => deleteEntry(entry.id)}
      >
       Delete
      </Button>
          </li>
        ))}
      </ul>
      </Typography>
      </Box>
    </div>
    </Box>
    <Footer/>
    </>
  );
};

export default MyDiary;

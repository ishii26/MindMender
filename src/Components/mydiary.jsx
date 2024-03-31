import React, { useState } from 'react';
import { Box, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Footer from "./Footer";
import Navbar from "./Navbar";

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
      <textarea
  value={newEntryContent}
  onChange={handleNewEntryChange}
  placeholder="Write your new entry here..."
  style={{
    minHeight: "35vh", 
    minWidth:"80vh",
    marginLeft:"8vh",
    padding: "8px",
    fontSize: "16px",
    borderRadius: "7px"
  }}
/>

      {/* Button to add a new entry */}
      <button onClick={addEntry}>Add Entry</button>
      {/* List of diary entries */}
      <ul>
        {entries.map(entry => (
          <li key={entry.id}>
            {/* Display entry content */}
            <p>{entry.content}</p>
            {/* Display last edited date */}
            <p>Last Edited: {entry.lastEdited}</p>
            {/* Button to delete entry */}
            <button onClick={() => deleteEntry(entry.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    </Box>
    <Footer/>
    </>
  );
};

export default MyDiary;

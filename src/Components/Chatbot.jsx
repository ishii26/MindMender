import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Box } from "@mui/material";

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [newAnswer, setNewAnswer] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (input) {
      const userMessage = { text: input, user: true };
      setMessages([...messages, userMessage]);
      setInput("");
      setNewAnswer("");

      // Send the user message to the backend
      fetch("http://localhost:5000/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input, new_answer: newAnswer }),
      })
        .then((response) => response.json())
        .then((data) => {
          const botMessage = { text: data.message, user: false };
          setMessages([...messages, userMessage, botMessage]);
        })
        .catch((error) => console.error("Error sending message:", error));
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage(e);
    }
  };

  // useEffect(() => {
  //   // Fetch chat history from the backend on component load
  //   fetch("http://localhost:5000/chat")
  //     .then((response) => response.json())
  //     .then((data) => setMessages(data.messages))
  //     .catch((error) => console.error("Error fetching chat history:", error));
  // }, []);

  return (
    <>
      <Box sx={{ bgcolor: "#f6faf2" }}>
        <Navbar />
        <Box
          sx={{
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          <Box
            className="chat-container"
            sx={{
              minHeight: "50vh",
              color: "black",
              fontSize: "20px",
              border: "2px solid",
              borderColor: "#4d3061",
              width: "80vh",
              padding: "3rem",
              textAlign: "center",
              backgroundColor: "#f3eef6",
              overflow: "auto",
              maxHeight: "50vh",
            }}
          >
            <div className="chat">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={message.user ? "user-message" : "bot-message"}
                >
                  {message.user ? "Me: " : "Bot: "}
                  {message.text}
                </div>
              ))}
            </div>
          </Box>
          <Box>
            <div className="input-container">
              <input
                className="input"
                style={{
                  width: "80vh",
                  minHeight: "10vh",
                  display: "block",
                  border: "none",
                  borderBottom: "1px solid #999",
                  padding: "6px 30px",
                  fontFamily: "Poppins",
                  boxSizing: "border-box",
                  background: "#f9f7fb",
                  fontSize: "16px",
                  border: "2px solid",
                  borderColor: "#4d3061",
                }}
                type="text"
                placeholder="Say hello to pew-pew..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <input
                className="input"
                style={{
                  width: "80vh",
                  minHeight: "10vh",
                  display: "block",
                  border: "none",
                  borderBottom: "1px solid #999",
                  padding: "6px 30px",
                  fontFamily: "Poppins",
                  boxSizing: "border-box",
                  background: "#f9f7fb",
                  fontSize: "16px",
                  border: "2px solid",
                  borderColor: "#4d3061",
                }}
                type="text"
                placeholder="Help me learn..."
                value={newAnswer}
                onChange={(e) => setNewAnswer(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <br />
              <button
                onClick={sendMessage}
                style={{
                  backgroundColor: "#342044",
                  color: "#fff",
                  fontWeight: "700",
                  fontSize: "14px",
                  cursor: "pointer",
                  padding: "0.5rem 1.25rem",
                  borderRadius: "7px",
                  textTransform: "none",
                  display: "block",
                  border: "2px solid transparent",
                }}
              >
                Send
              </button>
            </div>
          </Box>
        </Box>
        <br /> <br />
        <Footer />
      </Box>
    </>
  );
};

export default Chatbot;

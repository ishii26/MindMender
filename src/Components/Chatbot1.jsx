import React, { useState } from "react";
import { Box, styled, Typography } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../Chatbot.css";

const Chatbot = () => {
  const [userInput, setUserInput] = useState("");
  const [, setBotResponse] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [querySubmitted, setQuerySubmitted] = useState(false);

  const handleSubmit = () => {
    if (userInput.trim() === "") {
      return;
    }
  
    const trimmedInput = userInput.trim().toLowerCase();
    let matchesInfo = [];
  
    for (const [index, entry] of keywordResponses.entries()) {
      const keywords = entry.keywords;
  
      let hits = keywords.filter((keyword) => {
        const wordLower = keyword.toLowerCase();
        return trimmedInput.includes(wordLower);
      });
  
      if (hits.length > 0) {
        matchesInfo.push({ index, hits: hits.length });
      }
    }
  
    let responseText;
  
    if (matchesInfo.length > 0) {
      matchesInfo.sort((a, b) => b.hits - a.hits); // Sort matches by number of hits
      const maxHitsIndex = matchesInfo[0].index;
      responseText = keywordResponses[maxHitsIndex].response;
    } else {
      responseText =
        "I'm afraid I cannot answer that. Please reframe your query.";
    }
  
    setBotResponse(responseText);
    setChatHistory((prevChat) => [
      ...prevChat,
      { query: userInput, response: responseText },
    ]);
  
    setUserInput("");
    setQuerySubmitted(true);
  };
  

  // Define keywords and their corresponding responses
  const keywordResponses = [
    {
      keywords: [
        "anxiety",
        "define",
        "anxiousness",
        "overthinking",
        "what",
        "feel",
        "anxious",
        "think",
        "Do I",
      ],
      response:
        "Anxiety is a natural and common human emotion. It's the body's way of responding to stress or perceived threats. When you're anxious, you might feel uneasy, worried, or even fearful about a situation or future events. Anxiety can manifest in various physical and emotional ways, including increased heart rate, tense muscles, restlessness, and racing thoughts. If you have more specific questions about anxiety or want to discuss your personal experiences, feel free to ask.",
    },
    {
      keywords: [
        "depression",
        "depressed",
        "extreme",
        "sadness",
        "what",
        "define",
        "feel",
        "think",
        "Do I",
      ],
      response:
        "Depression is a complex and serious mood disorder that affects the way a person thinks, feels, and acts. It often involves a persistent feeling of sadness, hopelessness, and a lack of interest in activities that were once enjoyable. It's important to note that depression is not just feeling sad; it is a medical condition that can affect a person's mental and physical well-being. Many factors can contribute to depression, including genetics, life events, and chemical imbalances in the brain. If you or someone you know is dealing with depression, it's essential to seek help and support. Effective treatments, such as therapy, medication, or a combination of both, can help manage depression and improve one's quality of life. Don't hesitate to reach out to a mental health professional or someone you trust to discuss your feelings and get the help you need.",
    },
    {
      keywords: [
        "panic",
        "attacks",
        "disorder",
        "episode",
        "attack",
        "what",
        "define",
        "feel",
        "think",
        "Do I",
      ],
      response:
        "A panic attack is a sudden and intense surge of fear or anxiety that can be overwhelming and debilitating. During a panic attack, you may experience a combination of physical and psychological symptoms, such as a rapid heart rate, shortness of breath, trembling, sweating, chest pain, dizziness, and a feeling of impending doom.",
    },
    {
      keywords: [
        "bipolar",
        "disorder",
        "bpd",
        "what",
        "define",
        "multiple",
        "personality",
        "personalities",
        "feel",
        "think",
        "Do I",
      ],
      response:
        "BPD stands for Borderline Personality Disorder, which is a mental health condition characterized by persistent patterns of instability in mood, self-image, relationships, and behavior. People with BPD often experience intense emotions and may have difficulty regulating them. They can have a fear of abandonment, which can lead to impulsive and risky behaviors to avoid being left alone. If you or someone you know is dealing with BPD, seeking help from a mental health professional, such as a therapist or psychiatrist, is recommended. They can provide a proper diagnosis and work with you to develop a treatment plan tailored to your specific needs. Remember, there is hope for managing and living a fulfilling life with BPD.",
    },
    {
      keywords: [
        "ocd",
        "obsessive",
        "compulsive",
        "disorder",
        "what",
        "define",
        "obsessed",
        "clean",
        "cleanliness",
        "cleaning",
        "thoughts",
        "compulsive",
        "behavior",
        "feel",
        "think",
        "Do I",
      ],
      response:
        "OCD, or Obsessive-Compulsive Disorder, is a mental health condition that is characterized by the presence of obsessive thoughts and compulsive behaviors. Obsessions are intrusive and distressing thoughts, images, or urges that recur and can be difficult to control. Compulsions are repetitive actions or rituals that an individual feels compelled to perform in response to their obsessions. People with OCD often engage in these compulsions to reduce anxiety or prevent a feared event. If you or someone you know is dealing with OCD, seeking support from a mental health professional is a crucial step toward managing the condition. Remember, you're not alone, and there is help available.",
    },
    {
      keywords: [
        "stress",
        "stressed",
        "feel",
        "feeling",
        "define",
        "what",
        "work",
        "think",
        "Do I",
      ],
      response:
        "Stress is a natural response that your body and mind experience when faced with challenges, changes, or demands in your life. It's your body's way of preparing for a 'fight or flight' situation. When you perceive a threat or pressure, your body releases stress hormones, such as cortisol and adrenaline, which can lead to various physical and emotional changes. Learning to manage and reduce stress is important for your overall health and well-being. Strategies for stress management may include relaxation techniques, exercise, mindfulness, and seeking support from friends, family, or a mental health professional. Remember, it's normal to experience stress, and there are effective ways to cope with it and maintain a healthy balance in your life.",
    },
    {
      keywords: [
        "ptsd",
        "post",
        "traumatic",
        "stress",
        "disorder",
        "trauma",
        "define",
        "what",
        "army",
        "soldier",
        "assault",
        "flashback",
        "flashbacks",
        "feel",
        "think",
        "Do I",
      ],
      response:
        "PTSD stands for Post-Traumatic Stress Disorder. It's a mental health condition that can develop in individuals who have experienced a traumatic event. This could be something like a natural disaster, a serious accident, combat, physical or sexual assault, or any other event that was life-threatening or caused intense fear and helplessness. PTSD can lead to a range of distressing symptoms, including flashbacks, nightmares, severe anxiety, and intrusive thoughts related to the traumatic event. It can also lead to avoidance of situations or places that remind the individual of the trauma, emotional numbness, and increased irritability. If you or someone you know is experiencing symptoms of PTSD, seeking professional help is a crucial step toward healing and recovery. You don't have to go through this alone, and support is available.",
    },
    {
      keywords: [
        "ed",
        "eating",
        "disorder",
        "what",
        "define",
        "bulimia",
        "anorexia",
        "binge",
        "eat",
        "eating",
        "body",
        "image",
        "issues",
        "issue",
        "feel",
        "think",
        "Do I",
      ],
      response:
        "An eating disorder (ED) is a serious mental health condition characterized by unhealthy eating behaviors, thoughts, and emotions. There are several types of eating disorders, but the most common ones include: Anorexia Nervosa: Involves extreme restriction of food intake, leading to severe weight loss, often accompanied by an intense fear of gaining weight and a distorted body image. Bulimia Nervosa: Involves recurrent episodes of overeating (binge-eating) followed by compensatory behaviors like vomiting, laxative use, or excessive exercise. Binge-Eating Disorder: Similar to bulimia but without the compensatory behaviors. Individuals with this disorder frequently consume large amounts of food in a short time, often feeling out of control during episodes. Eating disorders can have serious physical and psychological consequences. They are not just about food but often related to deeper emotional and self-esteem issues. Treatment for eating disorders typically involves a combination of medical, nutritional, and psychological interventions. If you or someone you know is struggling with an eating disorder, it's essential to seek help from a healthcare provider or mental health professional. Early intervention can lead to a better chance of recovery, and you don't have to go through it alone.",
    },
  ];
  

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (userInput.trim() !== "") {
        handleSubmit();
      }
    }
  };

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "40px",
    color: "#535878",
    fontWeight: "bold",
    margin: theme.spacing(2, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
  }));

  return (
    <>
    <Navbar />
    <Box>
      <br />
      <Title variant="h1" sx={{ marginLeft: "25vh" }}>
        Serene
      </Title>
      <div className="chatbot">
        <div
          className={`chatbot-container ${
            querySubmitted ? "query-submitted" : ""
          }`}
        >
          <div className="chat-history">
            {chatHistory.map((chat, index) => (
              <div key={index} className="chat-entry">
                <div className="user-message">
                  <strong>User:</strong> {chat.query}
                </div>
                <div className="bot-message">
                  <strong>Bot:</strong> {chat.response}
                </div>
              </div>
            ))}
          </div>
          <div className="user-input-container">
            <input
              type="text"
              value={userInput}
              placeholder="What can I help you with?"
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="user-input"
            />
            <button
              onClick={handleSubmit}
              className="ask-button"
              disabled={userInput.trim() === ""}
            >
              Ask
            </button>
          </div>
        </div>
      </div>
    </Box>
    <Footer/>
    </>
  );
};

export default Chatbot;

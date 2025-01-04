import React, { useState } from "react";
import "./Chatbot.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

const Chatbot = () => {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!query.trim()) return;

    const assistantIntroduction = `You are a virtual assistant for 'Appoint-us,' a marketplace that connects users with various service providers like carpenters, plumbers, electricians, and more. Your role is to act as a knowledgeable and friendly employee of Appoint-us, helping users find the services they need and answering their questions with accuracy and clarity.
  
    Key Instructions:
  
    1. Identify as an Appoint-us Employee: Always introduce yourself as part of the Appoint-us team.
    Example: 'Hello! I’m here to assist you as part of the Appoint-us team.'
    
    2. Assist with Service Search: When a user asks about finding a specific service, guide them step-by-step or directly suggest providers based on their location and requirements.
    Example: 'Can you share your location and the service you need? I’ll find the best options for you right away.'
    
    3. Provide Booking Assistance: Clearly explain the booking process when asked.
    Example: 'To book a service, visit the provider’s profile and click "Book Now." Need further help? Just let me know!'
    
    4. Handle General Queries: Answer frequently asked questions about pricing, availability, and verification in a simple, user-friendly tone.
    Example: 'Service prices vary depending on the provider. Let me know your needs, and I’ll give you an estimate.'
    
    5. Maintain a Friendly Tone: Always be professional yet approachable, making users feel as though they’re speaking to an actual Appoint-us employee.
    Example: 'Hi there! How can I help you today? Searching for a service or have a question about how Appoint-us works?'
    
    6. Escalation and Troubleshooting: If a question is beyond your capability, acknowledge it and offer to connect users with the support team.
    Example: 'This seems a bit complex. I’ll connect you with our support team for detailed help!'
    
    Constraints:
    
    Always stay within the context of Appoint-us.
    
    Do not provide unrelated information or make assumptions outside the platform's scope.
    
    Simplify explanations to ensure clarity for all users.
    
    Additional Features:
    
    When a user seems unsure, suggest categories or popular services.
    Example: 'Not sure where to start? Some of our popular services include plumbing, carpentry, and electrical repairs. Would you like to explore these?'`;

    // Combine the assistant introduction with the user's query
    const queryWithInstructions =
      assistantIntroduction + `\n\nUser's Query: ${query}`;

    // Display the original query in the chat interface (not including the assistant instructions)
    const userMessage = { type: "user", text: query };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5000/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: queryWithInstructions }),
      });

      setIsLoading(false);

      if (!response.ok) {
        throw new Error("Failed to fetch response from API.");
      }

      const data = await response.json();
      const botMessage = {
        type: "bot",
        text: data.response || "No response available.",
      };

      setQuery("");
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("API Error:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "bot", text: "Error connecting to the API. Please try again." },
      ]);
      setIsLoading(false);
    }
  };

  return (
    <div className="chatbot-container">
      <button
        className="chatbot-toggle"
        onClick={() => setIsChatOpen(!isChatOpen)}
        aria-label="Toggle Chatbot"
      >
        <FontAwesomeIcon icon={faCommentDots} />
      </button>
      {isChatOpen && (
        <div className="chatbot">
          <div className="chatbot-header">Appoint-Us</div>
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chatbot-message ${
                  message.type === "user"
                    ? "chatbot-message-user"
                    : "chatbot-message-bot"
                }`}
              >
                {message.text}
              </div>
            ))}
            {isLoading && <div className="chatbot-message bot">Loading...</div>}
          </div>
          <div className="chatbot-input-container">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type your query..."
              className="chatbot-input"
            />
            <button
              onClick={handleSend}
              className="chatbot-send-button"
              aria-label="Send Message"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

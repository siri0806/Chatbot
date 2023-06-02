import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ChatBot = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated
    const token = localStorage.getItem("token");
    if (!token) {
      // User is not authenticated, redirect to login
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      <p>Chat Bot content goes here...</p>
    </div>
  );
};

export default ChatBot;

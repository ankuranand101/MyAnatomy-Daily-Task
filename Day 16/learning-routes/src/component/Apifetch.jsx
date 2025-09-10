import React, { useState } from "react";
import axios from "axios";

export default function AIIntegration() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!input) return;
    setLoading(true);
    setResponse("");

    try {
      const res = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: input }],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: Bearer YOUR_API_KEY,
          },
        }
      );

      setResponse(res.data.choices[0].message.content);
    } catch (error) {
      console.error(error);
      setResponse("Error fetching response.");
    }

    setLoading(false);
  };
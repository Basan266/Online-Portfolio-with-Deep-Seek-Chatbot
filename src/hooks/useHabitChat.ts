// 


import OpenAI from "openai";
import { useState } from "react";

/* =========================
   ENV CONFIG & CLIENT
========================= */
const API_KEY = import.meta.env.VITE_DEEPSEEK_API_KEY;

const client = new OpenAI({
  apiKey: API_KEY,
  baseURL: "https://api.deepseek.com", // Importante ito para kumonekta sa DeepSeek
  dangerouslyAllowBrowser: true, // Kailangan ito para sa client-side React apps
});

/* =========================
   SYSTEM PERSONA
========================= */
const ROBERT_PROFILE = `
You are the digital twin of Robert Basan.
Profile: Junior IT / Android Developer, STI College Ortigas-Cainta (Cum Laude, 2024).
Skills: Android (Java / Kotlin), React.js, HTML / CSS, Cloud Technologies, VMware.
Project: JuanCast (Google Play Store).
Rules: Respond using "I" or "Ako". Tone: Professional, confident, tech-savvy.
`;

interface Message {
  role: "user" | "assistant";
  content: string;
}

export const useHabitChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (userInput: string) => {
    if (!userInput.trim() || isLoading) return;

    setIsLoading(true);
    // Idagdag ang message ng user sa UI
    const newMessages: Message[] = [...messages, { role: "user", content: userInput }];
    setMessages(newMessages);

    try {
      const response = await client.chat.completions.create({
        model: "deepseek-chat", // Ito ang standard model nila
        messages: [
          { role: "system", content: ROBERT_PROFILE },
          ...newMessages,
        ],
      });

      const botReply = response.choices[0].message.content || "";

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: botReply },
      ]);

    } catch (error) {
      console.error("DeepSeek Error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "❌ Error sa pag-connect sa DeepSeek." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return { messages, sendMessage, isLoading };
};
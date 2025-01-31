import React from 'react';
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
    botName: 'ChillBot',
    initialMessages: [
        createChatBotMessage("Hello! I am ChillBot the chill AF! Nice to meet you, How can I help you?")
    ]
}

  export default config;

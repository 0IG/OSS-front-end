import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import DDB from "./DDB/DDB";

const configuration = new Configuration({
  apiKey: process.env.SECRET_OPENAPI_KEY,
});

const openai = new OpenAIApi(configuration);

const OpenAi = () => {
  const [aiMessage, setAiMessage] = useState("");

  const sendReqAi = async () => {
    console.log("afsdf");
    const prompt = "What is a good ice cream place in New York?";

    const response = openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    setAiMessage("sdfsdfsdf"); //response.data.choices[0].message.content);
  };

  return (
    <div className="openAi">
      {/* <button className="button-for-ai" onClick={() => sendReqAi()}>
        send req
      </button>
      {aiMessage} */}
      <DDB />
    </div>
  );
};

export default OpenAi;

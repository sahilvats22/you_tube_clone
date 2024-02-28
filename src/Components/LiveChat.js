import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/ChatSlice";
import { generateName, makerandomsentence } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const chatMessages = useSelector((store) => store.chat.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateName(),
          message: makerandomsentence(30),
        })
      );
    }, 500);
    return () => clearInterval(interval);
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (liveMessage.trim() !== "") {
      dispatch(
        addMessage({
          name: "You", // Assuming "You" is the user sending the message
          message: liveMessage,
        })
      );
      setLiveMessage("");
    }
  };

  return (
    <>
      <div className="flex flex-col-reverse overflow-y-auto h-[600px] w-full bg-white dark:bg-gray-400 rounded-lg p-4 space-y-reverse space-y-2">
        {chatMessages.map((c, i) => (
          <ChatMessage name={c.name} message={c.message} key={i} />
        ))}
      </div>
      <form
        className="flex items-center w-full p-2 ml-2 border border-black bg-white dark:bg-gray-400 rounded-lg"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="flex-grow px-4 py-2 focus:outline-none"
          placeholder="Type a message..."
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg ml-2 hover:bg-blue-600 transition-colors"
        >
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;

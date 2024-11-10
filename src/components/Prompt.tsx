import { useState, useEffect } from "react";
import userMock from "../mockdata/user.json";
import Refresh from "../assets/icon/refresh.svg";
import Magic from "../assets/icon/magic.svg";

const Prompt = () => {
  const [prompt, setPrompt] = useState("");

  // Load the initial prompt from user.json when the component mounts
  useEffect(() => {
    setPrompt(userMock.prompt); // Assumes user.json has a `prompt` field
  }, []);

  // Handler to reload the initial prompt
  const handleReloadPrompt = () => {
    setPrompt(userMock.prompt);
  };

  return (
    <div>
      <div className="w-full relative">
        <div className="w-full p-6 flex items-center bg-black text-white">
          <p>Click Test to try out your prompt...</p>
        </div>
        <div className="border-2 border-black relative">
          {/* Refresh button positioned at the top right */}
          <button
            className="absolute top-2 right-2 text-black"
            onClick={handleReloadPrompt}
          >
            <img src={Refresh} alt="refresh button" />
          </button>
          <div className="p-2">
            <textarea
              className="w-full h-32 p-4 resize-none outline-none"
              placeholder="Enter your prompt here..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)} // Allows user to edit the prompt
            ></textarea>
            <div className="absolute bottom-2 right-2 flex space-x-2">
              <button className="flex items-center bg-black text-white px-4 space-x-2 py-2">
                <img src={Magic} alt="Magic load svg" />
                <p>Test</p>
              </button>
              <button className="bg-black text-white px-8 py-2">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prompt;

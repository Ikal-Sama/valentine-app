import React, { useState } from "react";
import "./App.css";
import { PiFlowerTulip } from "react-icons/pi";
import Emoji from "./assets/emoji.gif";

function App() {
  const [yesButtonSize, setYesButtonSize] = useState(16);
  const [yesButtonText, setYesButtonText] = useState("Yes");
  const [imageVisible, setImageVisible] = useState(false);
  const [buttonsVisible, setButtonsVisible] = useState(true); // renamed to buttonsVisible

  const handleYesButtonClick = () => {
    setYesButtonSize(16);
    setYesButtonText("Thank you");
    setImageVisible(true);
    setButtonsVisible(false); // hide both buttons
  };

  const handleNoButtonClick = () => {
    setYesButtonSize((prevSize) => prevSize + 10);
    setYesButtonText("Please");
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl text-slate-700">Will you be my Valentine?</h1>
        <PiFlowerTulip fontSize={30} className="text-pink-600" />
      </div>
      {buttonsVisible && ( // render the buttons only if buttonsVisible is true
        <div className="flex items-center justify-center mt-10 gap-5">
          <button
            onClick={handleNoButtonClick}
            className="bg-red-500 text-white py-2 px-10 rounded-md"
          >
            No
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-10 rounded-md"
            onClick={handleYesButtonClick}
            style={{ fontSize: `${yesButtonSize}px` }}
          >
            {yesButtonText}
          </button>
        </div>
      )}
      {imageVisible && (
        <div>
          <h1 className="text-2xl mt-5">Thank You ^^</h1>
          <img src={Emoji} alt="Emoji" />
        </div>
      )}
    </div>
  );
}

export default App;

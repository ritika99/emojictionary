import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😍": "Love",
  "😂": "Laugh",
  "👍🏻": "Like",
  "👎🏻": "Dislike",
  "😌": "Shy",
  "😢": "Cry",
  "😭": "Cry",
  "😡": "Angry",
  "😔": "Sad",
  "😄": "Happy",
  "😊": "Happy",
  "😘": "Flying Kiss"
};

var emojiList = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiChangehandler(event) {
    var inputEmoji = event.target.value;
    var meaning;

    if (inputEmoji in emojiDictionary) {
      meaning = emojiDictionary[inputEmoji];
    } else {
      meaning = "Opps! Try another emoji.";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>
        <span style={{ color: "yellow" }}>Emoji</span>ctionary
      </h1>
      <input
        onChange={emojiChangehandler}
        placeholder="Insert an emoji here..."
      ></input>
      <h3> {meaning} </h3>
      <div>
        {emojiList.map((emoji) => {
          return (
            <span
              style={{
                padding: "0.5rem",
                fontSize: "2.5rem",
                cursor: "pointer"
              }}
              onClick={() => emojiClickHandler(emoji)}
              key={emoji}
            >
              {" "}
              {emoji}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
}

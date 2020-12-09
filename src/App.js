import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🏳": "peace",
  "🏴": "protest",
  "🏁": "racing",
  "🚩": "golf or sporting event",
  "✋": "saying hello or goodbye",
  "🤚": "salutation",
  "🙏": "to welcome",
  "👌": "okay",
  "✌️": "peace",
  "✊": "standing up",
  "👊": "high five",
  "👎": "You suck!",
  "🖐️": "to wait or stop",
  "🤟": "love-you",
  "🤜": "great-job",
  "🤛": "High five",
  "👏": "clap",
  "🤙": "call me",
  "☝": "question",
  "🤞": "for luck",
  "🖕": "fuck you",
  "👍": "support",
  "👎": "not support",
  "🤲": "prayer",
  "🙌": "respect"
};

const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState(""); /** concept 2 is useState */
  const [meaning, setMeaning] = useState("translation will appear here..");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App">
      <h1>know your signs</h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Search your sign emoji"}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />
      <h2> {emoji} </h2> {/** Concept 1: JSX */}
      <h3> {meaning} </h3> {/** how much part is re-rendered. */}
      {emojis.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}
